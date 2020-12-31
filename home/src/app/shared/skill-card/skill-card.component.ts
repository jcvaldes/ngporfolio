import { Component, OnInit } from '@angular/core';
import { HttpService } from '@core/services/http.service';
import urljoin from 'url-join';
import { environment } from '@env';

@Component({
  selector: 'app-skill-card',
  templateUrl: './skill-card.component.html',
  styleUrls: ['./skill-card.component.scss']
})
export class SkillCardComponent implements OnInit {
  url: string = urljoin(environment.apiUrl, 'skill')
  skills: any[] = [];
  constructor(private httpService: HttpService) {
    httpService.get(this.url).subscribe(data => {
      this.skills = data.rows;
    })
  }
  ngOnInit(): void {
  }

}
