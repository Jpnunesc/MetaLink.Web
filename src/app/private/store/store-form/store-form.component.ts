import { AfterViewInit, Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StoreService } from '../store.service';
import {
  FormControl,
  FormGroup,
  FormGroupDirective,
  UntypedFormBuilder,
  UntypedFormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-store-form',
  standalone: false,
  templateUrl: './store-form.component.html',
  styleUrl: './store-form.component.css',
})
export class StoreFormComponent implements OnInit, AfterViewInit {
  private storeService = inject(StoreService);
  private activedRoute = inject(ActivatedRoute);
  private fb = inject(UntypedFormBuilder);

  formGroup!: FormGroup;
  statusList = [
    { label: 'Ativo', value: 1 },
    { label: 'Inativo', value: 0 },
  ];
  documentTypeList = [
    { label: 'CPF', value: 'CPF' },
    { label: 'CNPJ', value: 'CNPJ' },
  ];
  userTypeList = [
    { label: 'Administrador', value: 1 },
    { label: 'Loja', value: 2 },
  ];

  idStore = this.activedRoute.snapshot.params['id'];
  breadCrumbItens = [{ label: 'Usuário' }, { label: 'Cadastrar' }];
  isDetail = false;
  isEdit = false;

  ngOnInit(): void {
    const operacao = this.activedRoute.routeConfig
      ? this.activedRoute.routeConfig?.data?.['breadcrumb']
      : '';

    this.buildOperation(operacao);
    this.buildForm();
  }

  ngAfterViewInit(): void {
    if (this.idStore) {
      this.getStoreById();
    }
  }

  private getStoreById() {
    this.storeService.getById(this.idStore).subscribe((resp) => {
      if (resp?.success && resp.data) {
        console.log(resp.data);
        this.formGroup.patchValue(resp.data);
      }
    });
  }

  private buildForm(): void {
    this.formGroup = this.fb.group({
      idUser: new FormControl(null),
      fullName: new FormControl(null, [
        Validators.required,
        Validators.maxLength(100),
      ]),
      email: new FormControl(null, [Validators.email, Validators.required]),
      password: new FormControl(null, [
        Validators.minLength(6),
        Validators.required,
      ]),
      phoneNumber: new FormControl(null, [
        Validators.pattern(/^\d{10,15}$/),
        Validators.required,
      ]),
      documentType: new FormControl(null, Validators.required),
      cpfCnpj: new FormControl(null, [
        Validators.pattern(/^\d{11}$|^\d{14}$/),
        Validators.required,
      ]),
      userType: new FormControl(null, Validators.required),
      status: new FormControl(null, Validators.required),
      dateRegister: new FormControl(null),
      dateUpdate: new FormControl(null),
      lastPaymentDate: new FormControl(null),
    });
  }
  public save(_formDirective: FormGroupDirective): void {
    if (this.formGroup.invalid) return;
    this.storeService.create(this.formGroup.value).subscribe(() => {
      _formDirective.resetForm();
    });
  }

  private buildOperation(operation: string): void {
    switch (operation.toLocaleLowerCase()) {
      case 'editar':
        this.isDetail = false;
        this.isEdit = true;
        break;
      case 'detalhe':
        this.isDetail = true;
        break;
      case 'cadastrar':
        this.isEdit = true;
        break;
    }
  }
}
