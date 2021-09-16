import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-round-object',
  templateUrl: './round-object.component.html',
  styleUrls: ['./round-object.component.scss']
})
export class RoundObjectComponent implements OnInit {
  @Input() Alt:string = 'Programming Language';
  @Input() Image:string = '';
  @Input() Pad:string = '20px';
  @Input() Width:number = 80;
  constructor() {

  }

  ngOnInit(): void {
  }

}
