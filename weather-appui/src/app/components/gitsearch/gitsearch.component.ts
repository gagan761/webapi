import { Component, OnInit, ViewChild } from '@angular/core';
import { GitsearchService } from '../../service/gitapp/gitsearch.service';
import { Router, RouterLink } from '@angular/router';
import { MatPaginator } from '@angular/material/paginator';
import { FormsModule, NgModel } from '@angular/forms';
import { CommonModule, NgClass } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { BehaviorsubjectService } from '../../service/behaviorsubject/behaviorsubject.service';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-gitsearch',
  standalone: true,
  imports: [RouterLink,MatPaginator,FormsModule,MatTableModule,CommonModule,MatSort],
  templateUrl: './gitsearch.component.html',
  styleUrl: './gitsearch.component.css'
})
export class GitsearchComponent implements OnInit {

  repositories: any[] = [];
  searchText: string = '';
  language: string = '';
  user: string = '';
  currentPage: number = 1;
  totalResults: number = 0;
  repoOwner:string='';
  repositoryName:string='';
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private gitHubService: GitsearchService,private router: Router, private dataService: BehaviorsubjectService) {}

  ngOnInit(): void {
    this.searchRepositories();
  }

  searchRepositories(): void {
    this.gitHubService.searchRepositories(this.searchText, this.language, this.user, this.currentPage).subscribe(data => {
      this.repositories = data.items;
      this.totalResults = data.total_count;
    });
  }
 
  getRepositories(repoowner:string,reponame:string): void {
    // this.gitHubService.getRepository(repoowner, reponame).subscribe(data => {
    //   this.repositories = data.items;
    //   this.totalResults = data.total_count;
    // });
   
    
    this.router.navigateByUrl('/repo');
    this.dataService.setSelectedItem(repoowner,reponame);

  }

  onPageChange(page: number): void {
    this.currentPage = page;
    this.searchRepositories();
  }
}
