const toDOForm = document.getElementById("todo-form");
const toDoList = document.getElementById("todo-list");

// const toDoinput = document.querySelector("#todo-form input")
const toDoinput = toDOForm.querySelector("input");

function paintTodo(newTodo){
    const todoli = document.createElement("li");
    const todoSpan =document.createElement("span");
    todoSpan.innerHTML = newTodo;

    const todoButton = document.createElement("button");
    todoButton.innerHTML = "❌";
    todoButton.addEventListener("click",deletTodo);
    todoli.appendChild(todoSpan);
    todoli.appendChild(todoButton);
    toDoList.appendChild(todoli);
    
}


//기본으로 submit의 기본동작인 새로고침을 막기 위한 함수
function handleTODoSubmit(event){
    event.preventDefault();
    const newTodo = toDoinput.value;
    toDoinput.value="";
    paintTodo(newTodo);
}

toDOForm.addEventListener("submit", handleTODoSubmit)

function deletTodo(event){
    const li = event.target.parentElement;
    li.remove();
}