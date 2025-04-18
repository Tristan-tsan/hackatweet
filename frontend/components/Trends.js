import styles from '../styles/Home.module.css';

function Trends({ tweets }) {

  const extractHashtags = () => {
    
    const hashtags = tweets
    .map(tweet => tweet.message.match(/#[\wÀ-ÿ]+/g) || []).flat();
    return [...new Set(hashtags)];
  };

  return (
    <div className={styles.trends}>
      <h1 className={styles.title}>Trends</h1>
      <ul>
        {extractHashtags().map((hashtag, index) => (
          <span key={index} className={styles.trendsList}>{hashtag}</span>
        ))}
      </ul>
    </div>
  );
}

export default Trends;