import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home.router.module';
import { AboutComponent } from '../about/about.component';
import { ProductComponent } from '../product/product.component';
import { IntegrationComponent } from '../integration/integration.component';
import { ContactComponent } from '../contact/contact.component';
import { BlogComponent } from '../blog/blog.component';
import { GetStartedComponent } from '../get-started/get-started.component'


@NgModule({
  declarations: [
    HomeComponent,
    AboutComponent,
    ProductComponent,
    IntegrationComponent,
    ContactComponent,
    BlogComponent,
    GetStartedComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    FlexLayoutModule,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatTooltipModule
  ]
})
export class HomeModule { }
