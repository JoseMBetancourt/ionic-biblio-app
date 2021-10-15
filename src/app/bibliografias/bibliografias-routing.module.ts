import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BibliografiasPage } from './bibliografias.page';

const routes: Routes = [
  {
    path: '',
    component: BibliografiasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BibliografiasPageRoutingModule {}
