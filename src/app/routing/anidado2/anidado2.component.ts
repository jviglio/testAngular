import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-anidado2',
  templateUrl: './anidado2.component.html',
  styleUrl: './anidado2.component.scss'
})
export class Anidado2Component implements OnInit {

  constructor(private ruta:ActivatedRoute) {

  }

  id: any;

  ngOnInit(): void {
    this.id = this.ruta.snapshot.paramMap.get('id');
  }
}
