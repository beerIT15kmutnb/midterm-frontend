import { Component, OnInit } from '@angular/core';
import { HomePageService } from "../home-page.service";
@Component({
  moduleId: module.id,
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  data:any

  constructor(
    private homePageService : HomePageService
  ) { }

  ngOnInit() {
    this.extractData()
   }

  extractData() {
    this.homePageService.getData()
        .subscribe((result) => {
          this.data = result[0];
          console.log(this.data)
        }, (error) => {
            console.log(error);
        });
}




}
