import { Component, OnInit } from '@angular/core';
import { discardPeriodicTasks } from '@angular/core/testing';
import { ChargersService } from 'src/app/services/chargers.service';

@Component({
  selector: 'app-chargers',
  templateUrl: './chargers.component.html',
  styleUrls: ['./chargers.component.css']
})
export class ChargersComponent implements OnInit {

  chargers = [];

  constructor(
    private chargersService: ChargersService
  ) { }

  ngOnInit(): void {
    this.chargersService.getChargers().subscribe((chargers) => this.chargers = chargers)
  }

  deleteCharger(charger: any) {
    this.chargersService.deleteCharger(charger).subscribe(() => this.chargers = (this.chargers.filter(c => c.id !== charger.id)));
  }

  addCharger(charger: any) {
    this.chargersService.addCharger(charger).subscribe((charger) => (this.chargers.push(charger)))
  }



}
