import { Component, OnInit } from '@angular/core';

import * as L from 'leaflet';
import 'leaflet.markercluster';

@Component({
	selector: 'lettermarkercluster-demo',
	templateUrl: './lettermarkercluster-demo.component.html'
})
export class LettermarkerclusterDemoComponent
	implements OnInit {

	// Open Street Map Definition
	LAYER_OSM = {
		id: 'openstreetmap',
		name: 'Open Street Map',
		enabled: false,
		layer: L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
			maxZoom: 18,
			attribution: 'Open Street Map'
		})
	};

	// Values to bind to Leaflet Directive
	layersControlOptions = { position: 'bottomright' };
	baseLayers = {
		'Open Street Map': this.LAYER_OSM.layer
	};
	options = {
		zoom: 3,
		center: L.latLng([ 46.879966, -121.726909 ])
	};

	// Marker cluster stuff
	letterMarkerClusterGroup: L.MarkerClusterGroup;
	letterMarkerClusterData: any[] = [];
	letterMarkerClusterOptions: L.MarkerClusterGroupOptions;

	// Generators for lat/lon values
	generateLat() { return Math.random() * 360 - 180; }
	generateLon() { return Math.random() * 180 - 90; }


	ngOnInit() {

		this.generateData();

	}

	letterMarkerClusterReady(group: L.MarkerClusterGroup) {

		this.letterMarkerClusterGroup = group;

	}

	generateData() {

		const data: any[] = [];
		const labels = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

		for (let i = 0; i < 10000; i++) {
			data.push([this.generateLon(), this.generateLat(), labels[i % 26]]);
		}

		this.letterMarkerClusterData = data;

	}

}
