import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-ngstyle',
  templateUrl: './ngstyle.component.html',
  styleUrl: './ngstyle.component.css',
})
export class NgstyleComponent {
  color = 'green';
  @Input() myStyle = {
    color: this.color,
    backgroundColor: 'yellow',
    fontSize: '75px',
  };
}
