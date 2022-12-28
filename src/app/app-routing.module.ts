import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { UsersManagementComponent } from './pages/users-management/users-management.component';
import { UserComponent } from './pages/user/user.component';


const routes: Routes = [
  {path:'' , component:HomeComponent},
  {path:'users-management' , component:UsersManagementComponent},
  {path:'user' , component:UserComponent},
  {path:'user/:id/edit' , component:EditUserComponent},
  {path:'not-found' , component:NotFoundComponent},
  {path:'**' , redirectTo:'not-found'},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
