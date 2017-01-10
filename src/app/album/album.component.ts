
import { Component, OnInit } from '@angular/core';
import { SpotifyService } from "../service/spotify.service";
import { Album } from "../model/album.model";
import { Artist } from "../model/artist.model";

import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})
export class AlbumComponent implements OnInit {
    id: string;
  artist: Artist[];
  album: Album[];

  constructor(private _spotifyService: SpotifyService, private _route: ActivatedRoute) { }


  ngOnInit() {
     this._route.params.map(params => params['id'])
      .subscribe((id) => {
        this._spotifyService.getAlbum(id)
          .subscribe(album => {
            this.album = album;
          })
      })
  }

}
