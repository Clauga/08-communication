import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; 

import { AppComponent } from './app.component';
import { AppComponentComponent } from './app-component/app-component.component';
import { CreateOnomatopiaComponentComponent } from './create-onomatopia-component/create-onomatopia-component.component';

@NgModule({
  declarations: [
    AppComponent,
    AppComponentComponent,
    CreateOnomatopiaComponentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
