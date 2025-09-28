import { Component, signal } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
// import { RouterOutlet } from '@angular/router';
import { RouterOutlet, RouterLink, RouterLinkActive, Route, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,RouterLink,RouterLinkActive],
  templateUrl: './app.html',
  styleUrl: './app.css'
})


export class App {
  protected readonly title = signal('EduTrack');
  



}
