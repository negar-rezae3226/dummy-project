import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { UsersManagementComponent } from './pages/users-management/users-management.component';
import { UserComponent } from './pages/user/user.component';
import { UserEditComponent } from './pages/user/user-edit/user-edit.component';
import { UserDetailComponent } from './pages/user/user-detail/user-detail.component';
import { UserPostsComponent } from './pages/user/user-posts/user-posts.component';
import { ProductsManagementComponent } from './pages/products-management/products-management.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { LoginComponent } from './pages/account/login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { UserCreateComponent } from './pages/user/user-create/user-create.component';


const routes: Routes = [
    { path: '', component: HomeComponent },
    // { path: 'users-management', component: UsersManagementComponent },
    {path: 'users-management', component: UsersManagementComponent, children: [
            {
                path: 'edit/:id',
                component: UserEditComponent,
            },
            // {
            //     path: 'detail/:id',
            //     component: UserDetailComponent,
            // },
            {
                path: 'posts/:id',
                component: UserPostsComponent,
            }
        ]
    },
    {path: 'users-management/create', component: UserCreateComponent},
    {path: 'detail/:id', component: UserDetailComponent},
    { path: 'products-management', component: ProductsManagementComponent },
    { path: 'login', component:LoginComponent },
    { path: 'dashboard', component:DashboardComponent },
    { path: 'not-found', component: NotFoundComponent },
    { path: '**', redirectTo: 'not-found' }


];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
