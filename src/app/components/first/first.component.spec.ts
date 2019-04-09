import { async, ComponentFixture, TestBed, tick, fakeAsync } from '@angular/core/testing';

import { FirstComponent } from './first.component';
import { SecondComponent } from './../second/second.component';
import { Store, StoreModule } from '@ngrx/store';
import * as fromRoot from '../../reducers';
import * as counterActions from '../../actions';
import { By } from '@angular/platform-browser';
import { getFirstCount } from 'src/app/selectors';

describe('FirstComponent', () => {
	let component: FirstComponent;
	let fixture: ComponentFixture<FirstComponent>;
	let store: Store<fromRoot.AppState>;
	let compEl: HTMLElement;

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

	it('should display counter value', () => {
		expect(component.secondCount).toEqual(10);
	});

	it('should display counter value', () => {
		expect(component.firstCount).toEqual(-5);
	});

	it('should display counter value', () => {
		const action = new counterActions.Increment();
		store.dispatch(action);
		component.testSub.subscribe((value) => {
			expect(value).toEqual(-4);
		});
	});

	it('First component should create', () => {
		expect(component).toBeTruthy();
	});
});
