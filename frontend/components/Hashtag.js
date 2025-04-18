import Head from 'next/head';
import styles from '../styles/Hashtag.module.css';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { taggies } from '../reducers/hashtag';
//import Moment from 'react-moment';
//import { Modal } from 'antd';
import Link from 'next/link';


function Hashtag(props) {
    //const dispatch = useDispatch();
    //const hashtag = useSelector((state) => state.hashtag.value);
    const [searchHash, setSearchHash] = useState('');
    let findResearch = [];

    const searchButton = () => {
        if (searchHash != '') {
            fetch(`http://localhost:3000/Tweets/taggies/${searchHash}`)
                .then(response => response.json())
                .then(data => {
                    if (data.result) {
                        //console.log(data.message);
                        for (let i = 0; i < data.message.length; i++) {
                            findResearch.push(data.message[i])
                        }
                        let reponse = findResearch.map((data, j) => {
                        return <div key={j} {...data} ><p>ok</p></div>
                    })
                        console.log(findResearch);
                        return (
                            <div>
                                <Head>
                                    <title>Hashtag</title>
                                </Head>
                                <div className={styles.container}>
                                    <h2 className={styles.title}>Hashtag</h2>
                                    <div className={styles.searchContainer}>
                                        <input type='text' placeholder='hashg' onChange={(e) => setSearchHash(e.target.value)} value={searchHash} />
                                        <button id='searchButton' onClick={() => searchButton()}>search</button>
                                        {reponse}

                                    </div>
                                </div>
                            </div>
                        );
                    } else { console.log('rien') }
                }
                )
        }
    }

    /* version avec reducers - abandonnée pour la version route / mongoose
       const searchButton = () => {
            if (searchHash != '') {
                dispatch(taggies(searchHash.toString()));
                //console.log(hashtag[1]);
                hashtag.map((data, i) => {
                    findResearch.push(data);
                    console.log('result ' + data)
                });
                console.log('retour ' + findResearch);
            }
            else { console.log('vide') }
        }*/



    return (

        <div>
            <Head>
                <title>Hashtag</title>
            </Head>
            <div className={styles.container}>
                <h2 className={styles.title}>Hashtag</h2>
                <div className={styles.searchContainer}>
                    <input type='text' placeholder='hashg' onChange={(e) => setSearchHash(e.target.value)} value={searchHash} />
                    <button id='searchButton' onClick={() => searchButton()}>search</button>

                </div>
            </div>
        </div>

    );
}

export default Hashtag;
