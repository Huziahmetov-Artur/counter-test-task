import { OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

export class BaseClass implements OnDestroy {
	private subscription: Set<Subscription> = new Set();
	constructor() {}

	public set sub(subscription: Subscription) {
		this.subscribe(subscription);
	}

	public ngOnDestroy(): void {
		this.subscription.forEach((data) => data && data.unsubscribe && data.unsubscribe());
		this.subscription.clear();
	}

	public subscribe(sub: Subscription): void {
		this.subscription.add(sub);
	}
}
