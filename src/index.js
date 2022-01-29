import './styles.css';
import { Todo, TodoList } from './class';
import { crearTodoHTML } from './js/componentes';
 

export const todoList = new TodoList();
todoList.todos.forEach(todo => {crearTodoHTML(todo);});
//const tarea = new Todo('Aprender JavaScript');
//todoList.nuevoTodo(tarea);
// tarea.completado = false;
//console.log(todoList);
//crearTodoHTML(tarea);
//todoList.todos[0].imprimirClase();
console.log('todos',todoList.todos);

//localStorage.setItem('mi-key','ABC123')


// setTimeout(() => {
//     localStorage.removeItem('mi-key')
// }, 1500 );