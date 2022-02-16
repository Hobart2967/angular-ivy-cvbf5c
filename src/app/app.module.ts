import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { ParentComponentComponent } from '../parent-component/parent-component.component';
import { RouterModule } from '@angular/router';
import { DefaultChildComponent } from '../default-child/default-child.component';
import { SecondChildComponent } from '../second-child/second-child.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,

    RouterModule.forRoot([
      {
        path: '',
        component: ParentComponentComponent,
        children: [
          {
            path: '',
            component: DefaultChildComponent,
            outlet: 'child-outlet',
          },
          {
            path: ':id',
            component: SecondChildComponent,
            outlet: 'child-outlet',
          },
        ],
      },
    ]),
  ],
  declarations: [
    AppComponent,
    HelloComponent,
    ParentComponentComponent,
    DefaultChildComponent,
    SecondChildComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
