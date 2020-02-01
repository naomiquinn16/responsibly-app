import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home.router.module';
import { AboutComponent } from '../about/about.component';
import { ProductComponent } from '../product/product.component';
import { IntegrationComponent } from '../integration/integration.component';
import { ContactComponent } from '../contact/contact.component';
import { BlogComponent } from '../blog/blog.component';

@NgModule({
  declarations: [
    HomeComponent,
    AboutComponent,
    ProductComponent,
    IntegrationComponent,
    ContactComponent,
    BlogComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
