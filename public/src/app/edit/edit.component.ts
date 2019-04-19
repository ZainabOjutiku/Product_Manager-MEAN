import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import {  HttpService } from '../http.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  editableproduct : any;
product;
  constructor(
    private _route: ActivatedRoute,
    private _httpService: HttpService,
    private _router: Router
  ) { }

  ngOnInit() {
    this.editableproduct ={id:"", title: "", price: "",image: "" }
    this.findProduct();

  }
findProduct(){
  this._route.params.subscribe((params: Params) => {
    console.log(params['id']);
    console.log("finding a products");
  let observable = this._httpService.findone(params["id"]);
  observable.subscribe(data =>{
    console.log(data)
    this.editableproduct = data['data']
    console.log("edited data",this.editableproduct)

  })
})
}
editProduct(){
  console.log("editable", this.editableproduct)
  let observable = this._httpService.editProduct(this.editableproduct );
  observable.subscribe(data => {
    // this.editableproduct = data;
    console.log("Successfully edited product", data)
    this._router.navigate(["/products"]);
  });

}
  deleteProduct(editableproduct){
    let observable = this._httpService.deleteProduct(this.editableproduct );
    observable.subscribe(data =>{
      console.log("DELETED product", data)
      console.log(data['data'])
    });
  }
}
