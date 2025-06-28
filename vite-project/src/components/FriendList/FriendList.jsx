import React from 'react'

const FriendList = (friends) => {
  return (
    <div>
      <ul>
        <li>
            <FriendList friends={friends} />
        </li>
      </ul>
    </div>
  )
}

export default FriendList
