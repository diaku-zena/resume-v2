import { Inject, Injectable, InjectionToken } from '@angular/core';

// export const BROWSER_STORAGE = new InjectionToken<Storage>('Browser Storage', {
//   providedIn: 'root',
//   factory: () => localStorage
// });

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  private readonly welcomeKey = 'welcome';
  private isLocalStorageAvailable = typeof localStorage !== 'undefined';

  constructor() { }

  setWelcomeWD(data: any) {
    if (this.isLocalStorageAvailable)
      localStorage.setItem(this.welcomeKey, JSON.stringify(data));
  }

  getWelcomeWD() {
    if (this.isLocalStorageAvailable) {
      const data = localStorage.getItem(this.welcomeKey);
      return data ? JSON.parse(data) : null;
    }
  }
  
  clearStorage() {
    if (this.isLocalStorageAvailable) {
      localStorage.removeItem(this.welcomeKey);
    }
  }
}
