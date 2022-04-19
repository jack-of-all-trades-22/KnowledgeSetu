import { Component, OnInit } from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
@Component({
  selector: 'app-seventh',
  templateUrl: './seventh.component.html',
  styleUrls: ['./seventh.component.scss']
})
export class SeventhComponent implements OnInit {

  List=[]
  model={
    video:'',
    class:'',
    sub:'',
    document:''
  }
    constructor(public cookieService:CookieService,public router:Router,public firestore:AngularFirestore) { 
     
      console.log(this.List)
        }
  
    ngOnInit(): void {
      
        
            this.firestore.collection('Freecontent').ref.where('Class','==','seventh').get().then((querySnapshot)=>{
              querySnapshot.forEach((doc)=>{
               
                this.model.video=doc.data()['VideoURL'];
                this.model.class=doc.data()['Class'];
                this.model.sub=doc.data()['Subject'];
                this.model.document=doc.data()['DocumentURL']
                this.List.push(this.model)
                
              });
                console.log(this.List)
              
            })
      
  
  
    }
  
  }
