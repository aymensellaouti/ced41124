import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
    selector: 'input[appRainbow][type=text]',
    standalone: true
})
export class RainbowDirective {

  // Quel propriétés bech nbadel
  @HostBinding('style.color') color = 'black';
  @HostBinding('style.borderColor') bc = 'black';
  constructor() {
        console.log('rainbow');
  }

  // Quel comportement bech ngéri
  @HostListener('keyup') onKeyUp() {
    this.color = this.bc = this.getRandomColor();
  }

  private getRandomColor(): string {
    return '#' + Math.floor(Math.random() * 16777215).toString(16);
  }

}
