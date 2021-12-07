import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MemberSearchComponent } from './member-search/member-search.component';
import { SearchResultsComponent } from './search-results/search-results.component';

const routes: Routes = [
  { path: '', component: MemberSearchComponent },
  { path: 'results', component: SearchResultsComponent },
  { path: 'search', component: MemberSearchComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
