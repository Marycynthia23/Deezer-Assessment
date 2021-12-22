import React, {useState, useEffect} from 'react';
import styles from './PlayLists.module.css'
import picture from '../../Images/woman.png';
import { Cards } from '../Cards/Cards';
import {Link} from 'react-router-dom';

const API_BASE_URL = 'https://cors-anywhere.herokuapp.com/https://api.deezer.com'

export const PlayLists = (props) => { 
    const [playList, setPlayList] = useState([]);


    useEffect(() => {
        fetch(`${API_BASE_URL}/chart`, {
            'method': 'GET',
            'header':{
                'Content-Type': 'application/json',
                'Access-Control-Allow-Orign':'*',
                'x-rapidapi-host': 'bd071c3ae2f9835eed3a239453492c02'
            }
        })
        .then(response => response.json())
        .then(response => {
            console.log(response)
            setPlayList(response.playlists.data)
            console.log(playList)
        })
        .catch(error => {
            console.log(error)
        })

     }, []);

     const musicSelected = (musicData) => {
        window.localStorage.setItem("music_data", JSON.stringify(musicData));
        // console.log("ava", props);
        props.props.history.push("/musicpreview");
      };
    

    return(
        <div>
        <div className={styles.SubTitles}>
            <h3>FEATURED PLAYLISTS</h3>
            <div className={styles.Line}></div>
            <div>
                <span className={styles.ArrowLeft}><i class="fas fa-chevron-left"></i></span>
                <span className={styles.ArrowRight}><i class="fas fa-chevron-right"></i></span>
            </div>
        </div>
       
        <div className={styles.CardDisplay}>
        {playList.map((playList, index) => ( 
            <div className={styles.CardContainer} key={index}>
                <Link to="/musicpreview" style={{textDecoration:"none"}}>
            <div className={styles.Card} >
                <img src={`${playList.picture}`} alt="avatar"/>
                <div className={styles.Text}>
                    <h5><b>{`${playList.title}`}</b></h5>
                </div>
            </div>
            </Link>
        </div>
        ))}
        
    </div>
    </div>
    )
        };