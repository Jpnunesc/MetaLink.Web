import { ChangeDetectorRef, Component, inject, OnDestroy, OnInit, signal } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import { LoadingService } from './core/service/loading.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  standalone: false
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'Mobiliza.Web';
  public loader = inject(LoadingService);
  private changeDetectionRef = inject(ChangeDetectorRef);
  private primengConfig = inject(PrimeNGConfig);

  isloading = signal<boolean>(false);
  subscription: Subscription[] = [];

  ngOnInit() {
      this.primengConfig.ripple = true;
      this.subscription.push(this.loader.changes().subscribe((data) => {
        this.isloading.set(data.value);
      }));
  }
  ngAfterContentChecked(): void {
    this.changeDetectionRef.detectChanges();
  }

  ngOnDestroy() {
    this.subscription[0].unsubscribe();
  }
}
