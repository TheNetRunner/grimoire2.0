import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { ReactiveFormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { InventoryModule } from "./gaming-tools/inventory/inventory.module";
import { Sr5Module } from "./sr5/sr5.module";

import { MainNavbarComponent } from './components/main-navbar/main-navbar.component';



@NgModule({
	declarations: [AppComponent, MainNavbarComponent],
	imports: [
		BrowserModule,
        BrowserAnimationsModule,
        NgbModule,
		AppRoutingModule,
		ReactiveFormsModule,
		InventoryModule,
        Sr5Module,
	],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {
}
