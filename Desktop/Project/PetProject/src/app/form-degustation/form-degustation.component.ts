import { Component, OnInit } from '@angular/core';
import { Form } from '@angular/forms';

@Component({
  selector: 'app-form-degustation',
  templateUrl: './form-degustation.component.html',
  styleUrls: ['./form-degustation.component.scss']
})
export class FormDegustationComponent implements OnInit {
  date: string;
  constructor() {
    this.date = new Date().toDateString();
  }

  ngOnInit(): void {
  }

}
