import { useState } from 'react';
import TextField from '@mui/material/TextField';
import logo from '../../assests/images/logo.png';
import LoginRow from '../../components/LoginRow';
import SignUp from '../../components/SignUp';
import { ArrowForwardIos } from '@mui/icons-material';
import tvImage from '../../assests/images/tv-image.png';
import downloadImage from '../../assests/images/download-image.png';
import kidsImage from '../../assests/images/kids-image.png';

import './login-page.css';
import SingleQuestion from '../../components/SingleQuestion';
import Footer from '../../components/Footer';

function LoginPage() {
  const [signIn, setSignIn] = useState(false);

  return (
    <main className='loginpage'>
      <div className='loginpage__background'>
        <div className='section-center loginpage__backgroundCenter'>
          <div className='loginpage__nav'>
            <img
              src={logo}
              className='loginpage__logo'
              onClick={() => setSignIn(false)}
              alt='netflix logo'
            />
            <button
              className='loginpage__button'
              onClick={() => setSignIn(true)}
            >
              sign in
            </button>
          </div>

          <div className='loginpage__backgroundContent'>
            {signIn ? (
              <SignUp />
            ) : (
              <>
                <h1>Unlimited movies, TV shows, and more.</h1>
                <h2>Watch anywhere. Cancel anytime.</h2>
                <h3>
                  Ready to watch? Enter your email to create or restart your
                  membership.
                </h3>

                <div className='loginpage__backgroundInput'>
                  <TextField
                    fullWidth
                    label='Email Address'
                    id='fullWidth'
                    type='email'
                    variant='filled'
                  />

                  <button onClick={() => setSignIn(true)}>
                    Get started <ArrowForwardIos />
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      </div>

      {!signIn && (
        <>
          <section className='loginpage__mainBody'>
            <LoginRow
              title='Enjoy on your TV.'
              description='Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.'
              image={tvImage}
            />

            <LoginRow
              title='Download your shows to watch offline.'
              description='Save your favorites easily and always have something to watch.'
              image={downloadImage}
              order={1}
            />

            <LoginRow
              title='Watch everywhere.'
              description='Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.'
            />

            <LoginRow
              title='Create profiles for kids.'
              description='Send kids on adventures with their favorite characters in a space made just for them—free with your membership.'
              image={kidsImage}
            />
          </section>

          <section className='loginpage__faq'>
            <div className='section-center loginpage__faqCenter'>
              <div className='loginpage__faqTitle'>
                <h2>Frequently Asked Questions</h2>
              </div>

              <div className='loginpage__faqContainer'>
                <SingleQuestion
                  question='What is Netflix?'
                  answers={[
                    'Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.',
                    "You can also download your favorite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere.",
                  ]}
                />
                <SingleQuestion
                  question='How much does Netflix cost?'
                  answers={[
                    'Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from Rs250 to Rs1,100 a month. No extra costs, no contracts.',
                  ]}
                />
                <SingleQuestion
                  question='Where can I watch?'
                  answers={[
                    'Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.',
                    "You can also download your favorite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere.",
                  ]}
                />
                <SingleQuestion
                  question='How do I cancel?'
                  answers={[
                    'Netflix is flexible. There are no pesky contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.',
                  ]}
                />

                <SingleQuestion
                  question='What can I watch on Netflix?'
                  answers={[
                    'Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.',
                  ]}
                />

                <SingleQuestion
                  question='Is Netflix good for kids?'
                  answers={[
                    'The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and movies in their own space.',
                    'Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see.',
                  ]}
                />
              </div>

              <div className='loginpage__bottom'>
                <h2>
                  Ready to watch? Enter your email to create or restart your
                  membership.
                </h2>

                <div className='loginpage__backgroundInput'>
                  <TextField
                    fullWidth
                    label='Email Address'
                    id='fullWidth'
                    type='email'
                    variant='filled'
                  />

                  <button onClick={() => setSignIn(true)}>
                    Get started <ArrowForwardIos />
                  </button>
                </div>
              </div>
            </div>
          </section>
        </>
      )}

      <Footer />
    </main>
  );
}

export default LoginPage;
