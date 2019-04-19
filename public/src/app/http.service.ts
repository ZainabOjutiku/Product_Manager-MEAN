import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class HttpService {
  constructor(private _http: HttpClient) {
  }
  getProducts(){
    return this._http.get('/allproducts')
  }

  addProduct(newproduct){
    return this._http.post('/newproduct', newproduct)

  }
  editProduct(product){
    return this._http.put(`/product/update/${product._id}`, product)

  }
  deleteProduct(product){
    return this._http.delete(`/delete/${product._id}`, product)
  }
  findone(product){
    console.log(product);
    return this._http.get(`/product/${product}`, product)

  }
}
