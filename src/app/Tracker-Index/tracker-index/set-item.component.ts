import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SetItem } from 'src/app/models/set-items';
import { GetSetItemsService } from 'src/app/services/get-set-items.service'

@Component({
  selector: 'app-set-item',
  templateUrl: './set-item.component.html',
  styleUrls: ['./set-item.component.scss']
})
export class SetItemComponent implements OnInit{
  cardTitle:string="Edit Set"
  id:number
  set: SetItem={
    id: 0,
    exerciseName:"",
    exerciseId:0,
    workoutId:0,
    muscleGroup:"",
    weight:0,
    reps:0
  }
  constructor(
    private route : ActivatedRoute, 
    private getSetItemsService : GetSetItemsService
  ) {}

  ngOnInit(): void {
    this.id = Number(this.route.snapshot.paramMap.get('id'))
    this.getSetItemsService.getSetById(this.id).subscribe((set:SetItem)=>{
      this.set=set
    })
    console.log(`ShowComponent for id ${this.id}`)
  }
  updateSet=(set:SetItem,id:number)=>{
    this.getSetItemsService.saveSet(set).subscribe()
  }
}
