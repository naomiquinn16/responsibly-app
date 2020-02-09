import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  contactForm: FormGroup;
  contacts = [
    {
      ligature: 'location_on',
      title: 'Office Location',
      text: 'Smithfield, Dublin, Ireland'

    },
    {
      ligature: 'email',
      title: 'Email',
      text: 'responsibly.ai@gmail.com'
    }
  ];
  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.contactForm = this.formBuilder.group({
      name:new FormControl(''),
      email:new FormControl(''),
      message: new FormControl('')
  });

  }

  onFormSubmit(form: FormGroup){
    console.log(form);
  }

}
