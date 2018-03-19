import { Component, OnInit } from '@angular/core';
import { HomePageService } from "../home-page.service";
@Component({
  moduleId: module.id,
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  data: any

  constructor(
    private homePageService: HomePageService
  ) { }

  ngOnInit() {
    this.extractData()
  }

  async extractData() {
    await this.homePageService.getData()
      .then((result) => {
        this.data = result.message;
        console.log(JSON.stringify(this.data))
      })
      .catch((error) => {
        console.log(error);
      });
  }
}
