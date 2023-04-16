import { Component } from '@angular/core';

@Component({
  selector: 'app-slide',
  templateUrl: './slide.component.html',
  styleUrls: ['./slide.component.css']
})
export class SlideComponent {
  currentindex = 0;
  timer:any;
  images = [
    "assets/images/pic1.jpg",
    "assets/images/pic2.jpg",
    "assets/images/pic3.jpg"
  ];

  ShowPrevious(){
    if(this.currentindex > 0)
    {
      this.currentindex--;
    }
  }
  ShowNext(){
    if(this.currentindex < this.images.length-1)
    {
      this.currentindex++
    }
  }
  Slide(){
     this.timer = setInterval(() => {
      if(this.currentindex === this.images.length-1)
      {
        this.currentindex = 0;
      }
      else
      {
        this.currentindex++;
      }
    }, 650);
  }

  Stop(){
    clearInterval(this.timer);
    this.timer = null;
  }
}