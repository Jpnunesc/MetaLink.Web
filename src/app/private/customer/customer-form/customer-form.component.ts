import { Component, inject, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormGroupDirective,
  UntypedFormBuilder,
  Validators,
} from '@angular/forms';
import { CustomerService } from '../customer.service';
import {
  CreateCustomerInput,
  StatusEnum,
} from '../interface/create-customer-input';

@Component({
  selector: 'app-customer-form',
  templateUrl: './customer-form.component.html',
  styleUrls: ['./customer-form.component.css'],
  standalone: false,
})
export class CustomerFormComponent implements OnInit {
  private customerService = inject(CustomerService);
  private fb = inject(UntypedFormBuilder);
  formGroup!: FormGroup;
  statusList = [
    { label: 'Ativo', value: StatusEnum.Active },
    { label: 'Inativo', value: StatusEnum.Inactive },
  ];
  breadCrumbItems = [{ label: 'Usuário' }, { label: 'Cadastrar' }];

  ngOnInit(): void {
    this.buildForm();
  }

  private buildForm(): void {
    this.formGroup = this.fb.group({
      clientId: new FormControl(null),
      name: new FormControl(null, [
        Validators.required,
        Validators.maxLength(100),
      ]),
      contact: new FormControl(null, [
        Validators.required,
        Validators.pattern(/^\d{10,15}$/),
      ]),
      status: new FormControl(null, Validators.required),
      enrollmentDate: new FormControl(new Date(), Validators.required),
      lastPaymentDate: new FormControl(null),
      bookingWeek: new FormControl(0, [Validators.required, Validators.min(0)]),
      userId: new FormControl(null, Validators.required),
    });
  }

  public save(formDirective: FormGroupDirective): void {
    if (this.formGroup.invalid) return;

    const customerData: CreateCustomerInput = this.formGroup.value;
    this.customerService.create(customerData).subscribe(() => {
      formDirective.resetForm();
      this.formGroup.reset();
    });
  }
}
