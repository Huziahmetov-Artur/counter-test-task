import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Subscription, interval, Observable } from 'rxjs';

import { AppState } from '../../feature/reducers';

import { BaseClass } from 'src/app/base-class';
import { getFirstCount, getSecondCount } from 'src/app/feature/selectors/selector.counter';
import { Change } from 'src/app/feature/actions/counter.actions';

@Component({
	selector: 'app-first',
	templateUrl: './first.component.html',
	styleUrls: [ './first.component.scss' ]
})
export class FirstComponent extends BaseClass implements OnInit {
	public firstCount: Observable<number>;
	public secondCount: Observable<number>;
	private subToStream: Subscription;

	constructor(private store: Store<AppState>) {
		super();
	}

	ngOnInit() {
		this.firstCount = this.store.pipe(select(getFirstCount));
		this.secondCount = this.store.pipe(select(getSecondCount));
	}

	test(firstCount) {
		console.log(firstCount);
	}

	public start(): void {
		if (this.subToStream) {
			return;
		}
		this.sub = this.subToStream = interval(1000).subscribe(() => {
			this.store.dispatch(new Change());
		});
	}

	public stop(): void {
		this.subToStream.unsubscribe();
		this.subToStream = null;
	}
}
