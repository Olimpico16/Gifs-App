import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsService } from '../../../gifs/services/gifs.service';

@Component({
  selector: 'shared-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {

  @ViewChild('btnTag')
  public tag!:ElementRef<HTMLButtonElement>

  constructor( private GifsService:GifsService ){ }

  get tags():string[]{
   return this.GifsService.tagsHistory
  }

  searchTag(tag:string):void{
    this.GifsService.searchTag(tag);
  }

  removeTag(tag: string) {
    this.GifsService.removeTag(tag);
  }
}
