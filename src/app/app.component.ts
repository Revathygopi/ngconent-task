import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgContentComponent } from './ng-content/ng-content.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,NgContentComponent ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
 

}
