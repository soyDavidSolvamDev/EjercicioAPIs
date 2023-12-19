import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {InfoApiFS} from "../common/interface-fs";

@Injectable({
  providedIn: 'root'
})
export class FinalSpaceService {

  private URI= 'https://finalspaceapi.com/api/v0/character/';
  constructor(private http: HttpClient) { }

  getCharacterFS(): Observable<InfoApiFS>{
    return this.http.get<InfoApiFS>(this.URI);
  }
}
