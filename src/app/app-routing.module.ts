import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { QuicklinkModule, QuicklinkStrategy } from 'ngx-quicklink';

const appRoutes: Routes = [
  {
      loadChildren: './home/home.module#HomeModule',
      path: ''
  }
];

@NgModule({
  declarations: [
 
  ],
  imports: [
    QuicklinkModule,
    RouterModule.forRoot(appRoutes,{ scrollPositionRestoration: 'enabled' , preloadingStrategy: QuicklinkStrategy })
  ],
  exports: [RouterModule]
})


export class AppRoutingModule { }
