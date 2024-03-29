import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppareilService } from '../services/appareil.service';

@Component({
  selector: 'app-single-appareil',
  templateUrl: './single-appareil.component.html',
  styleUrls: ['./single-appareil.component.scss']
})
export class SingleAppareilComponent implements OnInit {
  appareil: any;

  constructor(private appareilService: AppareilService, private route: ActivatedRoute){

  }


  ngOnInit(){
    const id = this.route.snapshot.params['id'];
    this.appareil = this.appareilService.getAppareilById(+id);
  }




}
