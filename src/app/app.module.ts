import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgxsModule } from '@ngxs/store';
import { TutorialState } from './state/tutorial.state';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { NgxsLoggerPluginModule } from '@ngxs/logger-plugin';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';

import { AppComponent } from './app.component';
import { ReadComponent } from './read/read.component';
import { CreateComponent } from './create/create.component';
import { TestComponent } from './test/test.component';
import { OtherTestComponent } from './other-test/other-test.component';
import { TutorialResolverService } from './tutorial-resolver.service';
import { StateJoinTestComponent } from './state-join-test/state-join-test.component';
import { AccountState } from './state-join-test/account.state';
import { BrandModule } from './brand.module';
import { TemplateDrivenComponent } from './forms/template-driven/template-driven.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material';
import { ReactiveComponent } from './forms/reactive/reactive/reactive.component';
import { NameEditorComponent } from './forms/reactive/name-editor/name-editor.component';
import { ProfileEditorComponent } from './forms/reactive/profile-editor/profile-editor.component';
import { NestedComponent } from './forms/nested/nested/nested.component';
import { CvaComponent } from './forms/nested/cva/cva.component';
import { SimpleNestingComponent } from './forms/nested/simple-nesting/simple-nesting.component';

const appRoutes: Routes = [
    {path: 'test', component: TestComponent},
    {
        path: 'test2',
        component: OtherTestComponent,
        resolve: {
            foo: TutorialResolverService
        }
    },
    {
        path: 'state-join',
        component: StateJoinTestComponent
    },
    {
        path: 'forms-reactive',
        component: ReactiveComponent,
    },
    {
        path: 'forms-template-driven',
        component: TemplateDrivenComponent,
    },
    {
        path: 'forms-nested',
        component: NestedComponent
    },
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'forms-nested'
    }
];

@NgModule({
    declarations: [
        AppComponent,
        ReadComponent,
        CreateComponent,
        TestComponent,
        OtherTestComponent,
        StateJoinTestComponent,
        TemplateDrivenComponent,
        ReactiveComponent,
        NameEditorComponent,
        ProfileEditorComponent,
        NestedComponent,
        CvaComponent,
        SimpleNestingComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        RouterModule.forRoot(
            appRoutes,
            {enableTracing: false} // <-- debugging purposes only
        ),
        NgxsModule.forRoot([
            AccountState,
            TutorialState,
        ]),
        NgxsReduxDevtoolsPluginModule.forRoot(),
        NgxsLoggerPluginModule.forRoot(),
        MatInputModule,
        MatSelectModule,
        BrowserAnimationsModule,
        BrandModule,
        ReactiveFormsModule
    ],
    providers: [TutorialResolverService],
    bootstrap: [AppComponent]
})
export class AppModule {
}

