import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-charger',
  templateUrl: './charger.component.html',
  styleUrls: ['./charger.component.css']
})
export class ChargerComponent implements OnInit {
  @Input() charger
  @Output() onDeleteCharger: EventEmitter<any> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
  
  onDelete(charger) {
    this.onDeleteCharger.emit(charger);
  }

}
