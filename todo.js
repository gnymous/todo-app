
let addToDoButton = document.querySelector('.addToDoButton')
// let toDoDisplay = document.querySelector('.toDoTable')
let toDoInput = document.querySelector('.toDoInput')
let showToDo = document.querySelector('.toDoTableSection')
// addToDoButton.addEventListener('click', printToDo)

// function printToDo() {
//     var toDoTableRow=document.createElement('TR')
//     toDoTableRow.innerHTML=`<th>
//       <input
//         type="checkbox"
//         aria-label="Checkbox for following text input"
//       />
//     </th>
//     <td>${toDoInput.value}</td>
//     <td class="d-flex justify-content-center">
//       <button class="done btn btn-success btn-sm">
//         <i class="edit fas fa-clipboard-check"></i>
//       </button>
//       <button class="remove btn btn-info mx-2 btn-sm">
//         <i class="far fa-edit"></i>
//       </button>
//       <button class="btn btn-danger btn-sm">
//         <i class="far fa-trash-alt"></i>
//       </button>
//     </td>`
//     if (toDoInput.value==="") {
//         return false
//     }else{
//         showToDo.classList.add('showToDoTableSection')
//         toDoDisplay.appendChild(toDoTableRow) 
//     }    
//     toDoInput.value=""   

// }





// // ================================
let todoList = [] // [{id:1, name:"Task 1", status:0}]

addToDoButton.addEventListener('click', function(){
    const newTodo = {id:todoList.length+1, name:toDoInput.value, status:0}
    todoList.push(newTodo)
    reloadTodo()
    
    toDoInput.value=""
})

function reloadTodo(){
    let tblRow = '';

    for(let i=0; i<todoList.length; i++){
    const todo = todoList[i];
    tblRow +=`
        <tr>
            <th>
                <input
                type="checkbox"
                aria-label="Checkbox for following text input"
                />
            </th>
            <td>${todo.name}</td>
            <td class="d-flex justify-content-center">
                <button onclick="doneTodo(${todo.id})" class="done btn btn-success btn-sm">
                <i class="edit fas fa-clipboard-check"></i>
                </button>
                <button class="remove btn btn-info mx-2 btn-sm">
                <i class="far fa-edit"></i>
                </button>
                <button onclick="deleteTodo(${todo.id})" class="btn btn-danger btn-sm">
                <i class="far fa-trash-alt"></i>
                </button>
            </td>
        </tr>`

    }
    if (todoList.length) {
        showToDo.classList.add('showToDoTableSection')
    }else{
showToDo.classList.remove('showToDoTableSection')
}

    document.getElementById('toDoTable').innerHTML=tblRow;
}

function deleteTodo(id){
    
    let newTodo = todoList.filter(function(todo){
        return todo.id!==id;
    })
    
    todoList=newTodo
    reloadTodo()
}

// ===========================

