import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Driver, DriverStandig } from '../../../assets/F1DriverStandings';

@Component({
  selector: 'app-driver-detail',
  templateUrl: './driver-detail.component.html',
  styleUrls: ['./driver-detail.component.css']
})
export class DriverDetailComponent implements OnInit {
  
  @Input() public element : DriverStandig = {} as DriverStandig;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  GoToDetail(id: number){
    this.router.navigate(['team/', id]);
    }

    goToBottom(){
      window.scrollTo(0,document.body.scrollHeight);
    }
    
}
