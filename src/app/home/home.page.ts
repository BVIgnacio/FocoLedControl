import { Component } from '@angular/core';
import { Firestore, doc, getDoc, DocumentSnapshot } from '@angular/fire/firestore';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
 
  ledUnoEstado: any;
  ledDosEstado: any;
  ledTresEstado: any;  
  ledUnoEncendido: boolean = false;
  ledDosEncendido: boolean = false;
  ledTresEncendido: boolean = false;
  ledCuatroEncendido: boolean = false;
  ledCincoEncendido: boolean = false;
  controlLed: boolean = false;
  todosEncendidos: boolean = false;
  todosApagados: boolean = false;

  constructor(private firestore: Firestore) {}

 

  
  

 
  async encenderTodosLeds() {
    this.todosEncendidos = true;
    this.todosApagados = false;
    this.controlLed = true;
    this.ledUnoEncendido = false;
    this.ledDosEncendido = true;
    this.ledTresEncendido = false;
    this.ledCuatroEncendido = true;
    this.ledCincoEncendido = false;
  }

  async apagarTodosLeds() {
    this.todosApagados = true;
    this.todosEncendidos = false;
    this.ledUnoEncendido = true;
    this.ledDosEncendido = false;
    this.ledTresEncendido = true;
    this.ledCuatroEncendido = false;
    this.ledCincoEncendido = true;
    this.controlLed = false;
  }

  async encenderLedUno() {
    this.ledUnoEncendido = false;
    this.controlLed = true;
  }
  async encenderLedDos() {
    this.ledDosEncendido = true;
    this.ledTresEncendido = false;
  }
  async encenderLedTres() {
    this.ledCuatroEncendido = true;
    this.ledCincoEncendido = false;
  }


  async apagarLedUno() {
    this.controlLed = false;
    this.ledUnoEncendido = true;
  }
  async apagarLedDos() {
    this.ledDosEncendido = false;
    this.ledTresEncendido = true;
  } 
  async apagarLedTres() {
    this.ledCuatroEncendido = false;
    this.ledCincoEncendido = true;
  }
 

  ngOnInit() {
    
    this.recuperarEstados();
    this.recuperarEstadoLedUno();
    this.recuperarEstadoLedTres();
    this.recuperarEstadoLedDos();
  }

  
  async recuperarEstadoLedUno() {
    const docRef = doc(this.firestore, "controlLED", 'LED1');
    const snapshot: DocumentSnapshot<any> = await getDoc(docRef);
    if (snapshot.exists()) {
      this.ledUnoEstado = snapshot.data()?.encender;
      if (this.ledUnoEstado === true) {
        this.controlLed = true;
      } else {
        this.ledUnoEncendido = true;
      }
    }
  }

  async recuperarEstadoLedDos() {
    const docRef = doc(this.firestore, "controlLED", 'LED2');
    const snapshot: DocumentSnapshot<any> = await getDoc(docRef);
    if (snapshot.exists()) {
      this.ledDosEstado = snapshot.data()?.encender2;
      if (this.ledDosEstado === true) {
        this.ledDosEncendido = true;
      } else {
        this.ledDosEncendido = true;
      }
    }
  }

  async recuperarEstadoLedTres() {
    const docRef = doc(this.firestore, "controlLED", 'LED3');
    const snapshot: DocumentSnapshot<any> = await getDoc(docRef);
    if (snapshot.exists()) {
      this.ledTresEstado = snapshot.data()?.encender3;
      if (this.ledTresEstado === true) {
        this.ledTresEncendido = true;
      } else {
        this.ledTresEncendido = true;
      }
    }
  }

  // Método para recuperar el estado de todos los LEDs
  async recuperarEstados() {
    const docRef1 = doc(this.firestore, "controlLED", 'LED1');
    const snap1: DocumentSnapshot<any> = await getDoc(docRef1);
    const docRef2 = doc(this.firestore, "controlLED", 'LED2');
    const snap2: DocumentSnapshot<any> = await getDoc(docRef2);
    const docRef3 = doc(this.firestore, "controlLED", 'LED3');
    const snap3: DocumentSnapshot<any> = await getDoc(docRef3);

    if (snap1.exists() && snap2.exists() && snap3.exists()) {
      const estadoLedUno = snap1.data()?.encender;
      const estadoLedDos = snap2.data()?.encender2;
      const estadoLedTres = snap3.data()?.encender3;

      if (estadoLedUno && estadoLedDos && estadoLedTres) {
        this.todosEncendidos = true;
      } else {
        this.todosApagados = true;
      }
    }
  }
  colorBotonEncendido(estado: boolean): string {
    return estado ? "success" : "dark"; 
  }
  
  colorBotonApagado(estado: boolean): string {
    return estado ? "danger" : "medium"; 
  }
  
}
