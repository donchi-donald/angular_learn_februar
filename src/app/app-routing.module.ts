import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './details/details.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full', data: []},
  {path: 'home', component: HomeComponent, title: 'Home page'},
  {path: 'details/:id',component: DetailsComponent,title: 'Home details'},
  {path: '**', redirectTo: 'home', pathMatch: 'full'}
  
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
    CommonModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
