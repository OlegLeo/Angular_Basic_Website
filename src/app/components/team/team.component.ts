import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Driver, DriverStandig } from '../../../assets/F1DriverStandings';
import { DriversService } from '../../services/drivers.service';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {

  id: string = '';
  driver: DriverStandig = {} as DriverStandig

  constructor(private activatedRoute: ActivatedRoute, private driversService: DriversService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(
      params => {
        this.id = params['id'];
      }
    )

    this.driversService.getDrivers().subscribe( response => {
      this.driver = response.filter(x => x.Constructors.name == this.id)[0];
    })
    //this.rider = this.polePositionService.getRiderByID(this.id);


  }

}
