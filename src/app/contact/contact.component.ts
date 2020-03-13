import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { HttpClient, HttpParams, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import {} from 'googlemaps';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  @ViewChild('map',{static: true }) mapElement: any;
  map: google.maps.Map;
  contactForm = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    message: new FormControl(''),
  });

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
    private http: HttpClient,
    private router: Router,
  ) { }

  ngOnInit(): void   {
    const mapProperties = {
      center: new google.maps.LatLng(53.3425, -6.2737),
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP,
    };
    this.map = new google.maps.Map(this.mapElement.nativeElement,    mapProperties);
    const marker = new google.maps.Marker({
      position: mapProperties.center,
      map: this.map,
    });
  }

  onSubmit() {
    const body = new HttpParams()
    .set('form-name', 'contact')
    .append('name', this.contactForm.value.name)
    .append('email', this.contactForm.value.email)
    .append('message', this.contactForm.value.message)
    this.http.post('/', body.toString(), {headers: { 'Content-Type': 'application/x-www-form-urlencoded' }}).subscribe(
      res => {},
      err => {
        if (err instanceof ErrorEvent) {
          //client side error
          alert("Something went wrong when sending your message.");
          this.router.navigate(['/contact']);
          console.log(err.error.message);
        } else {
          //backend error. If status is 200, then the message successfully sent
          if (err.status === 200) {
            alert("Your message has been sent!");
            this.router.navigate(['/']);
          } else {
            alert("Something went wrong when sending your message.");
            this.router.navigate(['/contact']);
            console.log('Error status:');
            console.log(err.status);
            console.log('Error body:');
            console.log(err.error);
          };
        };
      }
    );
  };

 

}
