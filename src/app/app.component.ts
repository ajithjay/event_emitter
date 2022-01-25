import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  showMessage:string=''
  title = 'evente';

  onNotifyClick(message:any){
    this.showMessage = message;
  }
}
