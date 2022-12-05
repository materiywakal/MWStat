import { formatDate } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import Chart from 'chart.js';
import { ApiConstants } from "src/app/constants/api.constants";
import { HttpWrapper } from "src/app/services/httpWrapper.service";

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
  public clicked1: boolean = false;
  public clicked2: boolean = false;
  public minFollowers = Number.MAX_VALUE;
  public maxFollowers = 0;
  public minFollowing = Number.MAX_VALUE;
  public maxFollowing = 0;

  constructor(private http: HttpWrapper) {}

  ngOnInit() {

    this.http.get(ApiConstants.STATISTIC_GET_FOLLOWERS_AND_FOLLOWING)
    .subscribe(result => {
      
      var chart_labels = [];
      var dataset:string[][] = [];

      for(var i: number = 0; i < 2; i++) {
        dataset[i] = [];
      }
      result.body.forEach(element => {
        chart_labels.push(formatDate(element.StampDateTime, 'dd/MM/yyyy HH:mm', 'ru-RU'));
        dataset[0].push(element.FollowersCount);
        dataset[1].push(element.FollowingCount);
        if(this.minFollowers > element.FollowersCount)
        {
          this.minFollowers = element.FollowersCount;
        }
        if(this.maxFollowers < element.FollowersCount)
        {
          this.maxFollowers = element.FollowersCount;
        }
        if(this.minFollowing > element.FollowingCount)
        {
          this.minFollowing = element.FollowingCount;
        }
        if(this.maxFollowing < element.FollowingCount)
        {
          this.maxFollowing = element.FollowingCount;
        }
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
              suggestedMin: 0,
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
            pointHoverRadius: 4,
            pointHoverBorderWidth: 15,
            pointRadius: 4,
            data: this.data,
          }]
        },
        options: gradientChartOptionsConfigurationWithTooltipRed
      };
      this.myChartData = new Chart(this.ctx, config);
    });
  }
  public updateOptions() {
    this.myChartData.data.datasets[0].data = this.data;
    if(this.clicked1) {
      this.myChartData.options.scales.yAxes[0].ticks.suggestedMax = this.maxFollowers;
      this.myChartData.data.datasets[0].label = 'Followers';
    } else {
      this.myChartData.options.scales.yAxes[0].ticks.suggestedMax = this.maxFollowing;
      this.myChartData.data.datasets[0].label = 'Followering';
    }
    this.myChartData.update();
  }
}
