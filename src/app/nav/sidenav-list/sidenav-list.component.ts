import { Component, OnInit, Output, EventEmitter, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-sidenav-list',
  templateUrl: './sidenav-list.component.html',
  styleUrls: ['./sidenav-list.component.scss']
})
export class SidenavListComponent implements OnInit {
  showBurger: boolean;
  selectedMenuField: string;
  menuFields = [
    'home',
    // 'team',
    'product',
    'integration',
    'contact',
    'blog',
  ];
  constructor(
  private dialogRef: MatDialogRef < SidenavListComponent >,
  @Inject(MAT_DIALOG_DATA) data){
    this.showBurger = data.showBuger;
  }

  ngOnInit() {
  }

  closeNav(menuField) {
    this.showBurger = true;
    this.dialogRef.close({showBurger: this.showBurger , selectedMenuField: menuField});
  }

  closeMenu() {
    this.showBurger = true;
    this.dialogRef.close();
  }

}
