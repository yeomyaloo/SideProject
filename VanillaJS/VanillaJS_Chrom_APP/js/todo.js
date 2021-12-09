const toDOForm = document.getElementById("todo-form");
const toDoList = document.getElementById("todo-list");

// const toDoinput = document.querySelector("#todo-form input")
const toDoinput = toDOForm.querySelector("input");

function paintTodo(newTodo){
    console.log("I Will paint",newTodo);
    const Todoli = document.createElement("li");
    const TodoSpan =document.createElement("span");
    //li 내부에 span을 넣고 싶음
    Todoli.appendChild(TodoSpan);
    TodoSpan.innerHTML = newTodo;
    toDoList.appendChild(Todoli);
}


//기본으로 submit의 기본동작인 새로고침을 막기 위한 함수
function handleTODoSubmit(event){
    event.preventDefault();
    const newTodo = toDoinput.value;
    toDoinput.value="";
    paintTodo(newTodo);
}

toDOForm.addEventListener("submit", handleTODoSubmit)