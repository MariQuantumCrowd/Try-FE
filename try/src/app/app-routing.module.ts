import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeEmployeeComponent } from './home-employee/home-employee.component';
import { ViewEmployeeComponent } from './view-employee/view-employee.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';


const routes: Routes = [
  {path: '', component:HomeEmployeeComponent},
  {path: 'viewemployee', component:ViewEmployeeComponent},
  {path: 'addemployee', component:AddEmployeeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
