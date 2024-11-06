import { Component } from '@angular/core';
import { Cv } from '../model/cv.model';


@Component({
  selector: 'app-embauche',
  templateUrl: './embauche.component.html',
  styleUrls: ['./embauche.component.css'],
})
export class EmbaucheComponent {
   public embauchees: Cv[] = [];
}
