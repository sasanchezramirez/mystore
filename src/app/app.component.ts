import { Component } from '@angular/core';
import { album } from './album.model';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  album = 'Nothing';
  title = 'MyStore';
  likes: number = 0;

  showTheWall() {
    this.album = "The Wall"
  }
  showTheDarkSideOfTheMoon() {
    this.album = "The Dark Side Of The Moon"
  }
  showMeadle() {
    this.album = "Meddle"
  }

  like(){
    this.likes ++
  }

  dislike(){
    this.likes --
  }

  songs: number[] = [1,2,3,4,5];

  theWall: album = {
    name: 'The Wall',
    year: 1979,
    img: 'https://e00-marca.uecdn.es/assets/multimedia/imagenes/2023/01/18/16740641595837.jpg'
    }
  theDarkSideOfTheMoon: album = {
    name: 'The Dark Side Of The Moon',
    year: 1973,
    img: 'https://www.latercera.com/resizer/8Tc3uWqI4WgWON5xT8jHWdCsGKU=/420x0/smart/cloudfront-us-east-1.images.arcpublishing.com/copesa/MKLFMFLWYJB5BLSHLP3WPTOFGU.jpg'
    }
  meddle: album = {
    name: 'Meddle',
    year: 1970,
    img: 'https://upload.wikimedia.org/wikipedia/en/thumb/d/d4/MeddleCover.jpeg/220px-MeddleCover.jpeg'
    }
}

