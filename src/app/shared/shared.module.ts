import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StyleClassModule } from 'primeng/styleclass';
import { RippleModule } from 'primeng/ripple';
import { FooterComponent } from './layout/footer/footer.component';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { RouterModule, Routes } from '@angular/router';



@NgModule({
  declarations: [FooterComponent, SidebarComponent],
  imports: [CommonModule, RippleModule, StyleClassModule, RouterModule],
  exports: [FooterComponent, SidebarComponent],
})
export class SharedModule {}
