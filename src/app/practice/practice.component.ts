import { Component, OnInit } from '@angular/core';
import{ MatDialog} from '@angular/material/dialog';
import { DataService } from '../data.service';

@Component({
  selector: 'app-practice',
  templateUrl: './practice.component.html',
  styleUrls: ['./practice.component.css']
})
export class PracticeComponent implements OnInit {
  ELEMENT_DATA: any []= [];
  ouput : any ;
  orders_all: any[]=[];
  dataSource = this.ELEMENT_DATA;
  title : any = 'CSP554';
  displayedColumns: string[] = ['cust_id', 'ord_date', 'price', 'items'];
  table_all: boolean = false;
  constructor( private dialogRef : MatDialog, private dataService: DataService) { 
  }

  ngOnInit(): void {
  }

  getAllOrders(){
    // This is to display dialog box

    // let dialog = this.dialogRef.open(DialogContentExampleDialog);
    // dialog.afterClosed().subscribe(result => {
    //   console.log(`Dialog result: ${result}`);
    // });
    this.table_all = true;
    if(this.orders_all.length == 0){
      this.dataService.getAllOrders({}).subscribe((data:any) =>{
        this.orders_all = data;
      });
    }
  }

  clearAll(){
    this.table_all = false;
  }

  closeDialogue(){
    this.dialogRef.closeAll();
  }
}

@Component({
  selector: 'dialog-content-example-dialog',
  templateUrl: './practiceDialog.component.html',
  styleUrls: ['./practice.component.css']
})
export class DialogContentExampleDialog {
  output : any;
  constructor( private dataService: DataService){
    //this.fire();
  }
  ngOnInit(): void {
    this.fire();
  }
  fire(){
    this.dataService.getPosts({postName:"test"}).subscribe((data:any) =>{
      this.output = data[0].postName;
    });
    this.dataService.getAllOrders({}).subscribe((data:any) =>{
      console.log(data);
    });
    //console.log(this.output)
    let k = 3;
    let input : any = [1,2,3,3,4,5];
    let count = 0;
    //console.log(Math.min(...input));
    let map = new Map();
    for(let i = 0; i<input.length;i++){
      if(map.has(input[i])){
        map.set(input[i],map.get(input[i])+1);
      }
      else{
        map.set(input[i],1);
      }
    }
    for(let [key,value] of map){
      if(value%2 == 1){
        count++;
      }
    }
    //console.log(this.output);
    //this.output=count;
    this.test();
  }

  test(){
    let k = 2;
    let input : any = [5,3,5,7,8];
    let finalCount=0;
    let count = 1;
    let index=0;
    for(let i=0;i<input.length;i++){
      if(input[i]<input[i+1]){
        count++;
        if(count == k){
          finalCount++;
          index++;
          i = index-1;
          count = 1;
        }
      }
      else{
        count = 1;
        index = i+1;
      }
    }
    console.log(finalCount)
  }
}
