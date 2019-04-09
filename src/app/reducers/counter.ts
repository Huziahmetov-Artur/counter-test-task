import { Action } from '@ngrx/store';
import { CounterActionTypes } from '../actions';

export interface CounterState {
	firstCount: number;
	secondCount: number;
}

export const initialState: CounterState = {
	firstCount: -5,
	secondCount: 10
};

export function reducer(state = initialState, action: Action): CounterState {
	switch (action.type) {
		case CounterActionTypes.Increment:
			return { ...state, firstCount: state.firstCount + 1 };
		case CounterActionTypes.Decrement:
			return { ...state, secondCount: state.secondCount - 1 };
		default:
			return state;
	}
}
