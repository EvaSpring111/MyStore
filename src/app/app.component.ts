import { Component } from '@angular/core';


interface FooterLinks {
  name: string,
  link: string
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MyStore';
  links: FooterLinks[]  = [
    {
      name: 'News',
      link: 'https://www.techradar.com/news/phone-and-communications'
    },
    {
      name: 'News',
      link: 'https://www.techradar.com/news/phone-and-communications'
    },
    {
      name: 'News',
      link: 'https://www.techradar.com/news/phone-and-communications'
    },
    {
      name: 'News',
      link: 'https://www.techradar.com/news/phone-and-communications'
    },
    {
      name: 'News',
      link: 'https://www.techradar.com/news/phone-and-communications'
    },
    {
      name: 'News',
      link: 'https://www.techradar.com/news/phone-and-communications'
    },
    {
      name: 'News',
      link: 'https://www.techradar.com/news/phone-and-communications'
    },
    {
      name: 'News',
      link: 'https://www.techradar.com/news/phone-and-communications'
    }
  ];
}
