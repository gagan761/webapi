import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BehaviorsubjectService } from '../behaviorsubject/behaviorsubject.service';

@Injectable({
  providedIn: 'root'
})
export class RepoService {

  // private apiUrl = 'https://api.github.com/repos/ysymyth/react';
  private apiUrl='';
  private baseUrl = 'https://api.github.com';

  constructor(private http: HttpClient,private dataService:BehaviorsubjectService) { }

 

  getRepoData(): Observable<any> {
    this.dataService.selectedItem$.subscribe(data => {
      if (data) {
        
       this.apiUrl= `${this.baseUrl}/repos/${data.repoowner}/${data.reponame}`
      }
    });
    return this.http.get<any>(this.apiUrl);
  }
}
