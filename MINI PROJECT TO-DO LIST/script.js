// Select DOM Elements
const input = document.getElementById('todo-input');
const addBtn = document.getElementById('add-btn');
const list = document.getElementById('todo-list');

// Load saved todos
const saved = localStorage.getItem('todos');
const todos = saved ? JSON.parse(saved) : [];

// Save todos
function saveTodos() {
  localStorage.setItem('todos', JSON.stringify(todos));
}

// Create todo DOM node
function createTodoNode(todo, index) {
  const li = document.createElement('li');

  // Checkbox
  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.checked = todo.completed;

  // Text
  const textSpan = document.createElement('span');
  textSpan.textContent = todo.text;
  textSpan.style.margin = '0 20px';

  if (todo.completed) {
    textSpan.style.textDecoration = 'line-through';
  }

  // Checkbox change
  checkbox.addEventListener('change', () => {
    todo.completed = checkbox.checked;
    saveTodos();
    render();
  });

  // Double click to edit
  textSpan.addEventListener('dblclick', () => {
    const newText = prompt('Edit todo', todo.text);
    if (newText !== null && newText.trim() !== '') {
      todo.text = newText.trim();
      saveTodos();
      render();
    }
  });

  // Delete button
  const delBtn = document.createElement('button');
  delBtn.textContent = '❌';
  delBtn.addEventListener('click', () => {
    todos.splice(index, 1);
    saveTodos();
    render();
  });

  li.appendChild(checkbox);
  li.appendChild(textSpan);
  li.appendChild(delBtn);

  return li;
}

// Add todo
function addTodo() {
  const text = input.value.trim();
  if (!text) return;

  todos.push({ text, completed: false });
  input.value = '';
  saveTodos();
  render();
}

// Render list
function render() {
  list.innerHTML = '';
  todos.forEach((todo, index) => {
    const node = createTodoNode(todo, index);
    list.appendChild(node);
  });
}

// Events
addBtn.addEventListener('click', addTodo);
input.addEventListener('keydown',(e)=>{
    if(e.key =='Enter'){
        addTodo();
    }
})

// Initial render
render();