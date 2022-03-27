import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Customer, Representative } from 'src/app/models/customer';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'issues-table',
  templateUrl: './issues-table.component.html',
  styleUrls: ['./issues-table.component.scss'],
})
export class IssuesTableComponent implements OnInit {
  public customers!: Customer[];
  public representatives!: Representative[];
  public statuses!: any[];
  public types!: any[];

  loading: boolean = true;
  activityValues: number[] = [0, 100];

  constructor(private customerService: CustomerService) {}

  ngDoCheck() {}

  ngOnInit() {
    this.customerService.getCustomersLarge().then((customers) => {
      this.customers = customers;
      this.loading = false;

      this.customers.forEach(
        (customer: any) => (customer.date = new Date(customer.date))
      );
    });

    this.representatives = [
      { name: 'Amy Elsner', image: 'amyelsner.png' },
      { name: 'Anna Fali', image: 'annafali.png' },
      { name: 'Asiya Javayant', image: 'asiyajavayant.png' },
      { name: 'Bernardo Dominic', image: 'bernardodominic.png' },
      { name: 'Elwin Sharvill', image: 'elwinsharvill.png' },
      { name: 'Ioni Bowcher', image: 'ionibowcher.png' },
      { name: 'Ivan Magalhaes', image: 'ivanmagalhaes.png' },
      { name: 'Onyama Limba', image: 'onyamalimba.png' },
      { name: 'Stephen Shaw', image: 'stephenshaw.png' },
      { name: 'Xuxue Feng', image: 'xuxuefeng.png' },
    ];

    this.types = [
      { label: 'Story', value: 'story' },
      { label: 'Feature', value: 'feature' },
      { label: 'Epic', value: 'epic' },
      { label: 'Improvement', value: 'improvement' },
      { label: 'Bug', value: 'bug' },
      { label: 'Test Case', value: 'test case' },
      { label: 'Incident', value: 'incident' },
      { label: 'Task', value: 'task' },
      { label: 'Risk', value: 'risk' },
      { label: 'Initiative', value: 'initiative' },
    ];

    this.statuses = [
      { label: 'Open', value: 'open' },
      { label: 'In Progress', value: 'in progress' },
      { label: 'Done', value: 'done' },
      { label: 'To Do', value: 'to do' },
      { label: 'In Review', value: 'in review' },
      { label: 'Under Review', value: 'under review' },
      { label: 'Approved', value: 'approved' },
      { label: 'Cancelled', value: 'cancelled' },
      { label: 'Rejected', value: 'rejected' },
      { label: 'Draft', value: 'draft' },
      { label: 'Published', value: 'published' },
      { label: 'Interviewing', value: 'interviewing' },
      { label: 'Interview Debrief', value: 'interview debrief' },
      { label: 'Closed', value: 'closed' },
    ];
  }

  filterGlobal($event: any) {
    console.log($event.target.value);
  }

  onClickName($event: any) {
    console.log($event.target.id, 'dio click?');
    let id = parseInt($event.target.id);
    this.openModal(id);
  }

  openModal(id: number) {
    if (this.customers && this.customers.length) {
      let index = this.customers.findIndex((item) => item.id == id);
      if (index != -1) {
        let issue = this.customers[index];
        console.log(issue);
        this.issueJira = issue.issueJira;
        this.descriptionJira = issue.issueDescription;
        this.typeTask = issue.typeTask;
        this.status = issue.status;
        this.createDate = issue.date;
        this.reporter = issue.name;
        this.assignee = issue.representative?.name;
        this.showDialog();
      }
    }
  }

  public issueJira: undefined | string = '';
  public descriptionJira: undefined | string = '';
  public typeTask: undefined | string = '';
  public status: undefined | string = '';
  public createDate: undefined | string | Date;
  public reporter: undefined | string ;
  public assignee: undefined | string ;

  public display: boolean = false;

  showDialog() {
    this.display = true;
  }
}
