import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchService } from './services/search.service';
import { SearchComponent } from './search/search.component';

const routes: Routes = [
  {path: '', component: SearchComponent},
  {path: '**', redirectTo: '/'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
