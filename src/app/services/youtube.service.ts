import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class YoutubeService {

  constructor(private http:HttpClient) { }

  getChannels(channelName: string):Observable<any> {

    const API_KEY = "AIzaSyAw2UEkH1sJ-ri3wWtvTBH9JrCsV4EWxmk"

    const url = "https://www.googleapis.com/youtube/v3/search?part=snippet&q="+channelName+"&type=channel&key="+API_KEY+"&maxResults=1"

    return this.http.get<any>(url)
  }
}
