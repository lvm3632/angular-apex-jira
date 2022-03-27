import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StyleClassModule } from 'primeng/styleclass';
import { RippleModule } from 'primeng/ripple';
import { FooterComponent } from './layout/footer/footer.component';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponentShared } from './layout/dashboard/dashboard.component';


@NgModule({
  declarations: [
    FooterComponent,
    SidebarComponent,
    DashboardComponentShared,
  ],
  imports: [
    CommonModule,
    RippleModule,
    StyleClassModule,
    RouterModule,
  ],
  exports: [FooterComponent, SidebarComponent, DashboardComponentShared],
})
export class SharedModule {}
