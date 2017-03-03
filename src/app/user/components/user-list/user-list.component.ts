import { Component, EventEmitter, Input, Output } from '@angular/core';
import { User } from '../../../shared/model/user';

@Component({
    selector: 'user-list',
    templateUrl: 'user-list.component.html'
})
export class UserListComponent {
    @Input()
    public users: User[];
    @Output()
    public detail: EventEmitter<User> = new EventEmitter<User>();
}
