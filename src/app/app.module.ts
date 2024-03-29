import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
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
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { UsersTableComponent } from './pages/user/users-table/users-table.component';
import { UserModule } from './pages/user/user.module';
import { NotFoundComponent } from './components/shared/not-found/not-found.component';
import { SearchComponent } from './components/shared/search/search.component';
import UserFormComponent from './pages/user/create&edit-form/create&edit-form.component';
import { InputComponent } from './components/shared/input/input.component';
import { DeleteDialogComponent } from './components/shared/delete-dialog/open-dialog.component';
import { DialogComponent } from './components/shared/delete-dialog/dialog/dialog.component';
import { ValidationComponent } from './pages/validation/validation.component';
import { LocalStorageService } from './services/LocalStorage.service';
import { AuthInterceptorServiceService } from './services/auth-interceptor-service.service';
import { GanderDirective } from './directives/gander.directive';
import { ProductsManagementComponent } from './pages/products-management/products-management.component';
import { ProductsTableComponent } from './pages/products-management/products-table/products-table.component';
import { DatePipe } from './date.pipe';
// import { DatePipe } from '@angular/common';





@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
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
    DialogComponent,
    InputComponent,
    SearchComponent,
    ValidationComponent,
    GanderDirective,
    ProductsTableComponent,
    DatePipe,
    // DatePipe
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    SharedModule,
    LoginModule,    
    AppRoutingModule,
    UserModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
    
  ],
  providers: [
    LocalStorageService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorServiceService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
