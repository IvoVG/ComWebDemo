import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CartComponent } from './features/cart/cart.component';
import { CheckoutComponent } from './features/checkout/checkout.component';
import { DashboardComponent } from './features/dashboard/dashboard.component';
import { HomeComponent } from './features/home/home.component';
import { OrdersComponent } from './features/orders/orders.component';
import { ProductsingleComponent } from './features/productsingle/productsingle.component';
import { ShopComponent } from './features/shop/shop.component';

const routes: Routes = [
  { path:"", component:HomeComponent },
  { path:"product-single", component:ProductsingleComponent },
  { path:"cart", component:CartComponent },
  { path:"checkout", component:CheckoutComponent },
  { path:"shop", component:ShopComponent },
  { path:"dashboard", component:DashboardComponent },
  { path:"order", component:OrdersComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
