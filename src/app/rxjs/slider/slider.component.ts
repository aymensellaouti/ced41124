import { Component, Input } from '@angular/core';
import { map, Observable, pipe, startWith, timer } from 'rxjs';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrl: './slider.component.css'
})
export class SliderComponent {
  @Input() timer = 1000;
  @Input() size = 150;
  @Input() imagesArray = [
    'as.jpg',
    '404.png',
    'cv.png',
    'rotating_card_profile.png',
    'rotating_card_profile2.png',
    'rotating_card_profile3.png',
  ];
  images$: Observable<string> = timer(0, this.timer)
  .pipe(
    startWith(0),
    // 0, 1, 2, 3, 4, 5, 6, 7, 8
    map((index) => this.imagesArray[index % this.imagesArray.length])
    // img1, img2, img3, img4, img5, img6
  )

}
