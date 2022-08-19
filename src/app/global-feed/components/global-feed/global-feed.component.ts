import { Component, OnInit } from '@angular/core';

@Component({
    // selector: 'app-name',
    templateUrl: './global-feed.component.html',
    // styleUrls: ['./name.component.scss']
})
export class GlobalFeedComponent implements OnInit {

    apiUrl = '/articles';
    
    constructor() { }

    ngOnInit(): void { }
}
