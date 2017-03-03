import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoaderComponent } from './components/loader/loader.component';

@NgModule({
    imports: [
        CommonModule
    ],
    exports: [
        LoaderComponent
    ],
    declarations: [
        LoaderComponent
    ],
    providers: []
})
export class SharedModule {
    public static forRoot(): ModuleWithProviders {
        return {
            ngModule: SharedModule,
            providers: [
            ]
        };
    }
}
