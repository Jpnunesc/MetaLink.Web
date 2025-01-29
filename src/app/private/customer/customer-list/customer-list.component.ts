import { Component, inject, OnInit, signal } from '@angular/core';
import {
  UntypedFormBuilder,
  UntypedFormGroup,
  Validators,
} from '@angular/forms';
import { CreateCustomerOutput } from '../interface/create-customer-output';
import { CustomerService } from '../customer.service';
import {
  CreateCustomerInput,
  StatusEnum,
} from '../interface/create-customer-input';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css'],
  standalone: false,
})
export class CustomerListComponent implements OnInit {
  private customerService = inject(CustomerService);
  private fb = inject(UntypedFormBuilder);
  formGroup!: UntypedFormGroup;
  customerList = signal<CreateCustomerOutput[]>([]);
  totalItens = signal<number>(0);
  pageIndex = signal<number>(1);
  statusList = [
    { label: 'Ativo', value: StatusEnum.Active },
    { label: 'Inativo', value: StatusEnum.Inactive },
  ];

  ngOnInit(): void {
    this.buildForm();
    this.getCustomer();
  }

  public getCustomer(): void {
    const filter = this.formGroup.value as CreateCustomerInput;
    this.customerService.paged(filter).subscribe((res) => {
      if (res && res.data && res.data.results) {
        this.customerList.set(res.data.results);
        this.totalItens.set(res.data.totalItens);
      }
    });
  }

  public onEdit(id: number) {
    // Implementação futura
  }

  public onDelete(id: number) {
    // Implementação futura
  }

  private buildForm(): void {
    this.formGroup = this.fb.group({
      page: [1, [Validators.required, Validators.min(1)]],
      pageSize: [
        50,
        [Validators.required, Validators.min(1), Validators.max(100)],
      ],
      clientId: [null],
      email: [null],
      name: [null, Validators.maxLength(100)],
      phoneNumber: [null, Validators.pattern(/^\d{10,15}$/)],
      documentType: [null],
      cpfCnpj: [null, Validators.pattern(/^\d{11}$|^\d{14}$/)],
      status: [null],
      enrollmentDate: [null],
      lastPaymentDate: [null],
      bookingWeek: [null, Validators.min(0)],
      userId: [null],
    });
  }
}
