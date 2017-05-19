import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { ProductLine } from '../models/product-line';
import * as firebase from 'firebase';

interface Image {
    path: string;
    filename: string;
    downloadURL?: string;
    $key?: string;
}

@Component({
  selector: 'app-edit-product-line',
  templateUrl: './edit-product-line.component.html',
  styleUrls: ['./edit-product-line.component.css'],
  host: {
    class: 'full-width'
  }
})
export class EditProductLineComponent implements OnInit {
  productLines: FirebaseListObservable<any>;
  productLine: ProductLine;
  af: AngularFireDatabase;
  isOver: boolean;
  constructor(public db: AngularFireDatabase) { 
    this.productLines = db.list('/product-lines');
    this.productLine = new ProductLine('', '', '');
    this.isOver = false;
  }

  ngOnInit() {
  }

  onDrop(event) {
    event.preventDefault();
    this.isOver = false;
    this.upload(event)
  }
  allowDrop(event) {
    
    event.dataTransfer.dropEffect = 'move';
    event.preventDefault();
    this.isOver = true;
  }
  onDragOut(event) {
    event.preventDefault();
    this.isOver = false;
  }

  onsubmit() {}

  upload(event) {
    console.log(event)
    // Create a root reference
    const storageRef = firebase.storage().ref();
    let selectedFile;

    if (event.dataTransfer) {
      const dt = event.DataTransfer
      if (dt.items) {
        if (dt.items[0].kind == "file") {
          var f = dt.items[0].getAsFile();
          console.log(f.name);
        }
      } else {
        // Use DataTransfer interface to access the file(s)
          console.log(dt.files[0].name);
      }
    } else if(event.target) {
      selectedFile = event.target.files[0];
    } else  {
      console.log('Error: unknown upload event')
    }

    
      
        console.log(selectedFile);

        const path = `/images/${selectedFile.name}`;
        const iRef = storageRef.child(path);
        iRef.put(selectedFile).then((snapshot) => {
            console.log('Uploaded a blob or file! Now storing the reference at',`/images`);
            this.productLine.imageUrl = snapshot.downloadURL;
        });
        
    }
    delete(path:string) {

        const ref = path.match(/.*\/o\/(.*)\?.*/)[1].replace('%2F','/');
        console.log(ref)
        
        firebase.storage().ref().child(ref).delete()
        .then(
            () => { 
              this.productLine.imageUrl = ''
            },
            (error) => console.error("Error deleting stored file",path)
        );
            
        

    }
    save() {
      this.productLines.push(this.productLine).then(
        (x) => { console.log(x)},
        (x) => { console.log(x)}
      )
    }
}
