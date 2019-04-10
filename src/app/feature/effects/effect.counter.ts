import { Injectable } from '@angular/core';

import { Store } from '@ngrx/store';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';

import { CounterActionTypes, Decrement, Increment } from '../actions/counter.actions';
import { AppState } from '../reducers';

@Injectable()
export class CounterEffects {
	constructor(private actions: Actions, private store: Store<AppState>) {}

	@Effect()
	loadCategories$: Observable<any> = this.actions.pipe(
		ofType(CounterActionTypes.Change),
		switchMap(() => [ new Increment(), new Decrement(), new Decrement() ])
	);
}
