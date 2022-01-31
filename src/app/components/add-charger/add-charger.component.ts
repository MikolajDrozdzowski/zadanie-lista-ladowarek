import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-add-charger',
  templateUrl: './add-charger.component.html',
  styleUrls: ['./add-charger.component.css']
})
export class AddChargerComponent implements OnInit {
  @Output() onAddCharger: EventEmitter<any> = new EventEmitter();

  chargePointId: string;
  name: string;
  shortName: string;
  maximumPower: number = 0;
  groupName: string;
  firmwareVersion: string;

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    const newCharger = {
      chargePointId: this.chargePointId,
      name: this.name,
      shortName: this.shortName,
      maximumPower: this.maximumPower,
      groupName: this.groupName,
      firmwareVersion: this.firmwareVersion
    }

    this.onAddCharger.emit(newCharger);
    
    this.chargePointId = '';
    this.name = '';
    this.shortName = '';
    this.maximumPower = 0;
    this.groupName = '';
    this.firmwareVersion = '';

    console.log(newCharger);

  }

}
