import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'mc-tag-feed',
    templateUrl: './tag-feed.component.html',
    // styleUrls: ['./name.component.scss']
})
export class TagFeedComponent implements OnInit {

    tagName: string;
    apiUrl: string;
    
    constructor(private router: ActivatedRoute) { }

    ngOnInit(): void {
        this.tagName = this.router.snapshot.paramMap.get('slug');
        this.apiUrl = `/articles?tag=${this.tagName}`;
    }
}
