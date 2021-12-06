import React, { useState,useEffect } from 'react';
import './App.css';
import Post from './Post';
import { db } from './firebase';

function App() {
  const [posts, setPosts] = useState([]); 

  useEffect(() => {
    db.collection('posts').onSnapshot(snapshot => {
      setPosts(snapshot.docs.map(doc => doc.data()));
    })
  }, []);

  return (
    <div className="app"> 
    <div className="app__header">
      <img className="app__headerImage" 
      src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png" alt=""/>
    </div>

    <h1>Hello Rachel the programmer let's do this</h1>

    {
      posts.map(post => (
        <Post userName={post.username} 
        caption={post.caption} 
        imageUrl={post.imageUrl} />
      ))
    }
    <Post userName="RachelKemmy" caption="WOW it works" imageUrl="https://www.freecodecamp.org/news/content/images/size/w2000/2020/02/Ekran-Resmi-2019-11-18-18.08.13.png" />
    <Post userName="BettyVannah" caption="DOPE" imageUrl="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg" />
  </div>
  );
}

export default App;
