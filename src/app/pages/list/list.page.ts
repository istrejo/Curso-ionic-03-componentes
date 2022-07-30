import { Component, OnInit, ViewChild } from '@angular/core';
import { IonList } from '@ionic/angular';
import { User } from 'src/app/core/models/user.interface';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {
  @ViewChild('userList') ionList: IonList;

  users: User[] = [];
  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.dataService
      .getUsers()

      .subscribe((users) => (this.users = users));
  }

  favorite(user: User) {
    user.favorite = !user.favorite;
    console.log('Favorite user', user);
    this.ionList.closeSlidingItems();
  }

  share(user: User) {
    console.log('Shared user', user);
    this.ionList.closeSlidingItems();
  }
  delete(user: User, index: number) {
    this.users.splice(index, 1);
    console.log('Deleted user', user);
    this.ionList.closeSlidingItems();
  }
}
