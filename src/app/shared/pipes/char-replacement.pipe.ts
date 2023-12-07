import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'charReplacement'
})
export class CharReplacementPipe implements PipeTransform {

  transform(string: string, x: string, y: string): string {
    return string.replace(x, y);
  }

}
