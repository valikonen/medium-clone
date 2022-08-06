import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { GetFeedResponseInterface } from '../models/get-feed-response.model';

@Injectable()
export class FeedService {

    constructor(private http: HttpClient) {}

    getFeed(url: string): Observable<GetFeedResponseInterface> {
        const fullUrl = environment.APP_URL + url;

        return this.http.get<GetFeedResponseInterface>(fullUrl);

    }

}