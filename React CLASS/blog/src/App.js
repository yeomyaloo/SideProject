//Main 페이지
import React,{useState} from 'react';
//import React from 'react'; 대신해서 useState를 넣어서 state를 사용하기 위함
import './App.css';


//JSX라는 문법임 HTML 대용
function App() {
  
  //데이터를 만드는 방법 1. 그냥 변수에 보관하는 방법 데이터 바인딩
  let posts = '강남 고기 맛집';
  
  //데이터를 만드는 방법 2. state를 사용해서 만들기
  let [글제목, 글제목변경] = useState(['남자 코트 추천','강남 우동 맛집','인천 라면 맛집']); //state만드는 방법

  return (
    <div className="App">
      <div className="black-nav">
        <div>개발 Blog</div>
      </div>
      <div className="list">
        <h3>{ 글제목[0] }</h3> 
        <p>11월 28일 발행</p>
        <hr/>
        <h3>{ 글제목[1] }</h3> 
        <p>11월 28일 발행</p>
        <hr/>
        <h3>{ 글제목[2] }</h3> 
        <p>11월 28일 발행</p>
        <hr/>
      </div>

    </div>
  );
} 

export default App;
