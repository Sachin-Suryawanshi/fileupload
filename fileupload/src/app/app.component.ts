import { Component, OnInit } from '@angular/core';
import { FileuploadService } from './fileupload.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'fileupload';

  constructor(private fileuploadservice: FileuploadService) {}
  ngOnInit(): void {}
}
