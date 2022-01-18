import { Component, OnInit } from '@angular/core';
import { TambahData } from '../model/tambah-data.model';
import { TambahDataService } from '../services/tambah-data.service';

@Component({
  selector: 'app-tambah-data',
  templateUrl: './tambah-data.component.html',
  styleUrls: ['./tambah-data.component.css']
})
export class TambahDataComponent implements OnInit {

  tambahdata?:TambahData[];
  currentTambahData:TambahData={};
  name = '';
  constructor(private tambahdataservice:TambahDataService ) { }

  ngOnInit(): void {
    this.retrieveTambahData()
  }
  retrieveTambahData():void{
    this.tambahdataservice.getAll()
      .subscribe(
        data=>{
          this.tambahdata=data;
          console.log(data);
        },
        error=>{
          console.log(error)
        }
      )
  }
}