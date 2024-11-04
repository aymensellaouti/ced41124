import { Component } from '@angular/core';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrl: './color.component.css',
})
export class ColorComponent {
  defaultColor = 'red';
  /**
   * Représente la couleur de l'arrière plan de la Div
   */
  color = this.defaultColor;

  /**
   * Permet de changer la couleur de l'arrière plan de la de la div
   * @param newColor : la nouvlele couleur de l'arrere plan de la div
   */
  changeColor(newColorInput: HTMLInputElement): void {
    this.color = newColorInput.value;
    newColorInput.value = '';
  }
  /**
   * Permet de réinitiailser la couleur par défaut de la div
   */
  reset() {
    this.color = this.defaultColor;
  }
}
