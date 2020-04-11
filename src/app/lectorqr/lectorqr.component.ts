import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-lectorqr',
  templateUrl: './lectorqr.component.html',
  styleUrls: ['./lectorqr.component.css']
})

export class LectorqrComponent implements OnInit {

  availableDevices: MediaDeviceInfo[];
  currentDevice: MediaDeviceInfo = null;
  hasDevice: boolean;
  hasPermission: boolean;
  qrResult: string;

  constructor() { }

  ngOnInit(): void {
  }

  onCodeResult(resulString: string):  void {
    this.qrResult = resulString;
  }

  onHasPermission(has: boolean): void {
    this.hasPermission = has;
  }

}
