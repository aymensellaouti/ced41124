import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { User } from '../users.service';

import { FiboPipe } from '../../pipes/fibo.pipe';



@Component({
    selector: 'app-users',
    templateUrl: './users.component.html',
    styleUrl: './users.component.css',
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
    imports: [FiboPipe],
})
export class UsersComponent {
  @Input() users: User[] = [];


}
