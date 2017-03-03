import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { UserDetailComponent } from './components/user-detail/user-detail.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { UserService } from './services/user.service';
import { UserListPageComponent } from './components/user-list-page/user-list-page.component';
import { UserDetailPageComponent } from './components/user-detail-page/user-detail-page.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(UserModule.routes),
        SharedModule
    ],
    exports: [],
    declarations: [
        UserListComponent,
        UserDetailComponent,
        UserListPageComponent,
        UserDetailPageComponent
    ],
    providers: [
        UserService
    ],
})
export class UserModule {
    public static routes = [
        {
            path: '', children: [
                { path: '', component: UserListPageComponent },
                { path: ':id', component: UserDetailPageComponent }
            ]
        }
    ];
}
