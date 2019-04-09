import { ActionReducerMap } from '@ngrx/store';
import * as fromCounter from './counter';

export interface AppState {
	counter: fromCounter.CounterState;
}

export const reducers: ActionReducerMap<AppState> = {
	counter: fromCounter.reducer
};
