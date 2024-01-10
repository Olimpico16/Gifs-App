import { Component, Input} from '@angular/core';
import { Gif } from '../../interfaces/gifs.interfaces';

@Component({
  selector: 'gifs-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.scss']
})
export class CardListComponent {

  public indice: number | undefined = undefined ;
  public active:boolean = false;

  @Input()
  public gifs:Gif[] = [];

  showModal = false;
  modalImageUrl!: string;

  openImageModal(imageUrl: string) {
    this.modalImageUrl = imageUrl;
    this.showModal = true;
  }

  closeImageModal() {
    this.showModal = false;
  }

  focus(index?:number){
    this.active = index !== undefined;
    this.indice = index;
  }

}


