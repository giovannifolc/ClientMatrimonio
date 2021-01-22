import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {InfoComponent} from './info/info.component';
import {ListaNozzeComponent} from './lista-nozze/lista-nozze.component';
import {GrazieComponent} from './grazie/grazie.component';
import {ProdottiComponent} from './lista-nozze/prodotti/prodotti.component';
import {ViaggioComponent} from './lista-nozze/viaggio/viaggio.component';

const routes: Routes = [
  {
    path: '', component: HomeComponent
  },
  {
    path: 'info', component: InfoComponent
  },
  {
    path: 'listanozze',
    children: [
      {
        path: '',
        component: ListaNozzeComponent
      },
      {
        path: 'lista',
        component: ProdottiComponent
      },
      {
        path: 'viaggio',
        component: ViaggioComponent
      }]
  },
  {
    path: 'grazie', component: GrazieComponent
  },
  {path: '**', redirectTo: '/'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: false })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
