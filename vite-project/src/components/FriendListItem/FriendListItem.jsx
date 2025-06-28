import React from 'react'
import styles from "./FriendListItem.module.css"

const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <div className={styles.cart}>
      <img src={avatar} alt="Avatar" width="48" className={styles.image} />
      <p className={styles.name}>{name}</p>
      <p className={styles.state}>
        {isOnline ? "Online" : "Offline"}
      </p>
    </div>
  )
}

export default FriendListItem

