import Head from 'next/head';
import styles from '../styles/Hashtag.module.css';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
//import { taggies } from '../reducers/hashtag';
//import Moment from 'react-moment';
//import { Modal } from 'antd';
import { Input } from 'antd';
import Link from 'next/link';


const { TextArea } = Input;


function Hashtag({ tweet }) {
    
    return (
        <div>
            <Head>
                <title>Hashtag</title>
            </Head>

            <main className={styles.tweet}>
                <div className={styles.tweetDescription}>
                    <img src="/egg.png" />
                    <div className={styles.firstname}><a>{tweet.firstname}</a></div>
                    <div className={styles.username}><a>{tweet.username}</a></div>
                    <div className={styles.date}><a>{tweet.date}</a></div>
                </div>
                <div className={styles.tweetMessage}>
                    <a>{tweet.message}</a>
                </div>
                <div className={styles.tweetTool}>


                </div>
            </main>
        </div>
    );
}

export default Hashtag;
