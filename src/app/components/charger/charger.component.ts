import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Charger } from 'src/app/Interfaces';

@Component({
  selector: 'app-charger',
  templateUrl: './charger.component.html',
  styleUrls: ['./charger.component.css'],
})
export class ChargerComponent implements OnInit {
  @Input() charger: Charger;
  @Output() onDeleteCharger: EventEmitter<Charger> = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}

  onDelete(charger: Charger) {
    this.onDeleteCharger.emit(charger);
  }
}
