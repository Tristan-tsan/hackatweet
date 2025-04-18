import styles from '../styles/Home.module.css';
import Tweet from './Tweet';
import Trends from './Trends';
import { Input } from 'antd';
import Link from 'next/link';
import { useState, useEffect } from 'react';


const { TextArea } = Input;

function Home() {

  const [tweets, setTweets] = useState([]);
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetch('http://localhost:3000/tweet/get')
      .then(res => res.json())
      .then(data => setTweets(data));
  }, []);

  const handleTweetSubmit = () => {
    if (message.trim() === '') return;

    const newTweet = {
      username: 'Chuck',
      firstname: 'LeNorris',
      message: message,
    };

    fetch('http://localhost:3000/tweet/add', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newTweet),
    })
      .then(res => res.json())
      .then(data => {
        setTweets([data, ...tweets]);
        setMessage('');
      });
  };

  const handleDeleteTweet = (id) => {
    setTweets(tweets.filter(tweet => tweet._id !== id));
  };


  return (

    <div className={styles.container}>
        
        <div className={styles.index}>
          <Link href="/">
          <img className={styles.logo} src="/logo.png" />
          </Link>
        </div>

        <main className={styles.main}>
          <h1 className={styles.title}>Home</h1>
          <br />
          <TextArea value={message} onChange={(e) => setMessage(e.target.value)} showCount maxLength={280} placeholder="What's up?"/>
            <div>
              <button className={styles.tweetButton} onClick={handleTweetSubmit}>Tweet</button>
            </div>
            {tweets.map(tweet => (
            <Tweet key={tweet._id} tweet={tweet} onDelete={handleDeleteTweet}/>))}
        </main>

        <div className={styles.trends}> 
        <Trends tweets={tweets} />
        </div>
 
    </div>
  );
}

export default Home;
