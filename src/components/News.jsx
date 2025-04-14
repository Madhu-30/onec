import React, { useEffect, useState } from 'react'
import styles from '../styles/Card.module.css'
import styleslayout from '../styles/Layout.module.css'


const API_URL ="https://api.spaceflightnewsapi.net/v4/articles/?format=json"

export default function News() {

  const [data,setData] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(()=>{
    fetch(API_URL)
    .then((response) => {
      //console.log("hi")
      return response.json()
    })
    .then((data) => {
      //console.log(data)
      //console.log(data.results)
      console.log(data.results[0].title)
      setData(data)
      setLoading(false)
    })
  },[])
  return (
    <>
    {loading ? (
      <div>Loading</div>
    ) :
    <div className={styleslayout.newsLayout}>    
      {
        data.results.map((news) => {
          return(
            <div key={news.id}>
                <div className={styles.newsCard}>
              <p onClick={() => {
                window.open(news.url, "_blank");
              }}>{news.title}</p>
              </div>
            </div>

          )
        })
      }
    </div>

    }

    </>
  )
}
