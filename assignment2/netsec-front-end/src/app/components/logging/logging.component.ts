import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-logging',
  templateUrl: './logging.component.html',
  styleUrls: ['./logging.component.css']
})
export class LoggingComponent implements OnInit{

  loggings: any;

  constructor(private auth: AuthService) { }

  ngOnInit(): void {
    this.auth.loggings().subscribe({
      next: (data:any) => {
        console.log(data.loggingList);
        this.loggings = data.loggingList;
      }
    });
  }

  

}
