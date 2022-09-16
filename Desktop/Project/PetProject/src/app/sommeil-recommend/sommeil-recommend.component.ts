import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { count } from 'rxjs';
import { SommeilRecommends } from '../model/SommeilRecommends.interface';



@Component({
  selector: 'app-sommeil-recommend',
  templateUrl: './sommeil-recommend.component.html',
  styleUrls: ['./sommeil-recommend.component.scss']
})
export class SommeilRecommendComponent implements OnInit {

  points: number = 0;
  hadVoted: boolean = false;
  sommeilRecommends: SommeilRecommends[]  =
   [
    {
      id: 1,
      name: "Vezak O.P.L.",
      img: "/assets/img/vezak.jpg",
      sort: "Dry White",
      points: this.points,
      hadVoted: this.hadVoted,
    },
    {
      id: 2,
      name: "Soave D.O.C.",
      img: "/assets/img/soave.png",
      sort: "Dry White",
      points: this.points,
      hadVoted: this.hadVoted,
    },
    {
      id: 3,
      name: "Taka S.O.A.",
      img: "/assets/img/Taka.jpg",
      sort: "Dry White",
      points: this.points,
      hadVoted: this.hadVoted,
    },
    {
      id: 4,
      name: "Gutturnio D.O.C.",
      img: "/assets/img/Puck.jpg",
      sort: "Dry Red",
      points: this.points,
      hadVoted: this.hadVoted,
    },
    {
      id: 5,
      name: "Tommasi Amarone",
      img: "/assets/img/Tommasi.jpg",
      sort: "Dry Red",
      points: this.points,
      hadVoted: this.hadVoted,
    },
    {
      id: 6,
      name: "Toscano IGT.",
      img: "/assets/img/TOSCANO.png",
      sort: "Dry Red",
      points: this.points,
      hadVoted: this.hadVoted,
    },
    {
      id: 7,
      name: "Lou Cat",
      img: "/assets/img/Lou.png",
      sort: "Dry Pink",
      points: this.points,
      hadVoted: this.hadVoted,
    },
    {
      id: 8,
      name: "La Vieille Ferme",
      img: "/assets/img/LaVielli.jpg",
      sort: "Dry Pink",
      points: this.points,
      hadVoted: this.hadVoted,

    },
    {
      id: 9,
      name: "Cap dEstany – AOP",
      img: "/assets/img/Haaf.jpg",
      sort: "Dry Pink",
      points: this.points,
      hadVoted: this.hadVoted,
    }
   ];

  ngOnInit(): void {
  }

  onChange(item: SommeilRecommends) {
      item.hadVoted = !item.hadVoted;
      ++item.points;
  }
}



