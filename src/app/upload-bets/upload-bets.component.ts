import { Component, OnInit } from "@angular/core";

import { HttpEventType, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: "app-upload-bets",
  templateUrl: "./upload-bets.component.html",
  styleUrls: ["./upload-bets.component.css"]
})
export class UploadBetsComponent implements OnInit {

  public option:string[];
  public campoIdSeleccionado:string;
  public campoNombreSeleccionado:string;
  public campoTelefonoSeleccionado:string;
  public fileName:string;
  public cantidadFilas:number;
  public cantidadxUsuario:number;

  private currentFile: File;
  public progress = 0;
  public message = '';

  constructor(
    //private uploadService: UploadFileService
    ) { }

  ngOnInit() {}


  upload() {

      this.progress = 0;


  this.uploadService.upload(this.currentFile).subscribe(
    event => {
      if (event.type === HttpEventType.UploadProgress) {
        this.progress = Math.round(100 * event.loaded / event.total);
      } else if (event instanceof HttpResponse) {
        this.message = event.body.message;
        
      }
    },
    err => {
      this.progress = 0;
      this.message = 'Could not upload the file!';
      this.currentFile = undefined;
    });

  }

  handleFileSelect(evt) {
    const files = evt.target.files; // FileList object

    const file = files[0];
    this.fileName = file.name;
    this.currentFile = file;

    const reader = new FileReader();
    reader.readAsText(file);
    reader.onload = (event) => {
      console.log("file", event.target);
      const csv = event.target.result; // Content of CSV file
      this.extractData(csv); //Here you can call the above function.
    };
  }

  private extractData(data) {
    // Input csv data to the function

    let csvData = data;
    let allTextLines = csvData.split(/\r\n|\n/);
    let headers = allTextLines[0].split(";");

    if(headers.length < 2 ){
      throw new Error("El formato del archivo es incorrecto");
    }

    console.log(headers);

    this.option = headers;
    this.cantidadFilas = allTextLines.length - 1;

    let lines = [];

    for (let i = 0; i < 10; i++) {
      // split content based on comma
      let data = allTextLines[i].split(";");
      if (data.length == headers.length) {
        let tarr = [];
        for (let j = 0; j < headers.length; j++) {
          tarr.push(data[j]);
        }
        lines.push(tarr);
      }
    }
    console.log(lines); //The data in the form of 2 dimensional array.
  }
}
