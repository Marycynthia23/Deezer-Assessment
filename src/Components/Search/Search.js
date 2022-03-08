import React,{useState, } from 'react';
import { PrivateLayout } from '../../HOC/Layout/PrivateLayout/PrivateLayout';
import styles from './Search.module.css';

export const Search = (props) => { 

const [term, setTerm] = useState([]);
const [search, setSearch] = useState("")


const API_BASE_URL = 'https://cors-anywhere.herokuapp.com/https://api.deezer.com'
const KEY = process.env.REACT_APP_Secret_Key
console.log(KEY)



// useEffect(() => {
//     fetch(`${API_BASE_URL}/search?q=eminem`, {
//         'method': 'GET',
//         'header':{
//             'Content-Type': 'application/json',
//             'Access-Control-Allow-Orign':'*',
//             'x-rapidapi-host': 'bd071c3ae2f9835eed3a239453492c02'
//         }
//     })
//     .then(response => response.json())
//     .then(response => {
//         console.log(response)
//         setTerm(response.data);
//     })
//     .catch(error => {
//         console.log(error)
//     })

//  }, []);

 const handleSearch = (event) => {
    //event.preventDefault()
    const {value} = event.target
    setSearch(value)
    console.log(search)
 }

 const previewSelected = (musicData) => {
    window.localStorage.setItem("music_data", JSON.stringify(musicData));
    // console.log("ava", props);
    props.props.history.push("/musicpreview");
  };

  const handleSelctedPlayList =(event) =>{
      event.preventDefault()

    //console.log(search)
    fetch(`${API_BASE_URL}/search?q=${search}`, {
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
        setTerm(response.data);
    })
    .catch(error => {
        console.log(error)
    })


    
}

return(
    <PrivateLayout>
         <div className={styles.SearchContainer}>
        <div className={styles.SearchInputContainer}>
            <input type="text" value={search} name="search" onChange={handleSearch} className={styles.SearchInput} placeholder="Search here"/>
            <button onClick={handleSelctedPlayList}><i className="fas fa-search"></i></button>
        </div>

        <div className={styles.CardDisplay}>
        {term.map((term, index) => ( 
            <div className={styles.CardContainer} key={index} onClick={() => handleSelctedPlayList(term)}>
                <a href="/musicpreview" onClick={() => previewSelected(term)} style={{textDecoration:"none"}}>
            <div className={styles.Card} >
                <img src={`${term.album.cover_xl}`} alt="avatar"/>
                <div className={styles.Text}>
                    <h5><b>{`${term.title}`}</b></h5>
                </div>
            </div>
            </a>
        </div>
        ))}
        
    </div>
        </div>
        
    </PrivateLayout>
   
)
}