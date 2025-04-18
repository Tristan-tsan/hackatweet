import styles from '../styles/Home.module.css';
import { Input } from 'antd';

const { TextArea } = Input;

function Home() {
  return (

    <div className={styles.container}>
        
        <div className={styles.index}> 
          <img className={styles.logo} src="/logo.png" />
        </div>

        <main className={styles.main}>
          <h1 className={styles.title}>Home</h1>
          <br />
          <TextArea showCount maxLength={280} placeholder="What's up?"/>
            <div>
              <button className={styles.tweetButton}>Tweet</button>
            </div>
        </main>

        <div className={styles.trends}> 
          <h1>TRENDS</h1>
        </div>
 
    </div>
  );
}

export default Home;
