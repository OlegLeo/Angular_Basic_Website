import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Driver, DriverStandig } from '../../assets/F1DriverStandings';
import { Observable} from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class DriversService {

constructor(private httpClient: HttpClient) { }

private requestUrl: string = '../../assets/DriverStandings.json'

getDrivers() : Observable<DriverStandig[]> {
  return this.httpClient.get<DriverStandig[]>(this.requestUrl);
}



}
