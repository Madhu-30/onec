import React from 'react'
import stylesLayout from '../styles/Layout.module.css'
import styles from '../styles/Card.module.css'

export default function() {
    // const domainsList = ['Udemy', 'External Learning','SkillUp',
    //     'Learning Insights','Coursera', 'Quizzes',
    //     'Client Interview Prep', 'Recommended Learning' , 'External Credentials']

        const domainsList = [
          { id: 1, title: 'Udemy', url: 'https://www.udemy.com/' },
          { id: 2, title: 'External Learning', url: 'https://www.linkedin.com/learning/' },
          { id: 3, title: 'SkillUp', url: 'https://www.simplilearn.com/skillup-free-online-courses' },
          { id: 4, title: 'Learning Insights', url: 'https://insights.learnplatform.com/' },
          { id: 5, title: 'Coursera', url: 'https://www.coursera.org/' },
          { id: 6, title: 'Quizzes', url: 'https://www.quizlet.com/' },
          { id: 7, title: 'Client Interview Prep', url: 'https://www.pramp.com/' },
          { id: 8, title: 'Recommended Learning', url: 'https://www.edx.org/' },
          { id: 9, title: 'External Credentials', url: 'https://www.credly.com/' }
        ];
  return (
    <div>
                <h3>Learning Resources</h3>
                <div className={stylesLayout.domainsLayout}>
            {domainsList.map(item => {
                return(
                    <div key={item.id} className={styles.domainCard}>
                    <p onClick={() => {
                window.open(item.url, "_blank");
              }}>{item.title}</p>
                    </div>
                );
            })}
    </div>
    </div>

  )
}
