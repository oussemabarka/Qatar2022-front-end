import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Qatar2022';
  constructor(public httpClient: HttpClient) { }
  sendGetRequest() {
    this.httpClient.get('http://localhost:8090/api/getequipes').subscribe((res) => {
        console.log(res);
    });
}

}
