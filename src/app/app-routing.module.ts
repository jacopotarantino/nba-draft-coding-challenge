import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RostersComponent } from './rosters/rosters.component';
import { DraftComponent } from './draft/draft.component';

const routes: Routes = [
  { path: 'draft', component: DraftComponent },
  { path: 'rosters', component: RostersComponent },
  { path: '', redirectTo: '/draft', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
