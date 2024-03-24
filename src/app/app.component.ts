import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NotesListComponent } from './notes-list/notes-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NotesListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'SecondAngular';
}
