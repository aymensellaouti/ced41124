import { Component, Input } from '@angular/core';
import { NgStyle } from '@angular/common';

@Component({
    selector: 'app-ngstyle',
    templateUrl: './ngstyle.component.html',
    styleUrl: './ngstyle.component.css',
    standalone: true,
    imports: [NgStyle],
})
export class NgstyleComponent {
  color = 'green';
  @Input() myStyle = {
    color: this.color,
    backgroundColor: 'yellow',
    fontSize: '75px',
  };
}
