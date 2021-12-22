import React, {useState, useEffect} from 'react';
import styles from './Cards.module.css'
import picture from '../../Images/woman.png';
import {Link} from 'react-router-dom';
// import axios from 'axios';
import { Title } from '../Title/Title';

const API_BASE_URL = 'https://cors-anywhere.herokuapp.com/https://api.deezer.com'
const KEY = process.env.REACT_APP_Secret_Key
console.log(KEY)
export const Cards = (props) => { 

    const [music, setMusic] = useState([]);
    const [data, setData] = useState([]);
    const [playList, setPlayList] = useState([]);
    const [category, setCategory] = useState([])

    // function getMusic(){
        
    // }
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
            setData(response.data)
            console.log(data)
            setMusic(response.albums.data)
            console.log(music)
            setCategory(response.playlists.data)
            console.log(category)
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
         <>
         <Title/>
        <div className={styles.CardDisplay}>
        {music.map((music, index) => ( 
            <div className={styles.CardContainer} key={index}>
                <Link to="/musicpreview" style={{textDecoration:"none"}}>
            <div className={styles.Card} onClick={() => musicSelected(music)}>
                <img src={`${music.cover}`} alt="avatar"/>
                <div className={styles.Text}>
                    <h6><b>{`${music.title}`}</b></h6>
                </div>
            </div>
            </Link>
        </div>
        ))}
        
    </div>
    </>
     );
}


    
//   };

