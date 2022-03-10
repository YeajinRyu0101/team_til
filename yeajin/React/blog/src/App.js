/*eslint-disable*/
import React,{useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  let[글제목, 글제목변경]=useState(["여자 원피스 추천","일본 라멘 맛집","한국식 마라탕 맛집"]);
  let[따봉,따봉변경]=useState(0);
  let posts ='딸기 라떼 맛집';
  
  function 제목바꾸기(){
    var newArray=[...글제목];
    newArray[0]='여자 코트 추천'
    글제목변경(newArray);
  }

  return (
    <div className="App">
      <div className="black-nav">
        <div style={{color:'blue', fontSize :'30px'}}>개발 blog</div>
      </div>
      
        <div className='list'>
          <h3>{글제목[0]}<span onClick={ ()=>{ 따봉변경(따봉+1) } }>👍</span>{따봉}</h3>
          <p>3월 7일 발행</p>
          <hr/>
        </div>
        <div className='list'>
          <h3>{글제목[1]}</h3>
          <p>3월 8일 발행</p>
          <hr/>
        </div>
        <div className='list'>
          <h3>{글제목[2]}</h3>
          <p>3월 9일 발행</p>
          <hr/>
        </div>
<button onClick={제목바꾸기}>버튼</button>
        <Modal />

    </div>
  );
}

function Modal(){
  return(
    <div className='modal'>
    <h2>제목</h2>
    <p>날짜</p>
    <p>상세내용</p>
  </div>
  )
}

export default App;