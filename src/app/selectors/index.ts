import { AppState } from '../reducers';
import { createSelector } from '@ngrx/store';

export const selectCounterState = (state: AppState) => state.counter;
export const getFirstCount = createSelector(selectCounterState, (counter) => counter.firstCount);
export const getSecondCount = createSelector(selectCounterState, (counter) => counter.secondCount);
