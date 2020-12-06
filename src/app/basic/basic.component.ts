import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basic',
  templateUrl: './basic.component.html',
  styleUrls: ['./basic.component.css']
})
export class BasicComponent implements OnInit {

  constructor() { }
  public name="Ankush";
  public myid="fname";
  onclick() {
    console.log("Click event works");
    
  }
  ngOnInit(): void {
  }

}
