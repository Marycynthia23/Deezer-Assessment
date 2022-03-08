import React, {useState, useEffect, useRef} from 'react';
import styles from './PlayLists.module.css'
import { PrivateLayout } from '../../HOC/Layout/PrivateLayout/PrivateLayout';

const API_BASE_URL = 'https://cors-anywhere.herokuapp.com/https://api.deezer.com'
// const API_BASE_URL = ' https://api.deezer.com/'

export const PlayLists = (props) => { 
    const [playList, setPlayList] = useState([]);
    const [selectedPlayList, setSelectedPlayList] = useState([])


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
            console.log('playlist data')
            console.log(playList)
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
      
      const handleSelctedPlayList =(playList) =>{
          setSelectedPlayList(playList);
          console.log(selectedPlayList)
      }
    
      const ref = useRef(null);
      const scroll = (scrollOffset) => {
        ref.current.scrollLeft += scrollOffset;
      };


    return(
        <PrivateLayout> 
        <div>
        <div className={styles.SubTitles}>
            <h3>FEATURED PLAYLISTS</h3>
            <div className={styles.Line}></div>
            <div>
                <span className={styles.ArrowLeft} onClick={() => scroll(-20)}><i class="fas fa-chevron-left"></i></span>
                <span className={styles.ArrowRight} onClick={() => scroll(20)}><i class="fas fa-chevron-right"></i></span>
            </div>
        </div>
       
        <div className={styles.CardDisplay}>
        {playList.map((playList, index) => ( 
            <div className={styles.CardContainer} key={index} onClick={() => handleSelctedPlayList(playList)}>
                <a href="/musicpreview" onClick={() => previewSelected(playList)} style={{textDecoration:"none"}}>
            <div className={styles.Card} >
                <img src={`${playList.picture}`} alt="avatar"/>
                <div className={styles.Text}>
                    <h6><b>{`${playList.title}`}</b></h6>
                </div>
            </div>
            </a>
        </div>
        ))}
        
    </div>
    </div>
    </PrivateLayout>
    )
        };