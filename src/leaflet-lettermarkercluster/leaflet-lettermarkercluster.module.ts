import { ModuleWithProviders, NgModule } from '@angular/core';

import { LeafletLettermarkerclusterDirective } from './leaflet-lettermarkercluster.directive';

@NgModule({
	exports: [ LeafletLettermarkerclusterDirective ],
	declarations: [ LeafletLettermarkerclusterDirective ]
})
export class LeafletLetterMarkerClusterModule {

	static forRoot(): ModuleWithProviders {
		return { ngModule: LeafletLetterMarkerClusterModule, providers: [] };
	}

}
