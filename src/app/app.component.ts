import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  modelForm: any;

  constructor() {
  }

  ngOnInit(): void {
    this.modelForm = new FormGroup({
      group: new FormGroup({
        firstName: new FormControl(),
        lastName: new FormControl(),
      }),
      age: new FormControl(),
      country: new FormControl()
    });
  }

  // tslint:disable-next-line:typedef
  onSubmit() {
    console.log(this.modelForm.value);
  }
}
