import { Component, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-eventemitter',
  templateUrl: './eventemitter.component.html',
  styleUrls: ['./eventemitter.component.css']
})
export class EventemitterComponent implements OnInit {
  @Output() notify: EventEmitter <any> = new EventEmitter <any>() 
  constructor() { }

  ngOnInit(): void {

  }
 onClick(){
   this.notify.emit("Message from child")
 }
}
