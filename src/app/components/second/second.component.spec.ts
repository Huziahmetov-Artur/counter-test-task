import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { SecondComponent } from './second.component';

describe('SecondComponent', () => {
	let component: SecondComponent;
	let fixture: ComponentFixture<SecondComponent>;

	beforeEach(
		async(() => {
			TestBed.configureTestingModule({
				declarations: [ SecondComponent ]
			}).compileComponents();
		})
	);

	beforeEach(() => {
		fixture = TestBed.createComponent(SecondComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('Second component should create', () => {
		expect(component).toBeTruthy();
	});
});
