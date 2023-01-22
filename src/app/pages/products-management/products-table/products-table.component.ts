import {  Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Product } from 'src/app/models/product.interface';
import { DataService } from 'src/app/services/data.service';
import { ProductsService } from 'src/app/services/products.service';


@Component({
  selector: 'app-products-table',
  templateUrl: './products-table.component.html',
  styleUrls: ['./products-table.component.scss']
})
export class ProductsTableComponent {
  usersList: any;
  deleteProduct: Product[] = [];
  element: any;
  searchUser: Product[] = [];
  user?: Product;
  defaultLimit: number = 5;
  addLimit: number = 5;
  pageNumber: number = 1;
  defaultSkip: number = 0;
  allPage: number = 0;
  nextLoading: boolean = true;
  beforeLoading: boolean = true;
  loader: boolean = true;
  numbers: any = [
    { value: 5, viewValue: 5 },
    { value: 10, viewValue: 10 },
    { value: 20, viewValue: 20 },
  ];
  selectedNumber = this.numbers[0].value;

  constructor(
    private productService: ProductsService,
    private router: Router,
    private route: ActivatedRoute,
    private _dataService: DataService
  ) { }

  ngOnInit(): void {

    this._dataService.sharedParam.subscribe((user) => {
      if (user) {
        this.user = user;
      }
    });
    this.getUsersApi();
  }


  getUsersApi() {

    this.productService.limitAndSkipUsers(this.defaultLimit, this.defaultSkip)
      .subscribe((response) => {


        console.log(response.body.products);

        if (response.status == 200) {
          this.loader = false;
          this.nextLoading = false;
          this.beforeLoading = false;
        }

        this.allPage = (response.body.total) / this.defaultLimit;

        this.usersList = response.body.products;

        let index = this.usersList.findIndex((user: { id: number | undefined; }) => user.id == this.user?.id);

        if (this._dataService.UpdateORAddUser == false) {
          if (this.user) {
            this.usersList[index] = this.user;
          }
        }
        else {
          if (this.user) {
            this.usersList.push(this.user);
          }
        }
      });

  }

  OnDeleteUser(user: any) {
    this.element = document.getElementById(user.id) as HTMLElement;
    this.element.parentElement.removeChild(this.element);
  }
  onSearchUser(e: string) {
    this.productService.searchUsers(e).subscribe((response: Product[]) => {
      this.usersList = response;
    });
  }

  onUserRedirect() {
    this.router.navigate(['users-management/create']);
  }

  nextPage() {


    this.defaultSkip += this.addLimit;
    this.nextLoading = true;
    this.getUsersApi();
    this.pageNumber++;


  }

  beforePage() {

    this.defaultSkip = this.defaultSkip - this.addLimit;
    this.beforeLoading = true;
    this.getUsersApi();
    this.pageNumber--;


  }
  onSelected(value: Event): void {


    this.addLimit = +value;
    console.log(this.addLimit);

    this.defaultSkip = 0;

    this.defaultLimit = this.addLimit;
    this.pageNumber = 1;
    this.getUsersApi();



  }

}
