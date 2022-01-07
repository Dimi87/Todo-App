const inputField = document.querySelector("#input-todo")
const addButton = document.querySelector("#add-todo-button")
const ulList = document.querySelector(".todo-list")
//für Remove Button//
const removeButton = document.querySelector("#remove-button")

removeButton.addEventListener("click", function() {
     document.test-todo

})



function addTodoToList () {
    const Object = {text: inputField.value, isDone: false}
    state.todos.push(Object)
    //console.log(state)
    
    
}
addButton.addEventListener("click", function() {
    addTodoToList()
    let addNewList = document.createElement("li")
    
    addNewList.innerHTML = '<label for="test-todo"> '+inputField.value+'</label> <input type="checkbox" id="test-todo">'
    ulList.appendChild(addNewList)
    console.log(addNewList)
    inputField.value = ""
    if (inputField === "") {
    addButton = false
    }
})

const state = {
    filterModus: "All",
    todoInput: "",
    todos: [{text: "Keller reinigen", isDone: false},
            {text: "Hausaufgabe nicht machen", isDone: true},]
}

























/*const state = {
    filterModus: "All"
    todoInput: ""
    todos: []

}//


//function render() {

}


//function updateState() {
    const currentTodoInput = document.querySelector("#input-todo").value
    state.todoInput = currentTodoInput
    state.todos.push({text:"Wäsche Trocken", isDone:false})
}

//Event Listener
document.querySelector("#input-todo").addEventListener("input", updateState)
document.querySelector("#add-todo-button").addEventListener("click", addNewTodo)*/