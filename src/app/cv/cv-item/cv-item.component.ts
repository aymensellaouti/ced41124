import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { Cv } from '../model/cv';

@Component({
  selector: 'app-cv-item',
  templateUrl: './cv-item.component.html',
  styleUrl: './cv-item.component.css'
})
export class CvItemComponent {
  @Input({required: true})
  cv!: Cv;
  @Input()
  size = 50;
  // @Output()
  // selectCv = new EventEmitter<Cv>();

  onSelectCv() {
    // this.selectCv.emit(this.cv);
  }
}
