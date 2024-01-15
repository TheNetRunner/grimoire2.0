import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'rangeArray'
})
export class RangeArrayPipe implements PipeTransform {

  transform(stop: number = 1, start: number = 0, step: number = 1): number[] {
    const results = [];

    for (let i = start; i <= stop; i = i + step) {
        results.push(i);
    }

    return results;
  }

}
