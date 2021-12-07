import { Component, OnInit, Input } from '@angular/core';
import { ApiRequest } from 'src/models/apirequest.model';
import { SearchService } from 'src/service/search.service';
import { SearchResult } from 'src/models/searchresult.model';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css']
})
export class SearchResultsComponent implements OnInit {
  @Input() query!: ApiRequest;

  public searchResults: Array<SearchResult> = [];

  constructor(private searchService: SearchService) { }

  ngOnInit(): void {
    this.getSearchResults();
  }

  public getSearchResults() {
    this.searchService.getSearchResult()
      .subscribe(res => {
        this.searchResults = res;
      })
  }
}
