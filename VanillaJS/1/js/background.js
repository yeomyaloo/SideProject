//Array를 랜덤하게 골라내는 작업

const images = ["0.jpeg","1.jpeg","2.jpeg"];

// floor은 버림 math 함수임.  images 안에 변수만큼 랜덤하게 골라주는 것
//하드 코드는 오류가 될 수 있다. 
const chosenImage = images[Math.floor(Math.random()*images.length)];


//HTML 사용 없이 JS로 이미지 넣기
const bgImage = document.createElement("img");
bgImage.src = `img/${chosenImage}`;

document.body.appendChild(bgImage);