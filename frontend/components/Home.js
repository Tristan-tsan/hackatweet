import styles from '../styles/Home.module.css';
import { Input } from 'antd';

const { TextArea } = Input;

function Home() {
  return (
    <div>
      <main className={styles.main}>
        <h1 className={styles.title}>
          <a>Home</a>
          <br />
          <TextArea showCount maxLength={280} placeholder="What's up?"/>
            <div>
              <button className={styles.tweetbutton}>Tweet</button>
            </div>
        </h1>
      </main>
    </div>
  );
}

export default Home;
