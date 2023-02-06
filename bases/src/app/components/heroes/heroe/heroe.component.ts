import { Component } from '@angular/core';

@Component({
    selector: 'app-heroe',
    templateUrl: './heroe.component.html'
})

export class HeroeComponent {

    nombre: string = 'Ironman';
    edad: number = 45;

    get nombreCapitalizado(): string {
        return this.nombre.toUpperCase();
    }

    set cambiarNombre(nombre: string) {
        this.nombre = nombre;
    }

    set cambiarEdad(edad: number) {
        this.edad = edad;
    }


    getDataHeroe(): string {
        return ` ${this.nombre} - ${this.edad}`;
    }

}