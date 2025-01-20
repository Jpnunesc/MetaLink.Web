import { Component, inject, OnInit, signal } from '@angular/core';
import { StoreService } from '../store.service';
import {
  UntypedFormBuilder,
  UntypedFormGroup,
  Validators,
} from '@angular/forms';
import { SearchUserPagedInput } from '../interface/search-user-paged-input';
import { SearchUserPagedOutput } from '../interface/search-user-paged-output';

@Component({
  selector: 'app-store-list',
  standalone: false,
  templateUrl: './store-list.component.html',
  styleUrl: './store-list.component.css',

})
export class StoreListComponent implements OnInit {

  private storeService = inject(StoreService);
  private fb = inject(UntypedFormBuilder);
  formGroup!: UntypedFormGroup;
  storeList = signal<SearchUserPagedOutput[]>([]);
  totalItens = signal<number>(0);
  pageIndex = signal<number>(1);
  statusList = [{ label: 'Ativo', value: 1 }, { label: 'Inativo', value: 0 }];

  ngOnInit(): void {
    this.buildForm();
    this.getStores();
  }

  public getStores(): void {
    const filter = this.formGroup.value as SearchUserPagedInput;
    this.storeService.paged(filter).subscribe((res) => {
      if (res && res.data && res.data.results) {
        this.storeList.set(res.data.results);
        this.totalItens.set(res.data.totalItens);
      }
    });
  }
  public onEdit(id: number) {

  }
  public onDelete(id: number) {

  }
  private buildForm(): void {
    this.formGroup = this.fb.group({
      page: [1, [Validators.required, Validators.min(1)]],
      pageSize: [
        50,
        [Validators.required, Validators.min(1), Validators.max(100)],
      ],
      idUser: [null],
      fullName: [null, Validators.maxLength(100)],
      email: [null, [Validators.email, Validators.maxLength(100)]],
      password: [null, Validators.minLength(6)],
      phoneNumber: [null, Validators.pattern(/^\d{10,15}$/)],
      documentType: [null],
      cpfCnpj: [null, Validators.pattern(/^\d{11}$|^\d{14}$/)],
      userType: [null],
      status: [null],
      dateRegister: [null],
      dateUpdate: [null],
      lastPaymentDate: [null],
    });
  }
}
