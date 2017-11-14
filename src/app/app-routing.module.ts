import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { NavComponent } from './nav/nav.component';
import { ProductComponent } from './product/product.component';
import { ErrPageComponent } from './err-page/err-page.component';
import { CanActivate } from '@angular/router';
import { AuthService } from './service/auth.service';

const appRoutes: Routes =  [
  {path: 'home', component: HomeComponent},
  {path: 'nav', component: NavComponent},
  {path: 'product/:id',canActivate: [AuthService], component: ProductComponent},
  {
    path: 'settings',
    children: [
      { path: 'profile', component: HomeComponent },
      { path: 'password', component: NavComponent }
    ]
  },
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: '**', component: ErrPageComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      // { enableTracing: true } 
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}