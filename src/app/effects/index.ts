import { Injectable } from '@angular/core';

import { Store } from '@ngrx/store';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { mergeMap } from 'rxjs/operators';
import { Observable } from 'rxjs';

import { CounterActionTypes, Decrement, Increment } from '../actions';
import { AppState } from './../reducers';

@Injectable()
export class CounterEffects {
	constructor(private actions: Actions, private store: Store<AppState>) {}

	@Effect()
	loadCategories$: Observable<any> = this.actions.pipe(
		ofType(CounterActionTypes.Change),
		mergeMap(() => {
			this.store.dispatch(new Decrement()),
				this.store.dispatch(new Decrement()),
				this.store.dispatch(new Increment());
			return [];
		})
	);
}
