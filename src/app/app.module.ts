import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponent } from './components/first/first.component';
import { SecondComponent } from './components/second/second.component';
import { StoreModule } from '@ngrx/store';
import { reducers } from './reducers';

const componets = [ FirstComponent, SecondComponent ];
@NgModule({
	declarations: [ AppComponent, ...componets ],
	imports: [ BrowserModule, AppRoutingModule, StoreModule.forRoot(reducers) ],
	providers: [],
	bootstrap: [ AppComponent ]
})
export class AppModule {}
