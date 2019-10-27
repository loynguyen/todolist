import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {
  name = '';
  evenStyle = { color: 'red', fontSize: '20px'};
  oddStyle = { color: 'blue', fontSize: '40px'};
  isHighlight = false;
  curentClass = { circle : !this.isHighlight , square : this.isHighlight }
  constructor() { }

  ngOnInit() {
  }

}
