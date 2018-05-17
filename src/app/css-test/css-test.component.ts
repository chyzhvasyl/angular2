import { Component, OnInit } from '@angular/core';

const colors = [
  {
    Name: 'Зелёный',
    Value: 1
  },
  {
    Name: 'Красный',
    Value: 2
  },
  {
    Name: 'Синий',
    Value: 3
  }
];
@Component({
  selector: 'app-css-test',
  templateUrl: './css-test.component.html',
  styleUrls: ['./css-test.component.css']
})
export class CssTestComponent implements OnInit {
  colors = colors;

  constructor() { }

  ngOnInit() {
  }

}
