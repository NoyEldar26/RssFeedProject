import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { RssDataService } from 'src/services/rss-data-service.service';
import { News } from 'src/models/news';
import { RSSModel } from 'src/models/RSSModel';
import * as xml2js from "xml2js";
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-list-news',
  templateUrl: './list-news.component.html',
  styleUrls: ['./list-news.component.css']
})
export class ListNewsComponent {
  @Input() news: Array<News> = [];

  @Output() selectedItem: EventEmitter<News> = new EventEmitter();
  @Output() isRefresh: EventEmitter<boolean> = new EventEmitter();
  title = 'החדשות';
  selectedNew?: News;

  onSelect(newItem: News): void {
    this.selectedNew = newItem;
    this.selectedItem.emit(newItem);
    console.log(this.selectedNew);
  }

  constructor() {

  }


  onRefresh() {
    this.isRefresh.emit(true);
  }

  public selected(selected: News) {
    this.selectedItem.emit(selected);
  }

}
