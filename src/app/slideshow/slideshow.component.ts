import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.sass']
})
export class SlideshowComponent implements OnInit {
  slideshowImg = ['pexels-lukas-574069.jpg', 'pexels-lukas-574073.jpg', 'pexels-pixabay-270348.jpg'];
  headlines = [
    'Bring engineering to the next level',
    'Help others',
    'Loving Webdevelopment'
  ];
  currentImage = 0;
  showImage = true;

  ngOnInit() {
    this.updateImage();
  }

  updateImage() {
    setInterval(() => {
      this.currentImage++;
      this.currentImage = this.currentImage % this.slideshowImg.length;
      this.showImage = false;
      setTimeout(() => {
        this.showImage = true;
      }, 1);
    }, 7000);
  }
}
