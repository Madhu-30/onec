import React, { useEffect, useState } from 'react'
import styles from '../styles/Card.module.css'
import stylesLayout from '../styles/Layout.module.css'

export default function Posts() {
  const API_URL="https://jsonplaceholder.typicode.com/posts"

  const [data,setData] = useState([{userId: 7, id: 61, title: 'voluptatem doloribus consectetur est ut ducimus', body: 'ab nemo optio odio\ndelectus tenetur corporis simil…sciunt doloribus dicta dolores\nmagnam minus velit'}])

  useEffect(() => {
    fetch(API_URL).
    then( (response) => {
      if(!response.ok){
        throw new Error('response not ok')
      }
      return response.json()
    }).then((data) => {
      console.log(data[60])
      setData(data)
    })
  },[])
  return (
    <div>
      <div className={stylesLayout.postsLayout}>
        <p className={styles.postsHeader}>Yammer Feed</p>



      {data.slice(0,30).map((item) => {
        return(
       <div className={styles.postsCard} key={item.id}>

       <div className={styles.postsHeading}>
         <i className='fa-regular fa-user'></i>
         <div>
           <p>{`User${item.id}`}</p>
           <p>{`${Math.floor(Math.random() * 23) + 1} hours ago`} </p>
         </div>
       </div>

       <div className={styles.postsContent}>
       <span>{`Post title : ${item.title} `}
       <a href='#' target='_blank'>Link for the post</a>
       </span>
       </div>

       <div className={styles.postsIcons}>
         <i className='fa-regular fa-heart'> </i>
         <i className='fa-regular fa-bookmark'> </i>
         <i className='fa-regular fa-comment'> </i>
       </div>
     </div>
        )
      })

      }


 

      </div>
    </div>
  )
}
