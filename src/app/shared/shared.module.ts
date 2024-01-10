import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { ModalComponent } from './components/modal/modal.component';
import { LazyImageComponent } from './components/lazy-image/lazy-image.component';



@NgModule({
  declarations: [
    SidebarComponent,
    ModalComponent,
    LazyImageComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    SidebarComponent,
    ModalComponent,
    LazyImageComponent
  ]
})
export class SharedModule { }
