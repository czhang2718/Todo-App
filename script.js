const classNames = {
  TODO_ITEM: 'todo-container',
  TODO_CHECKBOX: 'todo-checkbox',
  TODO_TEXT: 'todo-text',
  TODO_DELETE: 'todo-delete',
}

const list = document.getElementById('todo-list')
const itemCountSpan = document.getElementById('item-count')
const uncheckedCountSpan = document.getElementById('unchecked-count')

let uncheckedCount = 0;
let count = 0;

function updateCount() {
  uncheckedCountSpan.textContent = uncheckedCount
  itemCountSpan.textContent = count;
}

function newTodo() {
  const task = prompt("What do you want need to do?")
  if(task != ""){
    uncheckedCount++
    count++
    updateCount()

    const item = document.createElement("li")
    item.className = classNames['TODO_ITEM']
    list.appendChild(item)

    const checkbox = document.createElement('input')
    checkbox.type = "checkbox";
    checkbox.className = classNames['TODO_CHECKBOX']
    checkbox.onclick = function(checkbox){
      if(checkbox.srcElement.checked){
        uncheckedCount--
      }
      else{
        uncheckedCount++
      }
      updateCount();
    };
    item.appendChild(checkbox)

    const text = document.createElement('span')
    text.classNames = classNames['TODO_TEXT']
    text.textContent = task;
    item.appendChild(text)

    const del = document.createElement('button')
    del.className = classNames['TODO_DELETE']
    del.textContent = "Delete"
    del.onclick = function(x){
      count--;
      if(!x.srcElement.parentElement.children[0].checked){
        uncheckedCount--;
        updateCount()
      }
      x.srcElement.parentElement.parentElement.removeChild(x.srcElement.parentElement)
    }
    item.appendChild(del)
  }
}
