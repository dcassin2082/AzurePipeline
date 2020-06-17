import { Injectable } from '@angular/core';
import { CustomerService } from 'src/app/customers/shared/customer.service';
import { Customer } from 'src/app/customers/shared/customer.Model';

@Injectable({
  providedIn: 'root'
})
export class FunnelService {

  constructor() { }

  customers: Customer[]

}
