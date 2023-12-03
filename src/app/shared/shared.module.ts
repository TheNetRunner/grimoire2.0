import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { StringPluraliserPipe } from "./pipes/string-pluraliser.pipe";
import { StringAbbreviationerPipe } from "./pipes/string-abbreviationer.pipe";

@NgModule({
	declarations: [StringPluraliserPipe, StringAbbreviationerPipe],
	imports: [CommonModule],
	exports: [StringPluraliserPipe, StringAbbreviationerPipe],
})
export class SharedModule {}
