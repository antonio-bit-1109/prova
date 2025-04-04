import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  constructor() {
    this.stampaMessaggio();
  }

  stampaMessaggio() {
    console.log('Prova commit');
  }
}
