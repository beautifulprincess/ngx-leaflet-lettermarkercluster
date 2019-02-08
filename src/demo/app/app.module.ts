import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LettermarkerclusterDemoModule } from './leaflet-lettermarkercluster/lettermarkercluster-demo.module';


@NgModule({
	imports: [
		BrowserModule,
		LettermarkerclusterDemoModule
	],
	declarations: [
		AppComponent
	],
	bootstrap: [ AppComponent ],
	providers: [ ]
})
export class AppModule { }
