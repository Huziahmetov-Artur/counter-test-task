import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponent } from './components/first/first.component';
import { SecondComponent } from './components/second/second.component';
import { reducers } from './feature/reducers';
import { CounterEffects } from './feature/effects/effect.counter';

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
