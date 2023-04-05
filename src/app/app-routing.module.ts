import { NgModule } from '@angular/core';
import { OrderComponent } from './order/order.component';
import {EmpComponent }from './emp/emp.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: 'order/:id', component: OrderComponent},
  {path: 'emp/:empname', component: EmpComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
