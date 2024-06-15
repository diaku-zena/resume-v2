// src/app/services/window.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WindowService {
  get windowRef(): Window | null {
    return typeof window !== 'undefined' ? window : null;
  }
}
