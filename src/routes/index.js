import HomePage from '../pages/home-page';
import LoginPage from '../pages/login-page';
import ProfilePage from '../pages/profile-page';
import { Switch, Route } from 'react-router-dom';
import { useEffect } from 'react';
import { auth } from '../config/firebase';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout, selectUser } from '../features/userSlice';

const Routes = () => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        // Logged In
        dispatch(login({ uid: userAuth.uid, email: userAuth.email }));
      } else {
        // Logged Out
        dispatch(logout());
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <>
      {!user ? (
        <LoginPage />
      ) : (
        <Switch>
          <Route path='/' exact component={HomePage} />
          <Route path='/profile' exact component={ProfilePage} />
        </Switch>
      )}
    </>
  );
};

export default Routes;
