import React, {useState, useEffect} from 'react';
import { PrivateLayout } from '../../HOC/Layout/PrivateLayout/PrivateLayout';
import styles from './MusicPreview.module.css'
import banner from '../../Images/Yababuluku.jpeg'
// import DZ from 'deezer-web-api'

export const MusicPreview = (props) => { 

let selected = JSON.parse(window.localStorage.getItem("music_data"));
// console.log(selected);

    const [track, setTrack] = useState(selected.link)
   
    const playMusic = () =>{

        let audio = new Audio(track)

        audio.play();
        console.log('playing')
        //console.log(track)
        // DZ.player.playPlaylist(12659678, 3, function(response){
        //     console.log("track list", response.tracks);
        // });
        
    }


    useEffect(() => {
        setTrack(selected.link);
    },[track])



    return(
        <PrivateLayout> 
    <div className={styles.PreviewContainer}>
        <div className={styles.web}>
            <img src={selected.picture_xl ? selected.picture_xl : selected.cover_xl} alt="banner"/>
            <div className={styles.MusicPlay}>
                <h2>{selected.title}</h2>
                <p>{selected.title}</p>
                
                <div className={styles.Controls}>
                    <div><i className="fas fa-step-forward"></i></div>
                    <div onClick={() => playMusic()}><i className="fas fa-play-circle 7x"></i></div>
                    <div><i className="fas fa-step-forward"></i></div>
                </div>
                {/* <div>
                    <audio ref="" src="" controls autoPlay/>
                </div> */}
            </div>
            
        </div>
        
    </div>
    </PrivateLayout>
    )
}