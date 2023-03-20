import { Component } from '@angular/core';
import { RssDataService } from 'src/services/rss-data-service.service';
import { News } from 'src/models/news';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {
  title: 'החדשות';
  news: News[] = [];
  selectedItem: News;
  isRefresh: boolean = false;
  hasSelectedItem: boolean = false;

  constructor(private rssDataService: RssDataService) {

  }
  ngOnInit(): void {
    this.showNews();
  }

  showNews() {
    this.rssDataService.getNews()
      .subscribe((data: any) => this.news = data);

  }

  public onSelectedNews(newItem: News) {
    this.selectedItem = newItem;
    this.hasSelectedItem = true;
  }

  onRefresh(refresh: boolean) {
    this.isRefresh = true;
    this.showNews();
  }


}
