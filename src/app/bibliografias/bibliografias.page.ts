import { Component, OnInit } from '@angular/core';
import { Appointment } from '../shared/Appointment';
import { AppointmentService } from './../services/appointment.service';

@Component({
  selector: 'app-bibliografias',
  templateUrl: './bibliografias.page.html',
  styleUrls: ['./bibliografias.page.scss'],
})
export class BibliografiasPage implements OnInit {
  Bookings = [];

  constructor(private aptService: AppointmentService) {}

  ngOnInit() {
    this.fetchBookings();
    let bookingRes = this.aptService.getBookingList();
    bookingRes.snapshotChanges().subscribe((res) => {
      this.Bookings = [];
      res.forEach((item) => {
        let a = item.payload.toJSON();
        a['$idreferencia'] = item.key;
        this.Bookings.push(a as Appointment);
      });
    });
  }

  fetchBookings() {
    this.aptService
      .getBookingList()
      .valueChanges()
      .subscribe((res) => {
        console.log(res);
      });
  }

  deleteBooking(id) {
    console.log(id);
    if (window.confirm('Do you really want to delete?')) {
      this.aptService.deleteBooking(id);
    }
  }
}
