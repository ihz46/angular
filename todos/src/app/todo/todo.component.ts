import { Component, OnInit } from '@angular/core';
import { Todo } from './todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})

export class TodoComponent implements OnInit {

  public todos: Array<Todo> = []; //declaramos un arraylist y le inicializamos
  public todo: Todo = new Todo(""); //inicializamos la variable todo.



  constructor() { }

  ngOnInit() {
    this.todos.push(new Todo("Sacar al perro")); //añadimos elementos a un array en js.
    this.todos.push(new Todo("Ir a entrenar"));
    this.todos.push(new Todo("Comprar la cena"));


  }

  addTodo(){
    const nuevoTodo = new Todo(this.todo.tarea);
    this.todos.push(nuevoTodo); //añadimos al arraylist el valor recogido de la caja de texto.
  }

}
