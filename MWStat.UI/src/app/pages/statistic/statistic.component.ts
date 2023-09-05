import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { formatDate } from "@angular/common";
import { Component, OnInit, QueryList, ViewChildren } from "@angular/core";
import { MatPaginator } from "@angular/material/paginator";
import { MatTableDataSource } from "@angular/material/table";
import Chart from 'chart.js';
import { ApiConstants } from "src/app/constants/api.constants";
import { HttpWrapper } from "src/app/services/httpWrapper.service";
import { Notification } from 'src/app/services/notification.service';
import { HttpResponse } from '@angular/common/http';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: "app-statistic",
  templateUrl: "statistic.component.html"
})

export class StatisticComponent implements OnInit {
  public canvas : any;
  public ctx;
  public datasets: any;
  public data: any;
  public myChartData;
  public clicked: boolean = true;
  public minFollowers = Number.MAX_VALUE;
  public maxFollowers = 0;
  public minFollowing = Number.MAX_VALUE;
  public maxFollowing = 0;
  public newTableTitle: string = 'New Followers';
  public lostTableTitle: string = 'Lost Followers';
  public newTableEmptyText: string = 'No new Followers';
  public lostTableEmptyText: string = 'No lost Followers';
  public firstSubDataset: any;
  public secondSubDataset: any;
  public notFollowingDataset: any;
  public newFollowersDataset:any[][];
  public newFollowingsDataset:any[][];
  public lostFollowersDataset:any[][];
  public lostFollowingsDataset:any[][];
  public displayedColumns: string[] = ['profilePic', 'username', 'actions'];
  public currentTimeAreaId: number = 0;
  public currentTimeArea: string;
  public request: Observable<HttpResponse<any>>;
  public notFollowingBackRequest: Observable<HttpResponse<any>>;
  public range: FormGroup = new FormGroup({
    start: new FormControl(),
    end: new FormControl()
  });
  @ViewChildren(MatPaginator) paginator = new QueryList<MatPaginator>();

  constructor(private http: HttpWrapper, private notification: Notification, private router: Router) {}

  ngOnInit() {
    this.request = this.http.get(ApiConstants.STATISTIC_GET_FOLLOWERS_AND_FOLLOWING);
    this.request.subscribe(result => {
      this.updateChart(result);
    }, error=>{
      this.router.navigate(['/login']);
    });
    this.notFollowingBackRequest = this.http.get(ApiConstants.USERS_WHO_NOT_FOLLOWING_BACK);
    this.notFollowingBackRequest.subscribe(result=> {
      this.updateNotFollowingBackSection(result);
    }, error =>{
      this.notification.showNotification(error);
    });
  }

  ngAfterViewInit(){
    this.request.subscribe(()=>
    {
      this.updateNewLostDatasetsPaginators()
    });
  }

  public updateOptions() {
    this.myChartData.data.datasets[0].data = this.data;
    if(this.clicked) {
      this.myChartData.options.scales.yAxes[0].ticks.suggestedMax = this.maxFollowers;
      this.myChartData.options.scales.yAxes[0].ticks.suggestedMin = this.minFollowers;
      this.myChartData.data.datasets[0].label = 'Followers';
      this.newTableTitle = 'New Followers';
      this.lostTableTitle = 'Lost Followers';
      this.newTableEmptyText = 'No new Followers';
      this.lostTableEmptyText = 'No lost Followers';
    } else {
      this.myChartData.options.scales.yAxes[0].ticks.suggestedMax = this.maxFollowing;
      this.myChartData.options.scales.yAxes[0].ticks.suggestedMin = this.minFollowing;
      this.myChartData.data.datasets[0].label = 'Following';
      this.newTableTitle = 'New Followings';
      this.lostTableTitle = 'Lost Followings';
      this.newTableEmptyText = 'No new Followings';
      this.lostTableEmptyText = 'No lost Followings';
    }
    this.updateNewLostDatasets();
    this.myChartData.update();
  }

  public clickOnPoint(click){
    var points = this.myChartData.getElementsAtEventForMode(click, 'nearest', { intersect: true }, true);
    if(points[0]) {
      if(this.currentTimeAreaId==points[0]._index)
        return;
      this.currentTimeAreaId = points[0]._index;
      this.currentTimeArea = this.myChartData.data.labels[this.currentTimeAreaId];
      this.updateNewLostDatasets();
    }
  }

  public checkOnSetLength(source: MatTableDataSource<any[][]>){
    if(!source)
    {      
      return false;
    }
    if(!source.data)
    {
      return false;
    }
    if(source.data.length > 0) {
      return true;
    }
    else {
      return false;
    }
  }

  private updateNewLostDatasets() {
    if(this.clicked) {
      this.firstSubDataset = new MatTableDataSource(this.newFollowersDataset[this.currentTimeAreaId]);
      this.secondSubDataset = new MatTableDataSource(this.lostFollowersDataset[this.currentTimeAreaId]);
    } else {
      this.firstSubDataset = new MatTableDataSource(this.newFollowingsDataset[this.currentTimeAreaId]);
      this.secondSubDataset = new MatTableDataSource(this.lostFollowingsDataset[this.currentTimeAreaId]);
    }
  }

  private updateNewLostDatasetsPaginators() {
    this.firstSubDataset.paginator = this.paginator.toArray()[0];
    this.secondSubDataset.paginator = this.paginator.toArray()[1];
  }

  public onDateChanged()
  {
    var value = this.range.get('start').value;
    var from, to = null;
    if(value)
      from = formatDate(this.range.get('start').value, 'dd.MM.yyyy', 'en-GB');    
    value = this.range.get('end').value;
    if(value)
      to = formatDate(this.range.get('end').value, 'dd.MM.yyyy', 'en-GB');
    this.http.get(ApiConstants.STATISTIC_GET_FOLLOWERS_AND_FOLLOWING+'?from='+from+'&to='+to).subscribe(result=>{
      this.updateChart(result);
    });
  }

  private updateNotFollowingBackSection(result){
    this.notFollowingDataset = new MatTableDataSource(result.body);
    this.notFollowingDataset.paginator = this.paginator.toArray()[2];
  }

  private updateChart(result) {
    if(this.myChartData)
      this.myChartData.destroy();
    var chart_labels = [];
    var dataset:string[][] = [];
    this.newFollowersDataset = [result.body.length];
    this.newFollowingsDataset = [result.body.length];
    this.lostFollowersDataset = [result.body.length];
    this.lostFollowingsDataset = [result.body.length];
    this.currentTimeAreaId = result.body.length - 1;

    for(var i: number = 0; i < 2; i++) {
      dataset[i] = [];
    }
    for(var i: number = 0; i < result.body.length; i++) {
      this.newFollowersDataset[i] = [];
      this.newFollowingsDataset[i] = [];
      this.lostFollowersDataset[i] = [];
      this.lostFollowingsDataset[i] = [];
    }

    var counter: number = 0;
    result.body.forEach(element => {
      chart_labels.push(formatDate(element.StampDateTime, 'dd/MM/yyyy HH:mm', 'ru-RU'));
      dataset[0].push(element.FollowersCount);
      dataset[1].push(element.FollowingCount);

      for(var i: number = 0; i < element.Accounts.length; i++) {
        if(element.Accounts[i].Relation == ApiConstants.RELATION_TYPE.NewFollower)
          this.newFollowersDataset[counter].push({Username: element.Accounts[i].Username, ProfilePicUrl: element.Accounts[i].ProfilePicUrl, Pk: element.Accounts[i].Id});
        if(element.Accounts[i].Relation == ApiConstants.RELATION_TYPE.LostFollower)
          this.lostFollowersDataset[counter].push({Username: element.Accounts[i].Username, ProfilePicUrl: element.Accounts[i].ProfilePicUrl, Pk: element.Accounts[i].Id});
        if(element.Accounts[i].Relation == ApiConstants.RELATION_TYPE.NewFollowing)
          this.newFollowingsDataset[counter].push({Username: element.Accounts[i].Username, ProfilePicUrl: element.Accounts[i].ProfilePicUrl, Pk: element.Accounts[i].Id});
        if(element.Accounts[i].Relation == ApiConstants.RELATION_TYPE.LostFollowing)
          this.lostFollowingsDataset[counter].push({Username: element.Accounts[i].Username, ProfilePicUrl: element.Accounts[i].ProfilePicUrl, Pk: element.Accounts[i].Id});
      }

      if(this.minFollowers > element.FollowersCount)
        this.minFollowers = element.FollowersCount;
      if(this.maxFollowers < element.FollowersCount)
        this.maxFollowers = element.FollowersCount;
      if(this.minFollowing > element.FollowingCount)
        this.minFollowing = element.FollowingCount;
      if(this.maxFollowing < element.FollowingCount)
        this.maxFollowing = element.FollowingCount;
      counter++;
    });

    var gradientChartOptionsConfigurationWithTooltipRed: any = {
      maintainAspectRatio: false,
      legend: {
        display: false
      },
      tooltips: {
        backgroundColor: '#f5f5f5',
        titleFontColor: '#333',
        bodyFontColor: '#666',
        bodySpacing: 4,
        xPadding: 12,
        mode: "nearest",
        intersect: 0,
        position: "nearest"
      },
      responsive: true,
      scales: {
        yAxes: [{
          barPercentage: 1.6,
          gridLines: {
            drawBorder: false,
            color: 'rgba(29,140,248,0.0)',
            zeroLineColor: "transparent",
          },
          ticks: {
            suggestedMin: this.minFollowers,
            suggestedMax: this.maxFollowers,
            padding: 20,
            fontColor: "#9a9a9a",
            precision: 0
          }
        }],  
        xAxes: [{
          barPercentage: 1.6,
          gridLines: {
            drawBorder: false,
            color: 'rgba(233,32,16,0.1)',
            zeroLineColor: "transparent",
          },
          ticks: {
            padding: 20,
            fontColor: "#9a9a9a"
          }
        }]
      }
    };

    this.datasets = dataset;
    this.data = this.datasets[0];
    this.updateNewLostDatasets();

    this.canvas = document.getElementById("chartBig1");
    this.ctx = this.canvas.getContext("2d");

    var gradientStroke = this.ctx.createLinearGradient(0, 230, 0, 50);

    gradientStroke.addColorStop(1, 'rgba(233,32,16,0.2)');
    gradientStroke.addColorStop(0.4, 'rgba(233,32,16,0.0)');
    gradientStroke.addColorStop(0, 'rgba(233,32,16,0)');

    var config = {
      type: 'line',
      data: {
        labels: chart_labels,
        datasets: [{
          label: "Followers",
          fill: true,
          backgroundColor: gradientStroke,
          borderColor: '#ec250d',
          borderWidth: 2,
          borderDash: [],
          borderDashOffset: 0.0,
          pointBackgroundColor: '#ec250d',
          pointBorderColor: 'rgba(255,255,255,0)',
          pointHoverBackgroundColor: '#ec250d',
          pointBorderWidth: 20,
          pointHoverRadius: 12,
          pointHoverBorderWidth: 15,
          pointRadius: 6,
          data: this.data,
        }]
      },
      options: gradientChartOptionsConfigurationWithTooltipRed
    };
    this.myChartData = new Chart(this.ctx, config);
    this.currentTimeArea = this.myChartData.data.labels[this.currentTimeAreaId];
    this.myChartData.canvas.onclick = (click)=>this.clickOnPoint(click);
  }

  public updateStatistic(){
    this.http.get(ApiConstants.STATISTIC_UPDATE_FOLLOWERS_AND_FOLLOWING).subscribe(result=>{
      this.notification.showNotification('Data successfully updated.');
      this.onDateChanged();
    });
  }

  public follow(pk)
  {
    this.http.get(ApiConstants.PROFILE_INTERACTION_FOLLOW + '?pk=' + pk).subscribe(result=>{
      this.notification.showNotification('Sucessfully followed.');
    });
  }

  public unfollow(pk)
  {
    this.http.get(ApiConstants.PROFILE_INTERACTION_UNFOLLOW + '?pk=' + pk).subscribe(result=>{
      this.notification.showNotification('Sucessfully unfollowed.');
    });
  }
}
