import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  members = [
    {
      name: 'Abhishek Khanna',
      image: '../../assets/images/boy.jpeg',
      role: 'Co Founder & CEO',
      linkedin: 'https://ie.linkedin.com/',
      twitter: 'https://twitter.com',
      github: 'https://github.com',
    },
    {
      name: 'Naomi Quinn',
      image: '../../assets/images/girl.jpeg',
      role: 'Co Founder & COO',
      linkedin: 'https://ie.linkedin.com/',
      twitter: 'https://twitter.com',
      github: 'https://github.com',
    },
    {
      name: 'New Person',
      image: '../../assets/images/woman.jpg',
      role: 'Co Founder & CFO',
      linkedin: 'https://ie.linkedin.com/',
      twitter: 'https://twitter.com',
      github: 'https://github.com',
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
