import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {InfoApiWeapons} from "../common/interface-weapons";

@Injectable({
  providedIn: 'root'
})
export class MhwWeaponsService {

  private URI = 'https://mhw-db.com/weapons?q={%22id%22:{%22$gte%22:1,%22$lte%22:20}}';
  constructor(private http: HttpClient) { }

  getWeapons(): Observable<InfoApiWeapons>{
    return this.http.get<InfoApiWeapons>(this.URI);
  }
}
