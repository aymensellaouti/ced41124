import { HttpClient } from '@angular/common/http';
import { Component, inject, Input } from '@angular/core';
import { combineLatest, map, Observable, tap, timer } from 'rxjs';
import { APP_API } from '../../config/app-api.config';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrl: './slider.component.css',
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
  http = inject(HttpClient);
  imagesFromApi$ = this.http.get<ImageAPI[]>(APP_API.photos);
  images$: Observable<string> = combineLatest([
    timer(0, 1000),
    this.imagesFromApi$,
  ]).pipe(
    tap(([index, images]) =>
      console.log({
        index,
        images,
      })
    ),
    map(([index, images]) => images[index % images.length].url)
  );


  // timer(0, this.timer)
  // .pipe(
  //   startWith(0),
  //   // 0, 1, 2, 3, 4, 5, 6, 7, 8
  //   map((index) => this.imagesArray[index % this.imagesArray.length])
  //   // img1, img2, img3, img4, img5, img6
  // )
}


export interface ImageAPI {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}
