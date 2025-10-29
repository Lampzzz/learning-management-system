import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-modal',
  imports: [],
  templateUrl: './modal.html',
  styleUrl: './modal.scss',
})
export class Modal {
  modalId = input.required<string>();
  title = input<string>();
  buttonLabel = input<string>('Create');

  onClick = output();
}
