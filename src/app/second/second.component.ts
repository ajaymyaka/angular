import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.scss']
})
export class SecondComponent implements OnInit {

  ram(){
     
    data :"ajay";
    alert("data");
  }
  


  numbers:number[]=[];

  constructor() { 
    for( let index=0 ; index <100 ; index++){
      this.numbers.push(index);
    }
  

  }

  ngOnInit(): void {
  }

}
