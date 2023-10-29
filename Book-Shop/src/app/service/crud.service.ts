import { Book } from './book';
import { Observable, throwError } from 'rxjs';
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class CrudService {
  // NodeJs API
  REST_API: string = 'http://localhost:8080/api';
  // direct frontend backend connect na thay eni maate header set krvu pde
  httpHeaders = new HttpHeaders().set(`Content-Type`, `application/json`);

  constructor(private HttpClient: HttpClient) {}

  // Add records function
  AddBook(data: Book): Observable<any> {
    let API_URL = `${this.REST_API}/add-book`;
    return this.HttpClient.post(API_URL, data).pipe(
      catchError(this.handleError)
    );
  }

  // Get all record function
  getBooks() {
    return this.HttpClient.get(`${this.REST_API}/all-books`);
  }

  // Get single book
  getBook(id: any): Observable<any> {
    let API_URL = `${this.REST_API}/read-book/${id}`;
    return this.HttpClient.get(API_URL, { headers: this.httpHeaders }).pipe(
      map((res: any) => {
        return res || {};
      }),
      catchError(this.handleError)
    );
  }

  // Update book
  updateBook(id: any, data: any): Observable<any> {
    let API_URL = `${this.REST_API}/update-book/${id}`;
    return this.HttpClient.put(API_URL, data, {
      headers: this.httpHeaders,
    }).pipe(catchError(this.handleError));
  }

  // Delete book
  deleteBook(id: any): Observable<any> {
    let API_URL = `${this.REST_API}/delete-book/${id}`;
    console.log(API_URL);
    return this.HttpClient.delete(API_URL, { headers: this.httpHeaders }).pipe(
      catchError(this.handleError)
    );
  }

  // Error mesaage
  handleError(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Handle client side error
      errorMessage = error.error.message;
    } else {
      // Handle server side error
      errorMessage = `Error Code:${error.status}\n Message:${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }
}
