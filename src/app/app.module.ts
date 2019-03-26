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

const appRoutes: Routes = [
  { path: 'test', component: TestComponent },
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
    path: '',
    pathMatch: 'full',
    redirectTo: 'state-join'
  }
];

@NgModule({
  declarations: [
    AppComponent,
    ReadComponent,
    CreateComponent,
    TestComponent,
    OtherTestComponent,
    StateJoinTestComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    NgxsModule.forRoot([
      TutorialState
    ]),
    NgxsReduxDevtoolsPluginModule.forRoot(),
    NgxsLoggerPluginModule.forRoot(),
    MatInputModule,
    BrowserAnimationsModule
  ],
  providers: [TutorialResolverService],
  bootstrap: [AppComponent]
})
export class AppModule { }

