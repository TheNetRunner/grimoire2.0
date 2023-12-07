import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { ReactiveFormsModule } from "@angular/forms";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { MainNavbarComponent } from "./components/main-navbar/main-navbar.component";
import { InventoryModule } from "./gaming-tools/inventory/inventory.module";
import { SettingsNavbarComponent } from './components/settings-navbar/settings-navbar.component';
import { Sr5eModule } from "./sr5e/sr5e.module";

@NgModule({
	declarations: [AppComponent, MainNavbarComponent, SettingsNavbarComponent],
	imports: [
		BrowserModule,
		AppRoutingModule,
		NgbModule,
		ReactiveFormsModule,
		InventoryModule,
        Sr5eModule
	],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {
}
