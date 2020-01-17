import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';


@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {
 public books = [];
  constructor(private apiService: ApiService) { }

  ngOnInit() {
    
    this.apiService.getBooks().subscribe(data => this.
      books = data);
  }

}
