import './chatList.css'
import { useState } from 'react'
const ChatList = () => {
  const [addMode, setAddMode] = useState(false)
  console.log(addMode)
  return (
    <div className='chatList'>
      <div className='search'>
        <div className='searchBar'>
          <img src='./search.png' alt='' />
          <input type='text' placeholder='Search' />
        </div>
        <img
          src={addMode ? './minus.png' : './plus.png'}
          alt=''
          className='add'
          onClick={() => setAddMode(!addMode)}
        />
      </div>
      <div className='item'>
        <img src='./avatar.png' alt='' />
        <div className='texts'>
          <span>Jane Doe</span>
          <p>Hello</p>
        </div>
      </div>
      {/* item 2 */}
      <div className='item'>
        <img src='./avatar.png' alt='' />
        <div className='texts'>
          <span>Jane Doe</span>
          <p>Hello</p>
        </div>
      </div>
      {/* item 3 */}
      <div className='item'>
        <img src='./avatar.png' alt='' />
        <div className='texts'>
          <span>Jane Doe</span>
          <p>Hello</p>
        </div>
      </div>
      {addMode && <AddUser />}
    </div>
  )
}

export default ChatList
