import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  icons = [
    {
      name: 'LinkedIn',
      url: 'https://ie.linkedin.com/',
      path: '../../assets/images/linkedin-in-brands.svg'
    },
    {
      name: 'Twitter',
      twitter: 'https://twitter.com',
      path: '../../assets/images/twitter-brands.svg'
    },
    {
      name: 'Github',
      github: 'https://github.com',
      path: '../../assets/images/github-brands.svg'
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
