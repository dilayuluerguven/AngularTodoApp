import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/models/todo';
import { TodoService } from 'src/app/services/todo-service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit 
{
  todoList:Todo[]=[];
  constructor(private todoService:TodoService){
    this.load();

  }
  ngOnInit(): void {
      
  }
  load(){
    this.todoService.getAll().subscribe(x=>this.todoList=x);
  }
  delete(id:number)
  {
    this.todoService.delete(id).subscribe(x=>{
      if(x==true)
      {
        this.load();
      }
      else{
        alert("todo silinemedi")
      }

    })

  }
  isCompleted(id:number){
    this.todoService.isCompleted(id).subscribe(x=>{
      if(x==true)
      {
        let index=this.todoList.findIndex(x=>x.id==id)
        this.todoList[index].isCompleted=!this.todoList[index].isCompleted
      }
    })

  }

}
