import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@angular/material';
import { SharedModule } from '../shared/shared.module';

import { UserDetailComponent } from './components/user-detail/user-detail.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { UserListPageComponent } from './components/user-list-page/user-list-page.component';
import { UserDetailPageComponent } from './components/user-detail-page/user-detail-page.component';
import { UserService } from './services/user.service';

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(UserModule.routes),
        SharedModule,
        MaterialModule
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
