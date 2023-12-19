import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {InfoApiVA} from "../common/interface-va";

@Injectable({
  providedIn: 'root'
})
export class ValorantagentsService {

  private URI = "https://valorant-api.com/v1/agents";
  constructor(private http:HttpClient) {}

  getAgents(): Observable<InfoApiVA>{
    return this.http.get<InfoApiVA>(this.URI);
  }
}
