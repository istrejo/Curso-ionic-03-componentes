import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../core/models/user.interface';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private http: HttpClient) {}

  getUsers() {
    return this.http
      .get<User[]>('https://jsonplaceholder.typicode.com/users')
      .pipe(
        map((data) =>
          data.map((user) => {
            return { ...user, afavorite: false };
          })
        )
      );
  }
}
