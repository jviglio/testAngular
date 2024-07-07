import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-anidado1',
  templateUrl: './anidado1.component.html',
  styleUrl: './anidado1.component.scss'
})
export class Anidado1Component implements OnInit {

  constructor(private ruta:ActivatedRoute) {

  }

  id: any;

  ngOnInit(): void {
    this.id = this.ruta.snapshot.paramMap.get('id');
  }
}
