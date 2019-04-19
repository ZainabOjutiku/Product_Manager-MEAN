import { Component, OnInit } from '@angular/core';
import {  Router } from '@angular/router';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  newProduct;
  constructor(
    private _httpService: HttpService,
    private _router: Router
  ) {
  }

  ngOnInit() {
    this.newProduct = {id: "", title: "", price: "", image: ""}
  }

  createProduct() {
    if (this.newProduct.title.length < 5) {
      this._router.navigate(["/products/newproducts"]);
    } else {
      let observable = this._httpService.addProduct(this.newProduct);
      observable.subscribe(data => {
        console.log("creating data", data)
        this._router.navigate(["/products"]);

      });
    }
  }
}
