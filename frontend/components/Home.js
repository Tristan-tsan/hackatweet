import styles from '../styles/Home.module.css';
import Tweet from './Tweet';
import Hashtag from './hashtag';
import { Input } from 'antd';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import SignIn from './SignIn';

const { TextArea } = Input;

function Home() {
  const [taggy, setTaggy] = useState(true);
  const [tweets, setTweets] = useState([]);
  const [showSignIn, setShowSignIn] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);
  const [searchHash, setSearchHash] = useState('');

  if (!showSignIn) {
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
  }else{
  if (!taggy) {
  //useEffect(() => {
    fetch('http://localhost:3000/tweet/get')
      .then(res => res.json())
      .then(data => setTweets(data));
  //}, []);

  const handleDeleteTweet = (id) => {
    setTweets(tweets.filter(tweet => tweet._id !== id));
  };


  return (

    <div className={styles.containerLogin}>
        
        <div className={styles.index}>
          <Link href="/">
          <img className={styles.logoLogin} src="/logo.png" />
          </Link>
        </div>

        <main className={styles.main}>
          <h1 className={styles.title}>Home</h1>
          <br />
          <TextArea showCount maxLength={280} placeholder="What's up?"/>
            <div>
              <button className={styles.tweetButton}>Tweet</button>
            </div>
            {tweets.map(tweet => (
            <Tweet key={tweet._id} tweet={tweet} onDelete={handleDeleteTweet}/>
      ))}
        </main>

        <div className={styles.trends}> 
          <h1>TRENDS</h1>
        </div>
 
    </div>
  );
}else{  
  

  const searchButton = () => {
     // console.log(searchHash);
     if (!searchHash) {
      fetch(`http://localhost:3000/Tweets/taggies/lsdkfjsdll`)
      .then(res => res.json())
      .then(data => setTweets(data.message));
     };
        fetch(`http://localhost:3000/Tweets/taggies/${searchHash}`)
          .then(res => res.json())
          .then(data => setTweets(data.message));
        
  
}
  return (
    <div>


<div className={styles.containerLogin}>
    
    <div className={styles.index}>
      <Link href="/">
      <img className={styles.logoLogin} src="/logo.png" />
      </Link>
    </div>
    <main className={styles.main}>
      <h1 className={styles.title}>Hashtag</h1>
      <br />
      <input type='text' placeholder='hashg' onChange={(e) => setSearchHash(e.target.value)} value={searchHash} />
        <button id='searchButton' onClick={() => searchButton()}>search</button>
        <div>
          
        </div>
        {tweets.map(tweet => (
        <Hashtag key={tweet._id} tweet={tweet} />
  ))}
    </main>

    <div className={styles.trends}> 
      <h1>TRENDS</h1>
    </div>

</div>
</div>
);
}
}
}

export default Home;