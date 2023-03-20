import { Component, Input } from '@angular/core';
import { News } from 'src/models/news';

@Component({
  selector: 'app-read-new',
  templateUrl: './read-new.component.html',
  styleUrls: ['./read-new.component.css']
})
export class ReadNewComponent {

  @Input() newItem: News;
}
