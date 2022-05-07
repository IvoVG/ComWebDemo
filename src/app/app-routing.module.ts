import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './features/home/home.component';
import { ProductsingleComponent } from './features/productsingle/productsingle.component';

const routes: Routes = [
  { path:"", component:HomeComponent },
  { path:"product-single", component:ProductsingleComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
