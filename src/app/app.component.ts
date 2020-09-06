import { Component,OnInit, ApplicationRef, assertPlatform } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'JustToDo';
constructor(){}
ngOnInit(){
  }
  
 fas() {
  var x = document.getElementById("input_form").value;
  document.getElementsByClassName("addet_form")[0].innerHTML+=x+"<br>";
  alert(x)
  document.getElementById("input_form").value="";
}
}
