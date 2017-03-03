import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from '../../services/user.service';
import { User } from '../../../shared/model/user';

@Component({
    template: `
        <loader [loading]="!users">
            <user-list [users]="users" (detail)="openDetail($event)"></user-list>
        </loader>
    `
})
export class UserListPageComponent implements OnInit {
    public users: User[];

    constructor(
        private userService: UserService,
        private router: Router,
        private route: ActivatedRoute
    ) {}

    public ngOnInit() {
        this.userService.getUsers()
            .subscribe((users: User[]) => this.users = users);
    }

    public openDetail(user: User) {
        this.router.navigate([user.id], { relativeTo: this.route });
    }
}
