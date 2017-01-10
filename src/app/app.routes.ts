import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders }  from '@angular/core';

import { SearchComponent } from "./search/search.component";
import { AboutComponent } from './about/about.component';
import { ArtistComponent } from "../app/artist/artist.component";
import { AlbumComponent } from "./album/album.component";



const appRoutes: Routes = [
    { path: '', component: SearchComponent },
    { path: 'about', component: AboutComponent },
    {path:'artist/:id',component:ArtistComponent},
    {path:'',component:AlbumComponent}
];

export const appRouterProviders = RouterModule.forRoot(appRoutes);
