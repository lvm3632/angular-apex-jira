import { TemplateRef } from '@angular/core';
import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'dashboard-shared',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponentShared implements OnInit {

  @Input()
  public template!: TemplateRef<any>;

  constructor() {}
  ngOnInit(): void {}

}
