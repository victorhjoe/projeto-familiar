import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-comfirm-modal',
  standalone: true,
  imports: [],
  templateUrl: './comfirm-modal.component.html',
  styleUrl: './comfirm-modal.component.css'
})
export class ComfirmModalComponent {
  @Input() visible = false;
  @Input() title = 'Confirmação';
  @Input() message = 'Você tem certeza que deseja continuar?';
  @Output() confirm = new EventEmitter<void>();
  @Output() cancel = new EventEmitter<void>();
}
