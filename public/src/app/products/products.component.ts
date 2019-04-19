import { Component, OnInit } from '@angular/core';
import {  Router } from '@angular/router';
import { HttpService } from '../http.service';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  allProducts;
  editableproduct : any;
  constructor(
    private _httpService: HttpService,
    private _router: Router
  ) { }

  ngOnInit() {
    this.getProducts()
    this.editableproduct ={id:"", title: "", price: "",image: "" }

  }


  getProducts(){
    console.log("getting all products")
    let observable = this._httpService.getProducts();
    observable.subscribe(data =>{
      console.log(this.allProducts)
      console.log(data['data'])
      this.allProducts = data['data']
    });
  }
  getInfo(p : any){
    this.allProducts = p;
    this.editableproduct ={_id: p._id, title: p.title, price: p.price,image: p.image }
  };

  deleteProduct(product){
    let observable = this._httpService.deleteProduct(product);
    observable.subscribe(data =>{
      console.log("DELETED product", data)
      console.log(data['data'])
      this.getProducts();
    });
  }
}
