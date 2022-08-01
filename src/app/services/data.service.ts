import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../core/models/user.interface';
import { map } from 'rxjs/operators';
import { Album, Componente, Superhero } from '../core/models/interfaces';

const USERS = 'https://jsonplaceholder.typicode.com/users';
const ALBUMS = 'https://jsonplaceholder.typicode.com/albums';
const OPTS = '/assets/data/menu-opts.json';
const HEROES = '/assets/data/superheroes.json';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private http: HttpClient) {}

  getUsers() {
    return this.http.get<User[]>(USERS).pipe(
      map((data) =>
        data.map((user) => {
          return { ...user, afavorite: false };
        })
      )
    );
  }

  getAlbums() {
    return this.http.get<Album[]>(ALBUMS);
  }

  getMenuOpts() {
    return this.http.get<Componente[]>(OPTS);
  }
  getHeroes() {
    return this.http.get<Superhero[]>(HEROES);
  }
}
