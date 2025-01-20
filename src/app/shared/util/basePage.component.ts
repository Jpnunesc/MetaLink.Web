import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { setarTituloPagina } from './setarTituloPagina';

@Component({
  template: '',
})
export abstract class BasePageComponent implements OnInit {
  public isInclusao = false;


  constructor(public router: Router, public activatedRoute: ActivatedRoute) {

  }

  ngOnInit() {}

  getOperacao() {

  }
}
