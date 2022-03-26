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
import { IssuesTableComponent } from './issues-table/issues-table.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { TableModule } from 'primeng/table';
import { ToastModule } from 'primeng/toast';
import { CalendarModule } from 'primeng/calendar';
import { SliderModule } from 'primeng/slider';
import { MultiSelectModule } from 'primeng/multiselect';
import { ContextMenuModule } from 'primeng/contextmenu';
import { DialogModule } from 'primeng/dialog';
import { DropdownModule } from 'primeng/dropdown';
import { ProgressBarModule } from 'primeng/progressbar';
import { CustomerService } from 'src/app/services/customer.service';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [HomeComponent, DashboardComponent, IssuesTableComponent],
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
    SharedModule,
    BrowserModule,
    TableModule,
    CalendarModule,
    SliderModule,
    DialogModule,
    MultiSelectModule,
    ContextMenuModule,
    DropdownModule,
    ToastModule,
    ProgressBarModule,
    HttpClientModule,
    FormsModule,
    RouterModule,
    DialogModule,
  ],
  exports: [IssuesTableComponent],
  providers: [CustomerService],
})
export class ComponentsModule {}

//open, blocked, completed, work in progress
