import { Component } from '@angular/core';

@Component({
    selector: 'app-contador',
    templateUrl: './contador.component.html'
})

export class ContadorComponent {
    number: number = 10;
    base: number = 5;
  
    buttonLessOrSum(valor: string) {
  
      switch (valor) {
        case '+':
          this.number += this.base;
          break;
        case '-':
          this.number -= this.base;
          break;
        default:
          if (!valor.match('\\+|\\-'))
            alert('El operador indicado es incorrecto.\nSolo se aceptan los simbosolos (+ ó -).\nEl valor asignado es: '.concat(valor))
          break;
      }
      
    }

}