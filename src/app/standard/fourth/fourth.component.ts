import { Component, OnInit } from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
@Component({
  selector: 'app-fourth',
  templateUrl: './fourth.component.html',
  styleUrls: ['./fourth.component.scss']
})
export class FourthComponent implements OnInit {

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
      
        
            this.firestore.collection('Freecontent').ref.where('Class','==','fourth').get().then((querySnapshot)=>{
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