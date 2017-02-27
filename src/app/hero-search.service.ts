/**
 * Created by lv-wei on 2017-02-27.
 */
import {Injectable} from "@angular/core";
import {Http, Response} from "@angular/http";
import {Observable} from "rxjs";
import {Hero} from "./hero";
import 'rxjs/add/operator/map';

@Injectable()
export class HeroSearchService {
  constructor(private http: Http) {
  }

  search(term: string): Observable<Hero[]> {
    return this.http
      .get(`app/heroess/?name=${term}`)
      .map((r: Response) => r.json().data as Hero[]);
  }
}
