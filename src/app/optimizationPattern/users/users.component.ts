import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { User } from '../users.service';



@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrl: './users.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UsersComponent {
  @Input() users: User[] = [];


}
