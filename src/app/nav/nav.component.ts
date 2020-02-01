import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  menuItems = [
    {
      text: 'Home',
      path: '/'
    },
    {
      text: 'Team',
      path: '/team'
    },
    {
      text: 'Product',
      path: '/product'
    },
    {
      text: 'Integration',
      path: '/integration'
    },
    {
      text: 'Contact',
      path: '/contact'
    },
    {
      text: 'Blog',
      path: '/blog'
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
