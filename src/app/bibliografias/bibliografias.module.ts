import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BibliografiasPageRoutingModule } from './bibliografias-routing.module';

import { BibliografiasPage } from './bibliografias.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BibliografiasPageRoutingModule
  ],
  declarations: [BibliografiasPage]
})
export class BibliografiasPageModule {}
