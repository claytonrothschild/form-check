import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Video } from './video';
import { VideoService } from './video.service';
@Component({
  moduleId: module.id,
  selector: 'home',
  templateUrl: 'home.component.html',
  styleUrls: [ 'home.component.css' ]
})
export class HomeComponent implements OnInit {

  videos: Video[] = [];

  constructor(
    private router: Router,
    private videoService: VideoService) {
  }

  ngOnInit(): void {
    this.videoService.getVideos()
      .then(videos => this.videos = videos.slice(1, 5));
  }

  gotoDetail(video: Video): void {
    let link = ['/watch', video.id];
    this.router.navigate(link);
  }
}