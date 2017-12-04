import { Component } from '@angular/core';
import { MusicControls } from '@ionic-native/music-controls';

@Component({
  selector: 'playingMusic',
  templateUrl: 'playingMusic.html'
})

export class PlayingMusic {
  constructor(private musicControls: MusicControls) {
    console.log(musicControls, MusicControls)
  }

  // createMusicControls(track: string, artist: string, cover: string){
  //     this.musicControls.create({
  //       track       : track,        // optional, default : ''
  //       artist      : artist,                       // optional, default : ''
  //       cover       : cover,      // optional, default : nothing
  //       // cover can be a local path (use fullpath 'file:///storage/emulated/...', or only 'my_image.jpg' if my_image.jpg is in the www folder of your app)
  //       //           or a remote url ('http://...', 'https://...', 'ftp://...')
  //       isPlaying   : true,                         // optional, default : true
  //       dismissable : false,                         // optional, default : false

  //       // hide previous/next/close buttons:
  //       hasPrev   : true,      // show previous button, optional, default: true
  //       hasNext   : true,      // show next button, optional, default: true
  //       hasClose  : true,       // show close button, optional, default: false

  //       // Android only, optional
  //       // text displayed in the status bar when the notification (and the ticker) are updated
  //       ticker    : 'Now playing "'+track+'"'
  //     });
      
  //     MusicControls.subscribe().subscribe(action => {
  //       switch(action) {
  //           case 'music-controls-next':
  //               this.next();
  //               break;
  //           case 'music-controls-previous':
  //               this.prev();
  //               break;
  //           case 'music-controls-pause':
  //               this.pause();
  //               break;
  //           case 'music-controls-play':
  //               this.play();
  //               break;
  //           case 'music-controls-destroy':
  //               soundManager.pause("sound");
  //               soundManager.unload("sound");
  //               soundManager.destroySound("sound");
  //               break;

  //           // Headset events (Android only)
  //           case 'music-controls-media-button' :
  //               // Do something
  //               break;
  //           case 'music-controls-headset-unplugged':
  //               this.pause();
  //               break;
  //           case 'music-controls-headset-plugged':
  //               this.play();
  //               break;
  //           default:
  //               break;
  //       }

  //     });
  //     MusicControls.listen(); // activates the observable above
  //     MusicControls.updateIsPlaying(true);
  //   }
}
