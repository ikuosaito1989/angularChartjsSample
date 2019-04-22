import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss'],
})
export class IndexComponent implements OnInit {
  constructor() {}
  public data = [10, 40, 60, 20, 5];
  public interval = 20;
  public selectedIndex = 1;

  ngOnInit() {}
}
