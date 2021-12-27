//Array를 랜덤하게 골라내는 작업

const images = ["0.jpg","1.jpg","2.jpg","3.jpg","4.jpg","5.jpg",
"6.jpg","7.jpg","8.jpg","9.jpg","10.jpg"];

// floor은 버림 math 함수임.  images 안에 변수만큼 랜덤하게 골라주는 것
//하드 코드는 오류가 될 수 있다. 
const chosenImage = images[Math.floor(Math.random()*images.length)];

const bgImage = document.querySelector('body');
bgImage.style.backgroundImage = `url(img/${chosenImage})`