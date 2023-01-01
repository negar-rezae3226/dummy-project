import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { RouterModule, Routes } from "@angular/router";
import { LoginComponent } from './pages/account/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './components/shared/shared.module';
import { LoginModule } from './pages/account/login/login.module';
import { UsersManagementComponent } from './pages/users-management/users-management.component';
import { UserComponent } from './pages/user/user.component';
import { UserCreateComponent } from './pages/user/user-create/user-create.component';
import { UserEditComponent } from './pages/user/user-edit/user-edit.component';
import { UserDetailComponent } from './pages/user/user-detail/user-detail.component';
import { UserPostsComponent } from './pages/user/user-posts/user-posts.component';
import { ProductsManagementComponent } from './pages/products-management/products-management.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { UsersTableComponent } from './pages/user/users-table/users-table.component';
import UserFormComponent from './pages/user/create&edit-form/create&edit-form.component';
import { UserModule } from './pages/user/user.module';
import { DeleteDialogComponent} from './pages/delete-dialog/delete-dialog.component';
import { DialogComponent } from './pages/delete-dialog/dialog/dialog.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    SidebarComponent,
    UsersManagementComponent,
    UserComponent,
    UserCreateComponent,
    UserEditComponent,
    UserDetailComponent,
    UserPostsComponent,
    ProductsManagementComponent,
    NotFoundComponent,
    DashboardComponent,
    UsersTableComponent,
    UserFormComponent,
    DeleteDialogComponent,
    DialogComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    SharedModule,
    LoginModule,    
    AppRoutingModule,
    UserModule,
    ReactiveFormsModule,
    FormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
