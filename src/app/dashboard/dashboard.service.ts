import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../environments/environment';
import { Trip } from 'src/app/shared/models/Trip';


@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(private http: HttpClient) { }

  getTrips(): Observable<Trip[]> {  
    return this.http.get<Trip[]>(`${environment.tripsURL}/trips`)
  }
}
