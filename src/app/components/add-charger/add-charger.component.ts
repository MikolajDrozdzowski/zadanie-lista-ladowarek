import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Charger } from 'src/app/Interfaces';

@Component({
  selector: 'app-add-charger',
  templateUrl: './add-charger.component.html',
  styleUrls: ['./add-charger.component.css'],
})
export class AddChargerComponent implements OnInit {
  @Output() onAddCharger: EventEmitter<Charger> = new EventEmitter();

  chargePointId: string;
  name: string;
  shortName: string;
  maximumPower: number = 0;
  groupName: string;
  firmwareVersion: string;

  constructor() {}

  ngOnInit(): void {}

  onSubmit() {
    if (!this.chargePointId) {
      alert('Please enter a text for Charge Point Id');
      return;
    }
    if (!this.name) {
      alert('Please enter a text for Name');
      return;
    }
    if (!this.shortName) {
      alert('Please enter a text for Short Name');
      return;
    }
    if (!this.maximumPower) {
      alert('Please enter a text for Maximum Power');
      return;
    }
    if (!this.groupName) {
      alert('Please enter a text for Group Name');
      return;
    }
    if (!this.firmwareVersion) {
      alert('Please enter a text for Firmware Version');
      return;
    }

    const newCharger = {
      chargePointId: this.chargePointId,
      name: this.name,
      shortName: this.shortName,
      maximumPower: this.maximumPower,
      groupName: this.groupName,
      firmwareVersion: this.firmwareVersion,
    };

    this.onAddCharger.emit(newCharger);

    this.chargePointId = '';
    this.name = '';
    this.shortName = '';
    this.maximumPower = 0;
    this.groupName = '';
    this.firmwareVersion = '';
  }
}
