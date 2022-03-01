import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DatatimeService {

  constructor() { }
  today = new Date();
}
