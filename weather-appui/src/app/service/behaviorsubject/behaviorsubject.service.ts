import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BehaviorsubjectService {

  constructor() { }

  private selectedItemSource = new BehaviorSubject<any>(null); // Initialize with null or default value
  selectedItem$ = this.selectedItemSource.asObservable();

  setSelectedItem(repoowner: string,reponame:string): void {

    this.selectedItemSource.next({repoowner,reponame});
  }
}
