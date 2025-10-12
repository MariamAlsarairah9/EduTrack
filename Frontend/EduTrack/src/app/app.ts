import { Component, signal } from '@angular/core';
// import { RouterOutlet } from '@angular/router';
import { RouterOutlet, RouterLink, RouterLinkActive, Router} from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,RouterLink,RouterLinkActive],
  templateUrl: './app.html',
  styleUrl: './app.css'
})


export class App {
  protected readonly title = signal('EduTrack');
  router: any;
  constructor( private route:Router){}
    
//    
  
shownavBar() : boolean{
  return this.route.url !=='/login'
}
}
