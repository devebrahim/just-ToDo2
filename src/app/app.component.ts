import { Component,OnInit } from '@angular/core';
import{ FormControl } from '@angular/forms';  

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'JustToDo';
  item:string="";
  items:string[]=[];
  i:number=0;
  rrr:boolean=false
  
constructor(){}
ngOnInit(){}
added_item()
  {
    this.items.push(this.item);
    alert(this.item);
    alert(this.i);
    alert(this.items)
    
  }
  remove_item(i){
    alert(i);
   this.items.splice(i,1)
    }
    edit_item(i){
      alert(i);
      
    }
  }
 
