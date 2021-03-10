import { Component, OnInit } from '@angular/core';
import { AlbumsService } from '../albums.service';
import { Album, Photo } from '../models';

@Component({
  selector: 'app-album-photos',
  templateUrl: './album-photos.component.html',
  styleUrls: ['./album-photos.component.css']
})
export class AlbumPhotosComponent implements OnInit {
  photos: Photo[];
  album: Album;
  constructor(private albumsService:AlbumsService) {this.photos = []; }

  ngOnInit(): void {
  }
  showPhotos(){
    this.albumsService.showPhotos(this.album.id).subscribe((photos)=>{this.photos = photos;})
  }
}
