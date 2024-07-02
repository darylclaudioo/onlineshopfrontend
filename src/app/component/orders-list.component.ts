import { Component, OnInit } from '@angular/core';
import { OrdersService } from '../services/orders.service';
import { ReportsService } from '../services/reports.service';
import { Orders } from '../models/orders.model';
import { saveAs } from 'file-saver';

@Component({
  selector: 'app-orders-list',
  templateUrl: './orders-list.component.html',
  styleUrls: ['./orders-list.component.css']
})
export class OrderListComponent implements OnInit {
  orders: Orders[] = [];

  constructor(private ordersService: OrdersService, private reportsService: ReportsService) { }

  ngOnInit(): void {
    this.loadOrders();
  }

  loadOrders() {
    this.ordersService.getOrders().subscribe(data => {
      this.orders = data;
    });
  }

  deleteOrder(id: number) {
    this.ordersService.deleteOrder(id).subscribe(() => {
      this.loadOrders();
    });
  }

  downloadReport() {
    this.reportsService.downloadOrderReport().subscribe((data: any) => {
      saveAs(data, 'orders_report.pdf');
    });
  }
}
