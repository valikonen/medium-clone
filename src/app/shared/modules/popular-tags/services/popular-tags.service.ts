import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { PopularTagType } from 'src/app/shared/types/popular-tag.interface';
import { environment } from 'src/environments/environment';
import { GetPopularTagsResponseInterface } from '../types/get-popular-tags-response.model';

@Injectable({
    providedIn: 'root'
})
export class PopularTagsService {
    constructor(private http: HttpClient) {}

    getPopularTags(): Observable<PopularTagType[]> {
        const url = environment.APP_URL + '/tags';
        return this.http.get(url).pipe(
            map( (response: GetPopularTagsResponseInterface) => {
                return response.tags
            })
        )
    }
}