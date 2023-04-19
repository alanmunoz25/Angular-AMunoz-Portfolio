import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilityService {

  constructor() {
  }

  // tslint:disable-next-line:typedef
  sortLogic(a, b, field, type: string, direction: string) {
    if (type === 'string') {
      if (a[field].toLowerCase() < b[field].toLowerCase()) {
        return direction === 'asc' ? -1 : 1;
      } else if (a[field].toLowerCase() > b[field].toLowerCase()) {
        return direction === 'asc' ? 1 : -1;
      }
      return 0;
    } else {
      return direction === 'asc' ? a[field] - b[field] : b[field] - a[field];
    }
  }

  customSortA(field, type: string, direction: string) {
    let that = this;
    return function(a, b) {
      return that.sortLogic(a, b, field, type, direction);
    };
  }

  customSortB(a, b, field, type: string, direction: string) {
    return this.sortLogic(a, b, field, type, direction);
  }
}
