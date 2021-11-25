//Main 페이지
import React from 'react';
import logo from './logo.svg';
import './App.css';


//JSX라는 문법임 HTML 대용
function App() {
  
  let posts = '강남 고기 맛집';
  let stylezz= {color:'blue',fontSize:'30px'}

  return (
    <div className="App">
      <div className="black-nav">
        <div style={stylezz}>개발 Blog</div>
      </div>
      <h4> { posts } </h4>
    </div>
  );
} 

export default App;
