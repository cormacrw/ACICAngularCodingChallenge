import { Component, OnInit } from '@angular/core';
import { LineOfBusiness } from '../LineOfBusiness';
import { LineOfBusinessService } from '../lineOfBusiness.service';

@Component({
  selector: 'app-linesOfBusiness-popular',
  templateUrl: './linesOfBusiness-popular.component.html',
  styleUrls: ['./linesOfBusiness-popular.component.css'],
})
export class LinesOfBusinessPopularComponent implements OnInit {
  linesOfBusiness: LineOfBusiness[] = [];

  constructor(private lineOfBusinessService: LineOfBusinessService) {}

  ngOnInit() {
    this.getLinesOfBusiness();
  }

  getLinesOfBusiness(): void {
    this.lineOfBusinessService
      .getLinesOfBusiness()
      .subscribe((linesOfBusiness) => {
        // sort the lines of business by quotes then only show top 2
        this.linesOfBusiness = linesOfBusiness
          .sort((a, b) => b.quotes.length - a.quotes.length)
          .slice(0, 2);
        console.log(this.linesOfBusiness);
      });
  }
}
