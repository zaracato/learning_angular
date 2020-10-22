import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent implements OnInit {

  constructor() { }
  title = 'platzi';
  items = ['nicolas', 'Arturo', 'Karen'];
  name: string;
  power = 10;
  
  ngOnInit(): void {
  }
  addName(name: string): void{
    this.items.push(name);
  }

  deleteName(index: number): void{
    this.items.splice(index, 1);
  }

}
