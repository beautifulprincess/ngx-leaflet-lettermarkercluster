import { Directive, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChange } from '@angular/core';

import { LeafletDirective, LeafletDirectiveWrapper } from '@asymmetrik/ngx-leaflet';

import * as L from 'leaflet';
import 'leaflet.markercluster';

@Directive({
	selector: '[leafletLetterMarkerCluster]',
})
export class LeafletLettermarkerclusterDirective
implements OnChanges, OnInit {

	leafletDirective: LeafletDirectiveWrapper;
	letterMarkerClusterGroup: L.MarkerClusterGroup;

	// Hexbin data binding
	@Input('leafletLetterMarkerCluster') letterMarkerData: any[] = [];
	mMarkerDatas: L.Layer[] = [];

	// Options binding
	@Input('leafletLetterMarkerClusterOptions') markerClusterOptions: L.MarkerClusterGroupOptions;

	// Fired when the marker cluster is created
	@Output('leafletLetterMarkerClusterReady') markerClusterReady: EventEmitter<L.MarkerClusterGroup> = new EventEmitter<L.MarkerClusterGroup>();


	constructor(leafletDirective: LeafletDirective) {
		this.leafletDirective = new LeafletDirectiveWrapper(leafletDirective);
	}

	ngOnInit() {

		this.leafletDirective.init();

		const map = this.leafletDirective.getMap();
		this.letterMarkerClusterGroup = L.markerClusterGroup(this.markerClusterOptions);

		// Fire the ready event
		this.markerClusterReady.emit(this.letterMarkerClusterGroup);

		// Add the marker cluster group to the map
		this.letterMarkerClusterGroup.addTo(map);

		// Set the data
		this.makeMarkerData();
		this.setData(this.mMarkerDatas);

	}

	ngOnChanges(changes: { [key: string]: SimpleChange }) {

		// Set the new data
		if (changes['markerData']) {
			this.makeMarkerData();
			this.setData(this.letterMarkerData);
		}

	}

	private makeMarkerData() {

		for (const data of this.letterMarkerData) {
			const icon = L.icon({
				iconUrl: 'assets/markers/' + data[2] + '-thumb.jpg',
				iconSize: [ 60, 60 ]
			});
			this.mMarkerDatas.push(L.marker([ data[0], data[1] ], { icon }));
		}

	}

	private setData(layers: L.Layer[]) {

		if (null != this.letterMarkerClusterGroup) {
			this.letterMarkerClusterGroup.clearLayers();
			this.letterMarkerClusterGroup.addLayers(layers);
		}

	}

}
