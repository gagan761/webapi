import { Component, NgModule, OnInit } from '@angular/core';
import { RepoService } from '../../../service/reposervice/repo.service';
import { CommonModule, JsonPipe, NgClass } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-repo',
  standalone:true,
  templateUrl: './repo.component.html',
  imports:[JsonPipe,NgClass,CommonModule,RouterModule],
 
  styleUrls: ['./repo.component.css']
})
export class RepoTableComponent implements OnInit {

  repoData: any;
  avatarUrl: string | undefined;
  objectKeys = Object.keys;
  gitUrl:string|undefined;

  constructor(private repoService: RepoService) { }

  ngOnInit(): void {
    this.repoService.getRepoData().subscribe(data => {
      this.repoData = data;
      this.avatarUrl=this.repoData.owner?.avatar_url
      this.gitUrl=data.html_url;
      console.log(this.gitUrl);
      

    });
  
    
  }

  isObject(val: any): boolean {
    return val !== null && typeof val === 'object';
  }
}
