import { Component } from '@angular/core';
import { MusicControls } from '@ionic-native/music-controls';

@Component({
  selector: 'playingMusic',
  templateUrl: 'playingMusic.html'
})

export class PlayingMusic {
  constructor(private musicControls: MusicControls) {
  }
}
