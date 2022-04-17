import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TemperaturaService } from 'src/app/services/temperatura.service';

@Component({
  selector: 'app-tiempo',
  templateUrl: './tiempo.component.html',
  styleUrls: ['./tiempo.component.css'],
})
export class TiempoComponent implements OnInit {
  public formulario!: FormGroup;
  public tiempo: any;
  public name: any;
  public temperatura: any;
  public humedad: any;
  public latitud: any;
  public longitud: any;
  public descripcion: any;
  public showError!: boolean;
  public mensajeError!: string;
  public fecha = new Date();

  constructor(
    private formBuilder: FormBuilder,
    private temperaturaServices: TemperaturaService
  ) {
    this.iniciaFormulario();
    this.formulario.get('ciudad')?.invalid;
  }

  ngOnInit(): void {}

  /*
    Crea e inicia un formulario 
   */
  iniciaFormulario() {
    this.formulario = this.formBuilder.group({
      ciudad: ['', [Validators.required, Validators.pattern('^[a-zA-Z ]*$')]],
      codigo: ['', [Validators.required, Validators.pattern('^[a-zA-Z ]*$')]],
    });
  }

  consultar(): void {
    this.showError = false;
    console.log('Formulario: ', this.formulario);

    this.temperaturaServices
      .getEstadoTiempo(
        this.formulario.get('ciudad')?.value,
        this.formulario.get('codigo')?.value
      )
      .subscribe({
        next: (respuesta) => {
          this.tiempo = respuesta;
          this.name = this.tiempo.name;
          this.temperatura = this.tiempo.main.temp;
          this.humedad = this.tiempo.main.humidity;
          this.latitud = this.tiempo.coord.lat;
          this.longitud = this.tiempo.coord.lon;
          this.descripcion = this.tiempo.weather[0].description;
          console.log(respuesta);
        },
        error: (e) => {
          this.showError = true;
          this.mensajeError =
            'Error al consultar el tiempo. Intetelo nuevamente!';
        },
      });
  }
}
