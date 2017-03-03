import { Component, Input } from '@angular/core';
import { User } from '../../../shared/model/user';

@Component({
    selector: 'user-detail',
    templateUrl: 'user-detail.component.html'
})
export class UserDetailComponent {
    @Input()
    public user: User;
}
