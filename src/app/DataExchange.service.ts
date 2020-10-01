import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataExchangeService {
  private InitDataSource = new BehaviorSubject(null);
  currentData = this.InitDataSource.asObservable();

  constructor() {}

  //This Method should be called by Component
  // whrere you want to update the data
  UpdateData(rowData: any) {
    this.InitDataSource.next(rowData);
  }
}
