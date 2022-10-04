import { Component, OnInit } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import { CartService  } from 'src/services/shopping-cart.service';

import { FooterLinks } from 'src/model/FooterLinks.interface';
import { HeaderNav } from 'src/model/HeaderNav.interface';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'MyStore';

  public totalItem : number = 0;
  public searchTerm !: string;
  searchvalue: any;
  constructor(private cartService : CartService) { }

  ngOnInit(): void {
    this.cartService.getProducts()
    .subscribe(res=>{
      this.totalItem = res.length;
    })
  }

  // search(event:any){
  //   this.searchTerm = (event.target as HTMLInputElement).value;
  //   // console.log(this.searchTerm);
  //   this.cartService.search.next(this.searchTerm);
  // }

  headerNav: HeaderNav[] = [
    {
      routerLink: "home",
      ariaLabel: "Home",
      title: "Home",
      href: "#",
    },
    {
      routerLink: "",
      ariaLabel: "Suplier",
      title: "Suplier",
      href: "#",
    },
    {
      routerLink: "",
      ariaLabel: "Visit us",
      title: "Visit as",
      href: "#",
    },
    {
      routerLink: "",
      ariaLabel: "Call us!",
      title: "Call us",
      href: "tel:8 (812) 123-45-67",
    },
    {
      routerLink: "deviceFullInfo",
      ariaLabel: "deviceFullInfo",
      title: "Device Full Info",
      href: "#",
    },
    {
      routerLink: "",
      ariaLabel: "Suplier",
      title: "Suplier",
      href: "#",
    },
    {
      routerLink: "",
      ariaLabel: "Suplier",
      title: "Suplier",
      href: "#",
    },  {
      routerLink: "",
      ariaLabel: "Suplier",
      title: "Suplier",
      href: "#",
    },

  ];

  links: FooterLinks[]  = [
    {
      name: 'News',
      link: 'https://www.techradar.com/news/phone-and-communications'
    },
    {
      name: 'Blog',
      link: 'https://www.techradar.com/news/phone-and-communications'
    },
    {
      name: 'GitHub',
      link: 'https://www.techradar.com/news/phone-and-communications'
    },
    {
      name: 'Twitter',
      link: 'https://www.techradar.com/news/phone-and-communications'
    },
    {
      name: 'Events',
      link: 'https://www.techradar.com/news/phone-and-communications'
    },
    {
      name: 'Meetups',
      link: 'https://www.techradar.com/news/phone-and-communications'
    },
    {
      name: 'Support',
      link: 'https://www.techradar.com/news/phone-and-communications'
    },
    {
      name: 'Help',
      link: 'https://www.techradar.com/news/phone-and-communications'
    }
  ];
}
