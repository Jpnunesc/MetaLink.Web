import { Component, inject, OnInit } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/core';
import interactionPlugin from '@fullcalendar/interaction';
import timeGridPlugin from '@fullcalendar/timegrid';
import ptBrLocale from '@fullcalendar/core/locales/pt-br';
import {
  FormControl,
  FormGroup,
  UntypedFormBuilder,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-dashboard-store',
  templateUrl: './dashboard-store.component.html',
  styleUrl: './dashboard-store.component.css',
  standalone: false,
})
export class DashboardStoreComponent implements OnInit {
  private fb = inject(UntypedFormBuilder);


  courtList = [{label: 'Quadra 1', valeu: 1}, {label: 'Quadra 2', value: 2}, {label: 'Quadra 3', value: 3}];

  formGroup!: FormGroup;
  editEventVisible: boolean = false;
  TODAY: string = new Date()
    .toISOString()
    .split('T')[0]
    .split('-')
    .reverse()
    .join('-');
  calendarOptions: CalendarOptions = {
    initialView: 'timeGridWeek',
    plugins: [timeGridPlugin, interactionPlugin],
    locale: ptBrLocale,
    slotDuration: '00:30:00',
    editable: true,
    height: 800,
    contentHeight: 780,
    aspectRatio: 3,
    nowIndicator: true,
    navLinks: true,
    // now: this.TODAY + 'T09:25:00',
    views: {
      timeGridWeek: {
        titleFormat: { year: 'numeric', month: 'short', day: 'numeric' },
        columnHeaderFormat: {
          weekday: 'short',
          day: 'numeric',
          month: 'numeric',
        },
        slotLabelFormat: {
          hour: 'numeric',
          minute: '2-digit',
          omitZeroMinute: false,
          meridiem: 'short',
        },
      },
      timeGridDay: {
        titleFormat: { year: 'numeric', month: 'short', day: 'numeric' },
        columnHeaderFormat: {
          weekday: 'short',
          day: 'numeric',
          month: 'numeric',
        },
        slotLabelFormat: {
          hour: 'numeric',
          minute: '2-digit',
          omitZeroMinute: false,
          meridiem: 'short',
        },
      },
    },
    headerToolbar: {
      left: 'prev,next today',
      center: 'title',
      right: 'timeGridWeek,timeGridDay',
    },
    events: [
      {
        title: 'Reserva Quadra 1',
        description: 'João da Silva',
        start: '2025-01-29T10:00:00',
        end: '2025-01-29T11:00:00',
        className: 'fc-event-success',
      },
      {
        title: 'Reserva Quadra 2',
        description: 'Pedro de Souza',
        start: '2025-01-30T08:00:00',
        end: '2025-01-30T09:30:00',
        className: 'fc-event-light fc-event-solid-primary',
      },
    ],
    dateClick: (arg) => this.handleDateClick(arg),
    eventClick: (arg) => this.handleEventClick(arg),
  };

  ngOnInit(): void {
    this.buildForm();
  }

  handleDateClick(arg: any): void {
    console.log('Data clicada:', arg.dateStr);
    alert(`Você clicou na data/horário: ${arg.dateStr}`);
  }

  handleEventClick(arg: any): void {
    const event = arg.event;
    const eventDetails = `
      Título: ${event.title}
      Descrição: ${event.extendedProps.description}
      Início: ${event.start}
      Fim: ${event.end}
    `;
   this.editEventVisible = true;
  }

  private buildForm(): void {
    this.formGroup = this.fb.group({
      bookingId: new FormControl(null),
      bookingDateTime: new FormControl(null, Validators.required),
      courtId: new FormControl(null, Validators.required),
    });
  }
  saveEditEvent(event: any) {
 console.log(event);
  }
}
