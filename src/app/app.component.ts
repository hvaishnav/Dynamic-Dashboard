import { Component } from '@angular/core';
import { DataExchangeService } from './DataExchange.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'DynamicDashboard';
  constructor(private DataEx: DataExchangeService) {
    let promptValue = prompt('Enter any value under 5', '');
    this.DataEx.UpdateData(promptValue);
  }
}
