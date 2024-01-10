import { Component, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'shared-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent {

  @Input()
  imageUrl!: string;
  @Output()
  closeModal = new EventEmitter<void>();
  modalOpen = false;

  open(){
    this.modalOpen = true;
  }

  close() {
    this.modalOpen = false;
    this.closeModal.emit();
  }

}
