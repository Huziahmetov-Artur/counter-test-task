import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
	selector: 'app-second',
	templateUrl: './second.component.html',
	styleUrls: [ './second.component.scss' ],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class SecondComponent implements OnInit {
	@Input() firstCount: number;
	@Input() secondCount: number;
	constructor() {}

	ngOnInit() {}
}
