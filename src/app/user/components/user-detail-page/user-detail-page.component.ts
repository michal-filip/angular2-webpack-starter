import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import 'rxjs/add/operator/switchMap';

import { User } from '../../../shared/model/user';
import { UserService } from '../../services/user.service';

@Component({
    template: `
        <loader [loading]="!user">
            <user-detail [user]="user"></user-detail>
        </loader>
        <button md-button (click)="goBack()">Back</button>
    `
})
export class UserDetailPageComponent implements OnInit {
    public user: User;

    constructor(
        private router: Router,
        private route: ActivatedRoute,
        private userService: UserService
    ) {}

    public ngOnInit() {
        this.route.params
            .switchMap((params: Params) => this.userService.getUser(+params['id']))
            .subscribe((user: User) => this.user = user);
    }

    public goBack() {
        this.router.navigate(['..'], { relativeTo: this.route });
    }

}
