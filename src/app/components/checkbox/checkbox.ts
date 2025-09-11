import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';

@Component({
  selector: 'app-checkbox',
  imports: [MatCheckboxModule, FormsModule],
  templateUrl: './checkbox.html',
  styleUrl: './checkbox.scss'
})
export class Checkbox {
  @Input() checked = false;
  @Output() checkedChange = new EventEmitter<boolean>();

  checkboxUpdate(value: boolean) {
    this.checkedChange.emit(value);
  }
}
