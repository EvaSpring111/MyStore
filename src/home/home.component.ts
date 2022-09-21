import { Component, OnInit } from '@angular/core';

import { Stuff } from 'src/model/Stuff.interface';
import { StuffService } from 'src/app/stuff.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  stuff: Stuff[] = [];
  constructor( private stuffService: StuffService) { }

  ngOnInit(): void {

  }



}
