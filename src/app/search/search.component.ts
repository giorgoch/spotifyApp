import { Component, OnInit } from '@angular/core';
import { SpotifyService } from "../service/spotify.service";
import { Artist } from "../model/artist.model"

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  providers: [SpotifyService]
})
export class SearchComponent implements OnInit {

  searchStr: string;
searchRes :Artist[];


  constructor(private _spotifyService: SpotifyService) { }

  ngOnInit() {
  }

  searchMusic() {
    console.log(this.searchStr);
    this._spotifyService.searchMusic(this.searchStr)
    .subscribe(res => {
      //console.log(res.artists.items);
      this.searchRes= res.artists.items;
    })
  }

}
