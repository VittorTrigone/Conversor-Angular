import { Component } from '@angular/core';

@Component({
  selector: 'app-conversor',
  templateUrl: './conversor.component.html',
  styleUrls: ['./conversor.component.css']
})

export class ConversorComponent {
  substituir: number | null = null;

  substituirZero(this: any, propriedade: keyof this): void {
    const valor = this[propriedade] as number;

    if (valor === 0) {
      this[propriedade] = null;
    }
  }

  zero: number = 0;
  valorReal: number = 0;
  valoreuro: number = 0;
  valordolar: number = 0;
  valorlibra: number = 0;
  resultadodolar: number = 0;
  resultadoeuro: number = 0;
  resultadolibra: number = 0;

  operacao(): void {
    this.resultadodolar = parseFloat((this.valorReal / this.valordolar).toFixed(2));
    this.resultadolibra = parseFloat((this.valorReal / this.valorlibra).toFixed(2));
    this.resultadoeuro = parseFloat((this.valorReal / this.valoreuro).toFixed(2));
  }
}