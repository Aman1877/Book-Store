import { Component } from '@angular/core';
import { CrudService } from 'src/app/service/crud.service';

@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.css'],
})
export class BooksListComponent {
  Books: any[] = [];
  constructor(private crudApi: CrudService) {
    this.crudApi.getBooks().subscribe((res: any) => {
      console.log(res);
      this.Books = res.book;
      // console.log(this.Books);
    });
  }
  delete(id: any, i: any) {
    console.log(id);
    console.log(i);
    if (window.confirm('Are you sure want to delete ')) {
      this.crudApi.deleteBook(id).subscribe((res) => {
        this.Books.splice(i, 1);
      });
    }
  }
}
