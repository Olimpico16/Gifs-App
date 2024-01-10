import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';

// import { ImageModule } from 'primeng/image';

import { HomePageComponent } from './pages/home/home-page.component';
import { SearchBoxComponent } from './components/search-box/search-box.component';
import { CardListComponent } from './components/card-list/card-list.component';



@NgModule({
  declarations: [
    HomePageComponent,
    SearchBoxComponent,
    CardListComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    // ImageModule
  ],
  exports:[
    HomePageComponent
  ]
})


export class GifsModule { }
