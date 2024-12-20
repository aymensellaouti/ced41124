import { Component, inject, Input } from '@angular/core';
import { Cv } from '../model/cv';
import { EmbaucheService } from '../services/embauche.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-cv-card',
  templateUrl: './cv-card.component.html',
  styleUrl: './cv-card.component.css',
})
export class CvCArdComponent {
  @Input()
  cv: Cv | null = null;
  embaucheService = inject(EmbaucheService);
  toast = inject(ToastrService);
  embaucher() {
    if (this.cv) {
      if (this.embaucheService.embaucher(this.cv))
        this.toast.success(`${this.cv.name} a été embauché succès`);
      else {
        this.toast.warning(`${this.cv.name} est déjà pré selectionné`);
      }
    }
  }
}
