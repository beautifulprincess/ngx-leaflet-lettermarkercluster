import { NgModule } from '@angular/core';

// Local Imports
import { LettermarkerclusterDemoComponent } from './lettermarkercluster-demo.component';
import { LeafletLetterMarkerClusterModule } from '../../../leaflet-lettermarkercluster/leaflet-lettermarkercluster.module';

import { LeafletModule } from '@asymmetrik/ngx-leaflet';


@NgModule({
	imports: [
		LeafletModule,
		LeafletLetterMarkerClusterModule
	],
	declarations: [
		LettermarkerclusterDemoComponent
	],
	exports: [
		LettermarkerclusterDemoComponent
	],
	bootstrap: [ LettermarkerclusterDemoComponent ],
	providers: [ ]
})
export class LettermarkerclusterDemoModule { }
