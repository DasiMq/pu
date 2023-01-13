import { Component, ElementRef, ViewChild } from '@angular/core';
import { YoutubeService } from './services/youtube.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'yt-meta-data-extractor';

  @ViewChild('channelName') channelName!: ElementRef;

  channels: any

  constructor(private youtube: YoutubeService) { }

  ngOnInit() {
    this.youtube.getChannels("Laptop").subscribe((data) => {
      console.log(data)
      this.channels = data.items
    })

    this.getData();
  }

  getData() {

    var channelName = this.channelName.nativeElement.value

    this.youtube.getChannels(channelName).subscribe((data) => {
      console.log(data)
      this.channels = data.items
    })
  }

}
