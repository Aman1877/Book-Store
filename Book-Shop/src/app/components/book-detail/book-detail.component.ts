import { FormBuilder, FormGroup } from '@angular/forms';
import { Component, NgZone } from '@angular/core';
// Activated route for getting perticular id
import { ActivatedRoute, Router } from '@angular/router';
import { CrudService } from 'src/app/service/crud.service';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css'],
})
export class BookDetailComponent {
  getId: any;
  updatedForm!: FormGroup;
  constructor(
    private formbuilder: FormBuilder,
    private router: Router,
    private crudApi: CrudService,
    private ngZone: NgZone,
    private activatedRoute: ActivatedRoute
  ) {
    this.getId = this.activatedRoute.snapshot.paramMap.get('id');
    this.crudApi.getBook(this.getId).subscribe((res) => {
      console.log(res);
      this.updatedForm.setValue({
        name: res.book['name'],
        price: res.book['price'],
        description: res.book['description'],
      });
    });
    this.updatedForm = this.formbuilder.group({
      name: [''],
      price: [''],
      description: [''],
    });
  }
  onUpdate() {
    this.crudApi.updateBook(this.getId, this.updatedForm.value).subscribe(
      (res) => {
        console.log('Data Updated Successfully');
        this.ngZone.run(() => {
          this.router.navigateByUrl('/book-list');
        });
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
