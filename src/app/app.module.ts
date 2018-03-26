import { BrowserModule } from '@angular/platform-browser'; //imports built- directives
import { NgModule } from '@angular/core'; //general module code for Angular's framework core


import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component'; //root component

//module decorator
@NgModule({
  declarations: [
    //components added via CLI will populate here...
    AppComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
