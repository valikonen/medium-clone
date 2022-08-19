import { Component, Input, OnInit } from '@angular/core';
import { PopularTagType } from '../../../../types/popular-tag.interface';

@Component({
    selector: 'mc-tag-list',
    templateUrl: './tag-list.component.html',
    // styleUrls: ['./name.component.scss']
})
export class TagListComponent implements OnInit {

    @Input('tags') tagsProps: PopularTagType[];
    constructor() { }

    ngOnInit(): void { }
}
