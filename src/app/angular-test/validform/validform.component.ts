import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-validform',
  templateUrl: './validform.component.html',
  styleUrls: ['./validform.component.css']
})
export class ValidformComponent implements OnInit {
  Title:string = '';
  DisplayName:string = '';
  Category:string = '';
  complexForm: FormGroup;
  constructor(fb: FormBuilder) {
    this.complexForm = fb.group({
      'Title' : [null, Validators.compose([Validators.required, Validators.minLength(0), Validators.maxLength(10)])],
      'DisplayName': [null, Validators.compose([Validators.required, Validators.minLength(0), Validators.maxLength(15)])],
      'Category' : [null, Validators.compose([Validators.required, Validators.minLength(0), Validators.maxLength(6)])]
    });
  }
  submitForm (value: any) {

    console.log(value);
  }
  ngOnInit() {
  }

}
