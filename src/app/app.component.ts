import {Component, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  @ViewChild('tdForm')
  tdForm: any;


  constructor() {
  }

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  onSubmit() {
    console.log(this.tdForm.value);
  }
}

