import { useState } from 'react';
import styles from '../styles/Home.module.css';
import SignIn from './SignIn';

function Home() {
  const [showSignIn, setShowSignIn] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <img src="logo.jpg" alt="Hackatweet Logo" className={styles.logo} />
      </div>
      <div className={styles.right}>
        <img src="logo-small.jpg" alt="Small Logo" className={styles.logoSmall} />
        <h1 className={styles.headline}>See what’s<br />happening</h1>
        <p className={styles.subheadline}>Join Hackatweet today.</p>

        <button className={styles.signup} onClick={() => setShowSignUp(true)}>
          Sign up
        </button>

        <p className={styles.loginPrompt}>Already have an account?</p>

        <button className={styles.signin} onClick={() => setShowSignIn(true)}>
          Sign in
        </button>

        {showSignIn && <SignIn/>}
        {showSignUp && <div className={styles.modal}>Sign Up Modal</div>}
      </div>
    </div>
  );
}

export default Home;
