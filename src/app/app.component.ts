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
  }

  getData() {
    // const urlMetadata = require('url-metadata')
    // urlMetadata('http://bit.ly/2ePIrDy').then(
    //   function (metadata) { // success handler
    //     console.log(metadata)
    //   },
    //   function (error) { // failure handler
    //     console.log(error)
    //   })
    
    var channelName = this.channelName.nativeElement.value

    this.youtube.getChannels(channelName).subscribe((data) => {
      console.log(data)
      this.channels = data.items
    })
  }

}
