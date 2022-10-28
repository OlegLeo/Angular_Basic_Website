import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Driver } from '../../assets/F1DriverStandings';
import { Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TeamService {

  constructor(private httpClient: HttpClient) { }

private requestUrl: string = '../../assets/DriverStandings.json'

getDrivers() : Observable<Driver[]> {
  return this.httpClient.get<Driver[]>(this.requestUrl);
}
}
