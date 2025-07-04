import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { adminGuard, authGuard, antiAuthGuard } from './_guards/auth.guard';

import { AuthComponent } from './auth/auth.component';
import { ExploreComponent } from './explore/explore.component';
import { ProfileComponent } from './profile/profile.component';
import { BoardUserComponent } from './board-user/board-user.component';
import { BoardAdminComponent } from './board-admin/board-admin.component';
import { HomepageComponent } from './homepage/homepage.component';
import { DocumentsComponent } from './documents/documents.component';

const routes: Routes = [
  { path: 'home', component: HomepageComponent },
  { path: 'explore', component: ExploreComponent },
  { path: 'auth', component: AuthComponent, canActivate:[antiAuthGuard]},
  { path: 'profile', component: ProfileComponent, canActivate:[authGuard]},
  { path: 'conversations', component: BoardUserComponent, canActivate:[authGuard]},
  { path: 'conversation/:id', component: BoardUserComponent, canActivate:[authGuard] },
  { path: 'documents', component: DocumentsComponent, canActivate:[authGuard] },
  { path: 'document/:id', component: DocumentsComponent, canActivate:[authGuard] },
  { path: 'admin', component: BoardAdminComponent, canActivate:[authGuard, adminGuard]},
  { path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
