import { Component, Input, OnInit, Output, EventEmitter } from "@angular/core";

@Component({
  selector: 'app-puntuacion',
  templateUrl: './puntuacion.component.html',
  styleUrls: ['./puntuacion.component.css']
})
export class PuntuacionComponent implements OnInit {
  @Input() puntuacion: number;
  @Output() newPuntuation = new EventEmitter<number>();

  constructor() { 
  }

  ngOnInit() {
    
  }

  sendPuntuation(value: number) {
    this.newPuntuation.emit(value);
  }


}
