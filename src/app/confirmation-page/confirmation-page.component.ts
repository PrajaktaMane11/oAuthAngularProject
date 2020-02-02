import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-confirmation-page',
  templateUrl: './confirmation-page.component.html',
  styleUrls: ['./confirmation-page.component.scss']
})
export class ConfirmationPageComponent implements OnInit {

    startDate = new Date(2000, 0, 2);

    constructor(private router: Router ) { }
    onConfirm() {
        this.router.navigate(['/confirmation-page']);
    }
    onCancel() {
      this.router.navigate(['/confirmation-page']);
  }
  ngOnInit() {
  }

}
