import React, {useEffect, useState} from 'react'
import io from 'socket.io-client'
import './App.css';


let socket;
const CONNECTION_PORT = 'localhost:3003/'

function App() {
  const [loggedIn, setLoggedIn] = useState(false)
  const [room, setRoom] = useState('')
  const [username, setUsername] = useState('')

  useEffect(()=>{
    socket = io(CONNECTION_PORT)
    console.log('socket', socket)
  }, [CONNECTION_PORT])

    const connectToRoom = () =>{
      socket.emit('join-room', room )
    }
  return (
    <div className="App">
              <div className='top-title'>
                <h1>Sender Messenger</h1>
              </div>
      {!loggedIn?(
        <div className='login'>
          <div className='inputs'>
            <input type='text' placeholder='name..' onChange={(e)=>{setUsername(e.target.value)}}/>
            <input type='text' placeholder='room..' onChange={(e)=>{setRoom(e.target.value)}}/>
          </div>
          <button onClick={connectToRoom}>Enter Room</button>
        </div>
      ): (
        <h1>You are logged in</h1>
      )}
    </div>
  );
}

export default App;
