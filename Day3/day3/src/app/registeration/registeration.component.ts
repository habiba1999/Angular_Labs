import { Component } from '@angular/core';
import { EventEmitter, Output } from '@angular/core';


@Component({
  selector: 'app-registeration',
  templateUrl: './registeration.component.html',
  styleUrls: ['./registeration.component.css']
})
export class RegisterationComponent {
  //data from parent
   fname = "";
  age = "";
  Student ={name: '',  age: ''}

  @Output() myEvent = new EventEmitter();
  //instance of event
  Add() {
    let myStudent = {
      name: this.fname,
      age: this.age
    };

    if (+myStudent.age > 18 && +myStudent.age < 40) {
      if (myStudent.name.length >= 3) {
        this.myEvent.emit(myStudent);
        
      }
    }


  }
}