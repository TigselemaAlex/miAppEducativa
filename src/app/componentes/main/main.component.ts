import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent implements OnInit {
  public ciudades: string[] = [
    'Ambato',
    'Quito',
    'Loja',
    'Riobamba',
    'Latacunga',
    'La Libertad',
  ];

  public showCiudades: boolean = true;

  public changeCss: boolean = true;

  constructor() {}

  ngOnInit(): void {}

  change(): void {
    this.showCiudades = !this.showCiudades;
  }

  cambioCss() {
    this.changeCss = !this.changeCss;
  }
}
