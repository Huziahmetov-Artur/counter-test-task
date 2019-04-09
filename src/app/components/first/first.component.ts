import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable, Subscription, interval } from 'rxjs';

import { AppState } from './../../reducers';
import { getFirstCount, getSecondCount } from 'src/app/selectors';
import { Change } from './../../actions';
import { BaseClass } from 'src/app/base-class';

@Component({
	selector: 'app-first',
	templateUrl: './first.component.html',
	styleUrls: [ './first.component.scss' ]
})
export class FirstComponent extends BaseClass implements OnInit {
	public firstCount: number;
	public secondCount: number;
	private subToStream: Subscription;
	constructor(private store: Store<AppState>) {
		super();
	}

	ngOnInit() {
		this.sub = this.store.pipe(select(getFirstCount)).subscribe((count: number) => (this.firstCount = count));
		this.sub = this.store.pipe(select(getSecondCount)).subscribe((count: number) => (this.secondCount = count));

		console.log(this.firstCount);
	}

	public start(): void {
		this.subToStream = interval(1000).subscribe(() => {
			this.store.dispatch(new Change());
		});
	}

	public stop(): void {
		this.subToStream.unsubscribe();
	}
}
