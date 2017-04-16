import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Route } from '@angular/router';
import * as firebase  from 'firebase';

import { FirebaseService } from '../../services/firebase.service';

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.css']
})
export class ListingComponent implements OnInit {
  id: any;
  listing: any;
  imageUrl: any;
  constructor(private fireBaseService: FirebaseService,
  private router: Router,
  private activateRoute: ActivatedRoute ) { }

  ngOnInit() {
    this.id = this.activateRoute.snapshot.params['id'];
    this.fireBaseService.getListingDetails(this.id).subscribe(listing => {
      this.listing = listing;

      let storageRef = firebase.storage().ref();
      let spaceRef = storageRef.child(this.listing.path);
      storageRef.child(this.listing.path).getDownloadURL().then( url => {
        this.imageUrl = url;
      }).catch( error => {
        console.log(error);
      });
    } )
  }

  onDeleteClick(){
    this.fireBaseService.deleteListing(this.id);
    this.router.navigate(['/listings']);
  }

}
