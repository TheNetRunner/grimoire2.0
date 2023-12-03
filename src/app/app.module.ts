import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { ReactiveFormsModule } from "@angular/forms";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { MainNavbarComponent } from "./components/main-navbar/main-navbar.component";
import { InventoryModule } from "./gaming-tools/inventory/inventory.module";
import { SettingsNavbarComponent } from './components/settings-navbar/settings-navbar.component';

@NgModule({
	declarations: [AppComponent, MainNavbarComponent, SettingsNavbarComponent],
	imports: [
		BrowserModule,
		AppRoutingModule,
		NgbModule,
		ReactiveFormsModule,
		InventoryModule,
	],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {
}
