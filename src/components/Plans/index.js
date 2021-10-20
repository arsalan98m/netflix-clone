import {
  getDocs,
  where,
  query,
  collection,
  addDoc,
  onSnapshot,
  doc,
} from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { db } from '../../config/firebase';
import { selectUser } from '../../features/userSlice';
import { loadStripe } from '@stripe/stripe-js';
import './Plans.css';

function Plans() {
  const [products, setProducts] = useState([]);
  const [subscription, setSubscription] = useState(null);
  const user = useSelector(selectUser);

  useEffect(() => {
    const fetchSubscription = async () => {
      const q = query(collection(db, `customers/${user.uid}/subscriptions`));

      const querySnapshot = await getDocs(q);

      querySnapshot.forEach((doc) => {
        setSubscription({
          role: doc.data().role,
          current_period_end: doc.data().current_period_end.seconds,
          current_period_start: doc.data().current_period_start.seconds,
        });
      });
    };

    fetchSubscription();
  }, [user.uid]);

  const loadCheckout = async (priceId) => {
    const docRef = await addDoc(
      collection(db, `customers/${user.uid}/checkout_sessions`),
      {
        price: priceId,
        success_url: window.location.origin,
        cancel_url: window.location.origin,
      }
    );

    onSnapshot(doc(db, docRef.path), async (snap) => {
      const { sessionId } = snap.data();

      if (sessionId) {
        const stripe = await loadStripe(
          'pk_test_51JmJGeIlTv6rjtCMO9SNF01KerrVofpj4N2vOgIfTqJbPT4dORCQ4pzqtqG8d7eUuyPNRiE5LCMKAiYGLOh9qd4i00cMOVIhR1'
        );

        stripe.redirectToCheckout({ sessionId });
      }
    });
  };

  useEffect(() => {
    const fetchProducts = async () => {
      const q = query(collection(db, 'products'), where('active', '==', true));

      const querySnapshot = await getDocs(q);

      const products = {};
      querySnapshot.forEach(async (doc) => {
        products[doc.id] = doc.data();

        // Get Subcollection Prices
        const priceSnap = await doc.ref.id;

        const priceQuery = await getDocs(
          query(collection(db, `products/${priceSnap}/prices`))
        );
        priceQuery.forEach((price) => {
          products[doc.id].prices = {
            priceId: price.id,
            priceData: price.data(),
          };
        });
      });

      setProducts(products);
    };

    fetchProducts();
  }, []);

  return (
    <div className='plans'>
      <br />
      {subscription && (
        <p>
          Renewal date:{' '}
          {new Date(
            subscription?.current_period_end * 1000
          ).toLocaleDateString()}{' '}
        </p>
      )}
      {Object.entries(products).map(([productId, productData]) => {
        // add some logic to check if ther user's subscription is active.....

        const isCurrentPackage = productData?.name
          .toLowerCase()
          .includes(subscription?.role);
        return (
          <div
            className={`plans__singlePlan ${
              isCurrentPackage && 'plans__singlePlan--disabled'
            }`}
            key={productId}
          >
            <div className='plans_singlePlanInfo'>
              <h5>{productData.name}</h5>
              <h6>{productData.description}</h6>
            </div>
            <button
              onClick={() =>
                (!isCurrentPackage &&
                  !subscription &&
                  loadCheckout(productData?.prices?.priceId)) ||
                alert('You are alreay subscribed')
              }
            >
              {isCurrentPackage ? 'Current Package' : 'Subscribe'}
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default Plans;
