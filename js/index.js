class Personajes {
  serie = "Juego de Tronos";
  nombre;
  familia;
  edad;
  estado;
  constructor(nombre, familia, edad) {
    this.nombre = nombre;
    this.familia = familia;
    this.edad = edad;
    this.estado = "vivo";
  }
  comunicar(frase) {
    console.log(frase);
  }
  morir() {
    this.estado = "muerto";
  }
}

class Rey extends Personajes {
  añosReinado;
  frase = "Vais a morir todos";
  constructor(nombre, familia, edad, añosReinado) {
    super(nombre, familia, edad);
    this.añosReinado = añosReinado;
  }
  comunicar() {
    super.comunicar(this.frase);
  }
}
class Luchador extends Personajes {
  armaUsada;
  destreza;
  frase = "Primero pego y luego pregunto";
  constructor(nombre, familia, edad, armaUsada, destreza) {
    super(nombre, familia, edad);
    this.armaUsada = armaUsada;

    this.destreza = destreza > 10 ? 10 : destreza;
  }
  comunicar() {
    super.comunicar(this.frase);
  }
}
class Asesor extends Personajes {
  asesora;
  frase = "No sé por qué, pero creo que voy a morir pronto";
  constructor(nombre, familia, edad, asesora) {
    super(nombre, familia, edad);
    this.asesora = asesora;
  }
  comunicar() {
    super.comunicar(this.frase);
  }
}
class Escudero extends Personajes {
  sirve;
  pelotismo;
  frase = "Soy un loser";
  constructor(nombre, familia, edad, sirve, pelotismo) {
    super(nombre, familia, edad);
    if (sirve instanceof Luchador) {
      this.sirve = sirve;
    }
    this.pelotismo = pelotismo;
  }
  comunicar() {
    super.comunicar(this.frase);
  }
}
