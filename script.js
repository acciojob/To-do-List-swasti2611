//your code here

const addTodoBtn=document.getElementById('addTodoBtn')

const todoList=document.getElementById('todoList')

addTodoBtn.addEventListener('click',()=>{
	const newTodoInput=document.getElementById('newTodoInput')
	const li=document.createElement('li')
	li.innerHTML= newTodoInput.value

	todoList.appendChild(li)
	document.getElementById('newTodoInput').value=" "
	
})


