import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { Store, StoreModule } from '@ngrx/store';
import * as fromRoot from './feature/reducers';
import { FirstComponent } from './components/first/first.component';
import { SecondComponent } from './components/second/second.component';

describe('AppComponent', () => {
	let component: AppComponent;
	let fixture: ComponentFixture<AppComponent>;
	let store: Store<fromRoot.AppState>;

	beforeEach(
		async(() => {
			TestBed.configureTestingModule({
				imports: [ StoreModule.forRoot(fromRoot.reducers) ],
				declarations: [ AppComponent, FirstComponent, SecondComponent ]
			}).compileComponents();
		})
	);

	it('should create the app', () => {
		const fixture = TestBed.createComponent(AppComponent);
		const app = fixture.debugElement.componentInstance;
		expect(app).toBeTruthy();
	});
});
