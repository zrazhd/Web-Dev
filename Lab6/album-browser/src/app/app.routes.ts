import { Routes } from '@angular/router';

import { HomeComponent } from './components/home/home';
import { AboutComponent } from './components/about/about';
import { AlbumsComponent } from './components/albums/albums';
import { AlbumDetailComponent } from './components/album-detail/album-detail';
import { AlbumPhotosComponent } from './components/album-photos/album-photos';
import { AlbumCreateComponent } from './components/album-create/album-create';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },

  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },

  { path: 'albums', component: AlbumsComponent },
  { path: 'albums/new', component: AlbumCreateComponent },
  { path: 'albums/:id', component: AlbumDetailComponent },
  { path: 'albums/:id/photos', component: AlbumPhotosComponent },

  { path: '**', redirectTo: 'home' },
];