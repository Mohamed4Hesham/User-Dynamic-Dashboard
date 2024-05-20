// cache.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CacheService {
  private cache = new Map<string, any>();

  constructor() {}

  get(key: string): any {
    return this.cache.get(key);
  }

  set(key: string, value: any): void {
    this.cache.set(key, value);
  }

  has(key: string): boolean {
    return this.cache.has(key);
  }

  clear(): void {
    this.cache.clear();
  }
}
