import { Component, NgZone, OnInit } from '@angular/core';
// For reactive form FormGroup FormControl
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { CrudService } from 'src/app/service/crud.service';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css'],
})
export class AddBookComponent {
  // Form name (form group - form ne control kre)
  bookForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private crudApi: CrudService
  ) {
    // Form ni field (formbuilder ma j form group)
    this.bookForm = this.formBuilder.group({
      name: [''],
      price: [''],
      description: [''],
    });
  }

  // Value pass kri service ne ...aakha form ni
  onSubmit(): any {
    this.crudApi.AddBook(this.bookForm.value).subscribe(
      () => {
        console.log('Data added successfully');
        this.ngZone.run(() => {
          this.router.navigateByUrl('/book-list');
        });
      },
      (err) => {
        console.log('error', err);
      }
    );
  }
}
