import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { UsersManagementComponent } from './pages/users-management/users-management.component';
import { UserComponent } from './pages/user/user.component';
import { UserEditComponent } from './pages/user/user-edit/user-edit.component';
import { UserDetailComponent } from './pages/user/user-detail/user-detail.component';
import { ProductsManagementComponent } from './pages/products-management/products-management.component';
import { NotFoundComponent } from './components/shared/not-found/not-found.component';
import { LoginComponent } from './pages/account/login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { UserCreateComponent } from './pages/user/user-create/user-create.component';
import { AuthGuardGuard } from './guards/auth-guard.guard';


const routes: Routes = [
    { path: '', component: DashboardComponent },
    {path: 'users-management', component: UsersManagementComponent},
    { path: 'users-management/create', component: UserCreateComponent },
    { path: 'users-management/edit/:id', component: UserEditComponent },
    { path: 'users-management/detail/:id', component: UserDetailComponent },
    { path: 'products-management', component: ProductsManagementComponent,canActivate : [AuthGuardGuard] },
    { path: 'login', component: LoginComponent },
    { path: 'dashboard', component: DashboardComponent , canActivate : [AuthGuardGuard] },
    { path: 'not-found', component: NotFoundComponent },
    { path: '**', redirectTo: 'not-found' }


];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
