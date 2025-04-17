import Head from 'next/head';
import styles from '../styles/Hashtag.module.css';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
//import Moment from 'react-moment';
//import { Modal } from 'antd';
import Link from 'next/link';
//import Article from './Article';

function Hashtag() {
	const hashtag = useSelector((state) => state.hashtag.value);
    const [searchHash, setSearchHash] = useState('');

    const searchButton = () => {
        if(searchHash != '') {

            console.log(searchHash);
        }
        else{console.log('vide')}
    }

    
	
	return (
        
		<div>
			<Head>
				<title>Hashtag</title>
			</Head>
			<div className={styles.container}>
				<h2 className={styles.title}>Hashtag</h2>
				<div className={styles.searchContainer}>
					<input type='text' placeholder='hashg' onChange={(e)=>setSearchHash(e.target.value)} value={searchHash} />
                    <button id='searchButton' onClick={() => searchButton()}>search</button>
                    
				</div>
			</div>
		</div>

	);
}

export default Hashtag;
