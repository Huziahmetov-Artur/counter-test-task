import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstComponent } from './first.component';
import { SecondComponent } from './../second/second.component';
import { Store, StoreModule } from '@ngrx/store';
import * as fromRoot from '../../feature/reducers';
import * as counterActions from '../../feature/actions/counter.actions';

describe('FirstComponent', () => {
	let component: FirstComponent;
	let fixture: ComponentFixture<FirstComponent>;
	let store: Store<fromRoot.AppState>;

	beforeEach(
		async(() => {
			TestBed.configureTestingModule({
				imports: [ StoreModule.forRoot(fromRoot.reducers) ],
				declarations: [ FirstComponent, SecondComponent ]
			}).compileComponents();

			store = TestBed.get(Store);
			spyOn(store, 'dispatch').and.callThrough();
		})
	);

	beforeEach(() => {
		fixture = TestBed.createComponent(FirstComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('first value after increment action must be -4', () => {
		const action = new counterActions.Increment();
		store.dispatch(action);
		component.firstCount.subscribe((value) => {
			expect(value).toEqual(-4);
		});
	});

	it('First component should create', () => {
		expect(component).toBeTruthy();
	});
});
