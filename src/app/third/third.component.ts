import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';


@Component({
  selector: 'app-third',
  templateUrl: './third.component.html',
  styleUrls: ['./third.component.scss']
})
export class ThirdComponent implements OnInit {

  data= [];
  ret:any;
  constructor( private service :DataService) { }


  ngOnInit(): void {
    this.service.getall().subscribe((ret: any[])=>{
      console.log(ret);
      this.data = ret;
  })

}
}