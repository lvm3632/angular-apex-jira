import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CmpRoutingModule } from './components-route.module';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { InputTextModule } from 'primeng/inputtext';
import { BadgeModule } from 'primeng/badge';
import { StyleClassModule } from 'primeng/styleclass';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { MenuModule } from 'primeng/menu';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CheckboxModule } from 'primeng/checkbox';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [HomeComponent, DashboardComponent],
  imports: [
    CommonModule,
    CmpRoutingModule,
    StyleClassModule,
    CommonModule,
    InputTextModule,
    BadgeModule,
    ButtonModule,
    RippleModule,
    MenuModule,
    BrowserAnimationsModule,
    CheckboxModule,
    SharedModule
  ],
})
export class ComponentsModule {}
