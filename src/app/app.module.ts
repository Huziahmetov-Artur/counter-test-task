import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponent } from './components/first/first.component';
import { SecondComponent } from './components/second/second.component';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { reducers } from './reducers';
import { EffectsModule } from '@ngrx/effects';
import { CounterEffects } from './effects';

const componets = [ FirstComponent, SecondComponent ];
@NgModule({
	declarations: [ AppComponent, ...componets ],
	imports: [
		BrowserModule,
		AppRoutingModule,
		StoreModule.forRoot(reducers),
		EffectsModule.forRoot([ CounterEffects ]),
		StoreDevtoolsModule.instrument({
			maxAge: 5
		})
	],
	providers: [],
	bootstrap: [ AppComponent ]
})
export class AppModule {}
