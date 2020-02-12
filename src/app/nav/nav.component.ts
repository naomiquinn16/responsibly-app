import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  
  @Output() public sidenavToggle = new EventEmitter();
  menuItems = [
    {
      text: 'Home',
      path: '/'
    },
    // {
    //   text: 'Team',
    //   path: '/team'
    // },
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

  public onToggleSidenav = () => {
    this.sidenavToggle.emit();
    console.log('hello')
  }

}
