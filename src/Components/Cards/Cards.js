import React, {useState, useEffect} from 'react';
import styles from './Cards.module.css'
import picture from '../../Images/woman.png';
import axios from 'axios';
import { Title } from '../Title/Title';

const API_BASE_URL = 'https://cors-anywhere.herokuapp.com/https://api.deezer.com/chart'
const KEY = process.env.REACT_APP_Secret_Key
console.log(KEY)
export const Cards = () => { 

    const [music, setMusic] = useState([]);
    const [data, setData] = useState([]);


    
   

//  async function getMusic(){
//      const response = await fetch(`${API_BASE_URL}/`,
//      headers: new Headers({
//         'Authorization': 'Basic '+btoa('username:password'), 
//         'Content-Type': 'application/x-www-form-urlencoded'
//       }), )
//      .then((response ) => {
//          console.log(response)
//         // return response.json();
//      });
//     //  return result.results;

//  }

 useEffect(() => {
    axios({
        url: `${API_BASE_URL}/`,
        method: "GET",
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${KEY}`
            }
        }).then((res)=>{
            console.log(res.data)
          setData(res.data)
        }).catch((err)=>{
          console.log(err)
        })
 }, []);

 const musicSelected = (musicData) => {
    window.localStorage.setItem("music_data", JSON.stringify(musicData));
    // console.log("ava", props);
    // props.props.history.push("/movieoverview");
  };

 return( 
    <div className={styles.CardDisplay}>
        <Title/>
    {music.map((music, index) => {
        <div className={styles.CardContainer} key={index}>
        <div className={styles.Card}>
            <img src={picture} alt="avatar"/>
            <div className={styles.Text}>
                <h4><b>John Doe</b></h4>
            </div>
        </div>

    </div>
    })}
    
</div>
 )
    
  };