import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GitsearchService {
  private baseUrl = 'https://api.github.com';

  constructor(private http: HttpClient) {}

    searchRepositories(query: string, language?: string, user?: string, page: number = 1): Observable<any> {
      let searchQuery = `q=${query}`;
      if (language) searchQuery += `+language:${language}`;
      if (user) searchQuery += `+user:${user}`;
      console.log(`${this.baseUrl}/search/repositories?${searchQuery}&page=${page}`);
      
      return this.http.get(`${this.baseUrl}/search/repositories?${searchQuery}&page=${page}`);
    }
  
    getRepository(owner: string, repo: string): Observable<any> {
      return this.http.get(`${this.baseUrl}/repos/${owner}/${repo}`);
    }
   }

