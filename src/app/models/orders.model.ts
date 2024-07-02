import { Customers } from './customers.model';
import { Items } from './items.model';

export interface Orders {
    ordersId: number;
    ordersCode: string;
    ordersDate: Date;
    totalPrice: number;
    customers: Customers;
    items: Items;
    quantity: number;
}
