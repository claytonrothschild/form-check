import { Video } from './video';
import { VIDEOS } from './mock-videos';
import { Injectable } from '@angular/core';

@Injectable()
export class VideoService {
  getVideos(): Promise<Video[]> {
    return Promise.resolve(VIDEOS);
  }

  getVideo(id: number): Promise<Video> {
    return this.getVideos()
               .then(videos => videos.find(video => video.id === id));
  }
}