import React, {useEffect, useState} from 'react';
import './App.css';

function HelloUser() {
  const [user, setUser] = useState('');
  const [welcome, setWelcome] = useState('');

  useEffect(() => {
    if (welcome) {
      alert('thank you for visiting me🥸')
    }
  }, [welcome]);
  
  return (
    <div className="container">
      <h1 className='mensaje'>Hello User App</h1>
      <form className='forms'>
        <input type="text" placeholder='Enter your name' value={user} onChange={(e) => setUser(e.target.value)} />
        <button type='button' onClick={() => setWelcome(`¡Welcome ${user}!🤗`)} >¡Greet me!</button>
      </form>
      <p>{welcome ? welcome :'Please enter your name🙏'}</p>
    </div>
  );
}

export default HelloUser;
