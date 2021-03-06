import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  palabra = 'AGUACATE';
  palabraOculta = '';
  intentos = 0;
  gano = false;
  perdio = false;
  letras = [
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'J',
    'K',
    'L',
    'M',
    'N',
    'Ñ',
    'O',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'U',
    'V',
    'W',
    'X',
    'Y',
    'Z',
  ];
  constructor() {
    console.log('se acaba de crear el app component');
    this.palabraOculta = '_ '.repeat(this.palabra.length);
  }

  comprobar(letra: string) {
    this.existeLetra(letra);
    let palabraOcultaArr = this.palabraOculta.split(' ');
    console.log('comprobar', palabraOcultaArr);

    for (let i = 0; i < this.palabra.length; i++) {
      if (this.palabra[i] === letra) {
        palabraOcultaArr[i] = letra;
      }
    }
    this.palabraOculta = palabraOcultaArr.join(' ');
    this.verificaGane()
  }
  verificaGane(){
    const palabraArr = this.palabraOculta.split(" ");
    const palabraEvaluar = palabraArr.join('');
    if(palabraEvaluar === this.palabra){
      this.gano = true
      console.log("Gano")
    }else{
      if(this.intentos >= 9){
        this.perdio= true
        console.log('Usuario Perdio')
      }
    }
    console.log(palabraArr)
    
  }
  existeLetra(letra: string) {
    if (this.palabra.indexOf(letra) >= 0) {
      console.log('Letra Existe');
    } else {
      console.log('Letra no existe');
      this.intentos ++;
    }
  }
}
