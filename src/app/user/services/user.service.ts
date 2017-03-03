import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { User } from '../../shared/model/user';
import 'rxjs/add/operator/delay';

@Injectable()
export class UserService {

    private dummy: User[] = [
        {
            id: 1,
            firstname: 'John',
            lastname: 'Doe'
        },
        {
            id: 2,
            firstname: 'Jane',
            lastname: 'Doe'
        }
    ];

    constructor() {
        this.dummy.forEach((u) => Object.setPrototypeOf(u, User.prototype));
    }

    public getUsers(): Observable<User[]> {
        return Observable.of(this.dummy).delay(500);
    }

    public getUser(id: number): Observable<User> {
        let user: User = this.dummy.find((u) => u.id === id);
        return user ? Observable.of(user).delay(500) : Observable.throw(null);
    }

}
