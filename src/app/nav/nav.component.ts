import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { environment } from 'src/environments/environment';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { SidenavListComponent } from './sidenav-list/sidenav-list.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  showBurger = true;
  selectedURL: string;
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

  constructor(
    private dialog: MatDialog,
    private router: Router
  ) { }

  ngOnInit() {
    
  }

   onToggleSidenav() {
      this.showBurger = false;
      const dialogConfig = new MatDialogConfig();
      dialogConfig.autoFocus = true;
      dialogConfig.minWidth = '100vw';
      dialogConfig.minHeight = '100vh';
      dialogConfig.panelClass = 'overlay';
      dialogConfig.data = {
        showBurger: this.showBurger,
      };
      const dialogRef = this.dialog.open(SidenavListComponent, dialogConfig);
      dialogRef.afterClosed().subscribe(data =>
        this.goToPage(data)
      );
    }

    goToPage(data){
      this.selectedURL = data.selectedMenuField;
      this.router.navigate(['/',this.selectedURL]);
    }
}
