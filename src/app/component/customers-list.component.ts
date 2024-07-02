import { Component, OnInit } from '@angular/core';
import { CustomersService } from '../services/customers.service';
import { Customers } from '../models/customers.model';

@Component({
  selector: 'app-customers-list',
  templateUrl: './customers-list.component.html',
  styleUrls: ['./customers-list.component.css']
})
export class CustomersListComponent implements OnInit {
  customers: Customers[] = [];

  constructor(private customersService: CustomersService) { }

  ngOnInit(): void {
    this.loadCustomers();
  }

  loadCustomers() {
    this.customersService.getCustomers().subscribe(data => {
      this.customers = data;
    });
  }

  deleteCustomer(id: number) {
    this.customersService.deleteCustomer(id).subscribe(() => {
      this.loadCustomers();
    });
  }
}
