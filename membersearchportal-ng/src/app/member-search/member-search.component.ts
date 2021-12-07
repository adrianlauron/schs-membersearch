import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { mergeMap, filter } from 'rxjs/operators';
import { ApiRequest } from 'src/models/apirequest.model';
import { MemberService } from 'src/service/member.service';
import { SearchService } from 'src/service/search.service';

@Component({
  selector: 'app-member-search',
  templateUrl: './member-search.component.html',
  styleUrls: ['./member-search.component.css']
})
export class MemberSearchComponent implements OnInit {

  public policyNumber: string = '';
  public memberCardNumber: string = '';
  public triggeredSubmit: boolean = false;
  public dateToday: Date = new Date();

  constructor(private route: Router,
    private memberService: MemberService,
    private searchService: SearchService
    ) { }

  ngOnInit(): void {

  }

  public handleChange(e: any)
  {
    this.triggeredSubmit = false;
  }

  public handleClick(e: any)
  {
    this.policyNumber = '';
    this.memberCardNumber = '';

    this.triggeredSubmit = false;
  }

  public handleSubmit(e: any) {
    this.triggeredSubmit = true;
    if(this.policyNumber || this.memberCardNumber) this.getMember();
  }

  public handleQuery() : ApiRequest {
    return {
      policyNumber: this.policyNumber,
      memberCardNumber: this.memberCardNumber
    }
  }

  private getMember() {
    this.memberService.getMember(JSON.stringify(this.handleQuery()))
      .pipe(
        filter(res => !!res),
        mergeMap(res => this.searchService.saveSearch(res)),
      )
      .subscribe(() => {
        this.route.navigate(['/results'])
      });
  }

}
