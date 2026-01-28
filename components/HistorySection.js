import { useState, useEffect } from 'react'
import Image from 'next/image'
import styles from '../styles/HistorySection.module.css'

export default function HistorySection({ darkMode }) {
  const [historyItems, setHistoryItems] = useState([])

  useEffect(() => {
    // Fetch history from API
    fetch('/api/history')
      .then(res => res.json())
      .then(data => setHistoryItems(data.items))
      .catch(err => console.error('Error fetching history:', err))
  }, [])

  return (
    <div className={styles.historySection}>
      <div className={styles.header}>
        <h2 className={styles.title}>History</h2>
        <a href="#" className={styles.viewAll}>View All</a>
      </div>
      
      <div className={styles.thumbnails}>
        {historyItems.map((item, index) => (
          <div key={index} className={styles.thumbnail}>
            <Image
              src={item.image}
              alt={item.alt || 'History item'}
              width={80}
              height={80}
              className={styles.thumbnailImage}
            />
          </div>
        ))}
      </div>
    </div>
  )
}

