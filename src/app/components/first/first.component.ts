import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable, Subscription, interval } from 'rxjs';

import { AppState } from './../../reducers';
import { getFirstCount, getSecondCount } from 'src/app/selectors';
import { Change } from './../../actions';

@Component({
	selector: 'app-first',
	templateUrl: './first.component.html',
	styleUrls: [ './first.component.sass' ]
})
export class FirstComponent implements OnInit {
	public firstCount: Observable<number>;
	public secondCount: Observable<number>;
	private sub: Subscription;
	constructor(private store: Store<AppState>) {}

	ngOnInit() {
		this.firstCount = this.store.pipe(select(getFirstCount));
		this.secondCount = this.store.pipe(select(getSecondCount));

		console.log(this.firstCount);
	}

	public start(): void {
		this.sub = interval(1000).subscribe(() => {
			this.store.dispatch(new Change());
		});
	}

	public stop(): void {
		this.sub.unsubscribe();
	}
}
