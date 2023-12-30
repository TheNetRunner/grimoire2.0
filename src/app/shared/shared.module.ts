import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { NgbTooltipModule } from "@ng-bootstrap/ng-bootstrap";
import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';

import { StringPluraliserPipe } from "./pipes/string-pluraliser.pipe";
import { StringAbbreviationerPipe } from "./pipes/string-abbreviationer.pipe";
import { RangeArrayPipe } from './pipes/range-array.pipe';
import { CharReplacementPipe } from './pipes/char-replacement.pipe';

@NgModule({
	declarations: [StringPluraliserPipe, StringAbbreviationerPipe, RangeArrayPipe, CharReplacementPipe],
	imports: [CommonModule, NgbModule, NgbTooltipModule, NgbCollapseModule],
	exports: [StringPluraliserPipe, StringAbbreviationerPipe, RangeArrayPipe, CharReplacementPipe, NgbModule, NgbTooltipModule, NgbCollapseModule],
})
export class SharedModule {}
