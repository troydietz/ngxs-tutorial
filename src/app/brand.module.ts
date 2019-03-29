import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgxsModule } from '@ngxs/store';
import { BrandState } from './state-join-test/brand.state';

@NgModule({
    declarations: [
    ],
    imports: [
        BrowserModule,
        NgxsModule.forFeature([
            BrandState,
        ]),
    ],
    providers: [],
    bootstrap: []
})
export class BrandModule {
}

