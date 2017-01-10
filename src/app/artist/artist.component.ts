import { Component, OnInit } from '@angular/core';
import { SpotifyService } from "../service/spotify.service";
import { Album } from "../model/album.model";
import { Artist } from "../model/artist.model";

import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.css']
})
export class ArtistComponent implements OnInit {

  id: string;
  artist: Artist[];
  albums: Album[];

  constructor(private _spotifyService: SpotifyService,private _route:ActivatedRoute) { }

  ngOnInit() {
    this._route.params.map(params => params['id'] )
    .subscribe((id) =>{
      this._spotifyService.getArtist(id)
      .subscribe(artist=> {
        this.artist=artist;
      })
    })
  }



}
