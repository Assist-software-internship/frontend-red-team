import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {
  // transform(items: any[], searchText: string): any[] {
  //   if (!items) return [];
  //   if (!searchText) return items;
  //   searchText = searchText.toLowerCase();
  //   return items.filter(it => {
  //     return it.toLowerCase().includes(searchText);
  //   });
  // }

  transform(value: any, filterString: string, propName: string): any {
    if (value.length === 0 || filterString === '') {
      return value;
    }
    const resultArray = [];
    for (const item of value) {
      if (item[propName].toLowerCase() === filterString.toLowerCase()) {
        resultArray.push(item);
      }
    }
    return resultArray;
  }

}
