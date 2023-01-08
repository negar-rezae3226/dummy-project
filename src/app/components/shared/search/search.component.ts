import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {


  value: string = '';
  searchInputValue: string = '';
  @Output() searchInput = new EventEmitter<string>();


  onClick() {
    this.emitValue()

  }

  onKeyDown(event: KeyboardEvent) {

    if (event.key == "Enter")
      this.emitValue()

  }

  emitValue() {
    // if (this.value.length > 3)
      this.searchInput.emit(this.value);

  }

  inputValue(e: Event) {

    this.value = (<HTMLInputElement>e.target).value;
    console.log(this.value);

  }

}
