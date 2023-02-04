import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { UserDetailComponent } from './users/users/user-detail/user-detail.component'
import { UsersComponent } from './users/users/users.component'

@NgModule({
  declarations: [AppComponent, UserDetailComponent, UsersComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
