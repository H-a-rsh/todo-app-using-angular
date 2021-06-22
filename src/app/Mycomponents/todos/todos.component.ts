import { Content } from '@angular/compiler/src/render3/r3_ast';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { todo } from 'src/app/models/todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
toDoForm:FormGroup
  constructor(private fb:FormBuilder) { }
  todos:todo[];
  

  inputTodo:string;

  ngOnInit(): void {
    this.toDoForm=this.fb.group({
      search:['',Validators.required]

    })
      this.todos=[
  

    ]
  }


toggleDone(id :number){
  this.todos.map((v,i)=>{
    if(i==id) v.completed=true
    return v; 
  })

}
deleteTodo(id:number){
  this.todos=this.todos.filter((v,i)=> i!=id);
   

}
addTodo(){
  this.todos.push({
    content:this.toDoForm.controls.search.value,
    completed:false
  })
}
}


