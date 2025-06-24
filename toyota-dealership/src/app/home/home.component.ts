import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  images = [
    'https://source.unsplash.com/featured/?toyota,1',
    'https://source.unsplash.com/featured/?toyota,2',
    'https://source.unsplash.com/featured/?toyota,3'
  ];
  current = 0;

  ngOnInit(): void {
    setInterval(() => {
      this.current = (this.current + 1) % this.images.length;
    }, 3000);
  }
}
