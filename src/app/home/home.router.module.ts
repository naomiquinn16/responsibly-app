import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { AboutComponent } from '../about/about.component';
import { ProductComponent } from '../product/product.component';
import { IntegrationComponent } from '../integration/integration.component';
import { ContactComponent } from '../contact/contact.component';
import { BlogComponent } from '../blog/blog.component';

const homeRoutes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'team',
        component: AboutComponent
    },
    {
        path: 'product',
        component: ProductComponent
    },
    {
        path: 'integration',
        component: IntegrationComponent
  
    },
    {
        path: 'contact',
        component: ContactComponent
    },
    {
        path: 'blog',
        component: BlogComponent
    },
    {
        path: '**',
        redirectTo: ''  
    }
  ];

@NgModule({
    imports: [CommonModule,RouterModule.forChild(homeRoutes)],
    exports: [RouterModule]
})
export class HomeRoutingModule {}
