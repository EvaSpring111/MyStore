import { Component, OnInit } from '@angular/core';
import { SommeilRecommends } from '../model/SommeilRecommends.interface';

@Component({
  selector: 'app-votes-results',
  styleUrls: ['./votes-results.component.scss'],
  template: `

<div>
  <h2>Количество кликов: </h2>
</div>
  `


})

export class VotesResultsComponent implements OnInit {

  ngOnInit() {

  }

}
