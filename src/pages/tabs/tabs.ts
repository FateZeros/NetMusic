import { Component } from '@angular/core';

import { HomePage } from '../home/home';
import { MymusicPage } from '../mymusic/mymusic';
import { FriendPage } from '../friend/friend';
import { MinePage } from '../mine/mine';

@Component({
  templateUrl: 'tabs.html'
})

export class TabsPage {

  tab1Root = HomePage;
  tab2Root = MymusicPage;
  tab3Root = FriendPage;
  tab4Root = MinePage;

  constructor() {

  }
}
