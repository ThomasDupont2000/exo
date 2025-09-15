import { Component, input, output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';

@Component({
  selector: 'app-checkbox',
  imports: [MatCheckboxModule, FormsModule],
  templateUrl: './checkbox.html',
  styleUrl: './checkbox.scss'
})
export class Checkbox {
  checked = input(false);
  checkedEvent = output<boolean>();

  onCheckboxUpdate(value: boolean) {
    this.checkedEvent.emit(value);
  }
}
