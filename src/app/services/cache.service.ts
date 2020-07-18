import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CacheService {

  cache = {};

  constructor() { }

  addItemToCache(itemKey: string, itemValue: any): void {
    this.cache[itemKey] = itemValue;
  }

  getItemToCache(itemKey: string): any {
    return (itemKey in this.cache) ? this.cache[itemKey] : null;
  }

  clear(): void {
    this.cache = {};
  }

}
