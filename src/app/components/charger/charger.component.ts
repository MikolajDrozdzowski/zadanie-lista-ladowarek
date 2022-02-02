import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Charger } from 'src/app/Interfaces';
import { NgForm } from '@angular/forms';
import { Message, MessageService } from 'primeng-lts/api';

@Component({
  selector: 'app-charger',
  templateUrl: './charger.component.html',
  styleUrls: ['./charger.component.css'],
})
export class ChargerComponent implements OnInit {
  @Input() charger: Charger;
  @Output() onDeleteCharger: EventEmitter<Charger> = new EventEmitter();
  @Output() onUpdateCharger: EventEmitter<Charger> = new EventEmitter();

  constructor(private messageService: MessageService) {}

  ngOnInit(): void {}

  onDelete(charger: Charger) {
    this.onDeleteCharger.emit(charger);
  }

  onUpdate(form: NgForm) {
    this.onUpdateCharger.emit(form.value);
  }

  addSingle() {
    this.messageService.add({
      severity: 'success',
      summary: 'Success',
      detail: 'Charger was successfully updated',
    });
  }
}
