import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { Router } from '@angular/router';
import { Driver, DriverStandig } from '../../../assets/F1DriverStandings';
import { DriversService } from '../../services/drivers.service';

@Component({
  selector: 'app-drivers-list',
  templateUrl: './drivers-list.component.html',
  styleUrls: ['./drivers-list.component.css']
})
export class DriversListComponent implements OnInit, AfterViewInit {
  [x: string]: any;

  @ViewChild(MatPaginator) paginator: MatPaginator = {} as MatPaginator;

  driverList: DriverStandig[] = {} as DriverStandig[];

  dataSource = new MatTableDataSource<DriverStandig>;

  displayedColumns = [
    'element.position',
    'element.Driver.nationality',
    'element.Driver.givenName',
    'element.Driver.familyName',
    'element.Constructors.name',
    'element.points',
    'actions'];

  
    shouldShow = false;
    
    selectedDriver: DriverStandig = {} as DriverStandig;

  constructor(private driversService: DriversService, private router: Router) { }

  
  initializeTable(driverList : DriverStandig[]){
    this.dataSource = new MatTableDataSource<DriverStandig>(this.driverList);
    this.dataSource.filterPredicate = (data:DriverStandig, filter: string) => {
      return data.Driver.givenName.toLowerCase().includes(filter.toLowerCase()) || data.Constructors.name.toLowerCase().includes(filter);
    }

    this.dataSource.paginator = this.paginator;
  }

  
    applyFilter(event: Event) {
      const filterValue = (event.target as HTMLInputElement).value;
      this.dataSource.filter = filterValue.trim().toLowerCase();
    }
    
  

  openDetails(driver: DriverStandig){
    this.shouldShow = true;
    this.selectedDriver = driver;
    this.goToBottom()
  }

  deleteElement(driver: DriverStandig){
    let index = this.dataSource.data.indexOf(driver);
    this.dataSource.data.splice(index,1);
    this.dataSource._updateChangeSubscription();
  }

  ngOnInit(): void {
    this.driversService.getDrivers().subscribe((response) => {
      this.driverList = response;
      this.initializeTable(response);
    });
  }

  ngAfterViewInit() {
    
    this.dataSource.paginator = this.paginator;
    setTimeout(() => this.dataSource.paginator = this.paginator);

  }

  goToBottom(){
    window.scrollTo(0,document.body.scrollHeight);
  }

}

