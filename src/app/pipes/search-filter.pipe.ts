import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchFilter',
})
export class SearchFilterPipe implements PipeTransform {
  transform(array: any[], text: string = '', column: string = 'title'): any[] {
    if (text === '') {
      return array;
    }

    if (!array) {
      return array;
    }

    text = text.toLowerCase();

    return array.filter((item) => item[column].toLowerCase().includes(text));
  }
}
