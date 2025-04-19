import styles from '../styles/Home.module.css';
import { useState } from 'react';
import { Button } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

//const { Popover } = Input;

function Tweet({ tweet, onDelete }) {

    //Etat du like de l'utilisateur
    const [like, setLike] = useState(false);
    //Etat du compteur de like
    const [likeCount, setLikeCount] = useState(0);

    //Compteur de like
    const handleLike = () => {
        if (!like) {
            setLike(true);
            setLikeCount(likeCount + 1);
        } else {
            setLike(false);
            setLikeCount(likeCount - 1);
        }
    };

    //Fonction de suppression de tweet
    const handleDelete = () => {
        fetch(`http://localhost:3000/tweet/delete/${tweet._id}`, {
            method: 'DELETE',
        })
            .then((res) => res.json())
            .then(() => { onDelete(tweet._id); })
    };


    //Lister et afficher les tweets
    return (
        <main className={styles.tweet}>
            <div className={styles.tweetDescription}>
                <img src="/egg.png" />
                <a>{tweet.firstname}</a>
                <a>{tweet.username}</a>
                <a>{new Date(tweet.date).toLocaleString('fr-FR')}</a>
            </div>
            <a>{tweet.message}</a>
            <div className={styles.tweetTool}>
                <span onClick={handleLike} style={{ color: like == true ? 'red' : 'inherit', cursor: 'pointer' }}>♥ {likeCount}</span>
                <FontAwesomeIcon icon={faTrash} style={{ cursor: 'pointer' }} onClick={handleDelete} />
            </div>
        </main>
    );
};

export default Tweet;
