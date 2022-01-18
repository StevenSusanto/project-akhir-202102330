import { Component, OnInit } from '@angular/core';
import { TambahData } from '../model/tambah-data.model';
import { TambahDataComponent } from '../model/tambah-data.model';

@Component({
  selector: 'app-tambah-data',
  templateUrl: './tambah-data.component.html',
  styleUrls: ['./tambah-data.component.css']
})
export class TambahDataComponent implements OnInit {

  tambahdatas?:TambahData[];
  currentTambahData:TambahData={};
  name='';
  constructor(private tambahdataService:TambahDataService) { }

  ngOnInit(): void {
    this.retrieveTambahData()
  }

  retrieveTambahData():void{
    this.tambahdataService.getAll()
    .subscribe(
      data=>{
        this.tambahdatas=data;
        console.log(data);
      },
      error=>{
        console.log(error)
      }
    )
  }
}
