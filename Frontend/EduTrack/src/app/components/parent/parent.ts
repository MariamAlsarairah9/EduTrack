import { Component } from '@angular/core';
import { ParentService } from '../../services/parent.service';
import { ParentInterface } from '../../interfaces/parent-interface';

@Component({
  selector: 'app-parent',
  imports: [],
  templateUrl: './parent.html',
  styleUrl: './parent.css'
})
export class Parent {
  constructor(private _ParentService: ParentService) { }

  parent: ParentInterface | null = null;  // مش مصفوفة



  ngOnInit() {

    this.parentinfo(1);

  }


  parentinfo(id: number) {

    this._ParentService.GetParent(id).subscribe({
      next: (res: any) => {

        this.parent = res;
      },
      error: err => {// failed request | 400 , 500
        console.log(err.error.message ?? err.error ?? "Unexpected Error");
      }



    })
  }


}
