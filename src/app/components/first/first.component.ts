import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

import { AppState } from './../../reducers';
import { getFirstCount, getSecondCount } from 'src/app/selectors';

@Component({
	selector: 'app-first',
	templateUrl: './first.component.html',
	styleUrls: [ './first.component.sass' ]
})
export class FirstComponent implements OnInit {
	public firstCount: Observable<number>;
	public secondCount: Observable<number>;
	constructor(private store: Store<AppState>) {}

	ngOnInit() {
		this.firstCount = this.store.pipe(select(getFirstCount));
		this.secondCount = this.store.pipe(select(getSecondCount));
	}
}
