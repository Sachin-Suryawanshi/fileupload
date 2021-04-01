import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FileuploadService {
  url = 'http://localhost:8080';
  constructor(private http: HttpClient) {}
  uploadFile(formData: any) {
    return this.http.post(this.url + '/upload', formData);
  }

  getAllProducts() {
    return this.http.get(this.url + '/getallproducts');
  }

  updateProduct(data: any) {
    return this.http.put(this.url + '/updateproduct', data);
  }

  deleteProduct(productId: number) {
    return this.http.delete(this.url + '/deleteamazonproduct/' + productId);
  }
}
