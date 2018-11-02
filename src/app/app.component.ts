import {  Component, OnInit } from "@angular/core";
import { TestService } from "./test.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  msg: string = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio quis, illum rem similique quo minus harum cupiditate. Error, aspernatur blanditiis. Vero eligendi natus ullam temporibus voluptates animi ex amet tenetur!';

  // imageUrl: string = 'https://miro.medium.com/max/854/1*WgROsTKa6diRYTG5K0R5mw.jpeg';

  constructor(private test: TestService) {

  }

  ngOnInit() {
    console.log(this.test.sum(9, 4));
  }

}
