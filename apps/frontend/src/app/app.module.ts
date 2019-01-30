import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { NxModule } from '@nrwl/nx';

import { SharedModule } from '@zemoga/shared';
import { AppComponent } from './app.component';
import { routes } from './app.routing';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserAnimationsModule,
    NxModule.forRoot(),
    RouterModule.forRoot(routes, { initialNavigation: 'enabled' }),
    SharedModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
