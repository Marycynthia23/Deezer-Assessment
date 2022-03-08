import React, {useState, useEffect} from 'react';
import styles from './Cards.module.css'
import { Title } from '../Title/Title';

const API_BASE_URL = 'https://cors-anywhere.herokuapp.com/https://api.deezer.com'
const KEY = process.env.REACT_APP_Secret_Key
console.log(KEY)
export const Cards = (props) => { 

    const [music, setMusic] = useState([]);
    // const [data, setData] = useState([]);
    // const [playList, setPlayList] = useState([]);
    // const [category, setCategory] = useState([])

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
            // setData(response.data)
            // console.log(data)
            setMusic(response.albums.data)
            console.log(music)
            // setCategory(response.playlists.data)
            // console.log(category)
            // setPlayList(response.playlists.data)
            // console.log(playList)
        })
        .catch(error => {
            console.log(error)
        })

     }, []);

    
     const previewSelected = (musicData) => {
        window.localStorage.setItem("music_data", JSON.stringify(musicData));
        // console.log("ava", props);
        props.props.history.push("/musicpreview");
      };
    
    
     return( 
         <>
         <Title/>
        <div className={styles.container}>
        <div className={styles.CardDisplay}>
        {music.map((music, index) => ( 
            <div className={styles.CardContainer} key={index}>
                <a href="/musicpreview" onClick={() => previewSelected(music)}>
            <div className={styles.Card} >
                <img src={`${music.cover}`} alt="avatar"/>
                <div className={styles.Text}>
                    <h6><b>{`${music.title}`}</b></h6>
                </div>
            </div>
            </a>
        </div>
        ))}
        
    </div>
        </div>
    </>
     );
}


    
//   };

