import { Routes } from '@angular/router';
import { GitsearchComponent } from './components/gitsearch/gitsearch.component';
import { WeatherDisplayComponent } from './components/weather-display/weather-display.component';
import { LoginComponent } from './components/login/login.component';
import { RepoTableComponent } from './components/repocomponent/repo/repo.component';
import { DisplaypostComponent } from './components/displaypost/displaypost.component';

export const routes: Routes = [
     {
        path:'repo',
        component:RepoTableComponent
    },
    {
        path:'displaypost',
        component:DisplaypostComponent
    },
    {
        path:'git-search',
        component:GitsearchComponent
    }
   ,
    {
        path:'',
        component:WeatherDisplayComponent
    }
   ,
    {
        path:'weather',
        component:WeatherDisplayComponent
    }
   ,
    {
        path:'login',
        component:LoginComponent
    }
  


];
