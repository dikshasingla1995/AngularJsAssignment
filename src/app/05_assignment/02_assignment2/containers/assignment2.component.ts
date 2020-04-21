import { Component, Input } from '@angular/core';
import { Todo } from '../../assignment.component';

@Component({
  selector: 'app-assignment2',
  templateUrl: './assignment2.component.html',
  styleUrls: ['./assignment2.component.css']
})
export class Assignment2Component {

  @Input()
  todo:Todo[];

  selectedToDo:Todo;

  hideTable = false;

  onSelectedToDo(todoItem : Todo){
    this.selectedToDo = todoItem;
  }

  OnCardHeaderClick(){
    this.hideTable = !this.hideTable
  }

}