import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
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
  constructor() { }

  ngOnInit() {
  }

}
