import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-fils',
  templateUrl: './fils.component.html',
  styleUrl: './fils.component.css'
})
export class FilsComponent {
  @Input()
  messageMenBaba = 'salam';

  @Output()
  sendMessageElBaba = new EventEmitter<string>();

  onSendMessage() {
    this.sendMessageElBaba.emit('3aslama Baba:D');
  }
}
