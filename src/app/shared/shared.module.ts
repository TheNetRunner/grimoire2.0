import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { StringPluraliserPipe } from "./pipes/string-pluraliser.pipe";
import { StringAbbreviationerPipe } from "./pipes/string-abbreviationer.pipe";
import { RangeArrayPipe } from './pipes/range-array.pipe';
import { CharReplacementPipe } from './pipes/char-replacement.pipe';

@NgModule({
	declarations: [StringPluraliserPipe, StringAbbreviationerPipe, RangeArrayPipe, CharReplacementPipe],
	imports: [CommonModule],
	exports: [StringPluraliserPipe, StringAbbreviationerPipe, RangeArrayPipe, CharReplacementPipe],
})
export class SharedModule {}
