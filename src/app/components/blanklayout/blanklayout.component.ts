import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-blanklayout',
  standalone: true,
  imports: [RouterOutlet,RouterModule],
  templateUrl: './blanklayout.component.html',
  styleUrl: './blanklayout.component.css'
})
export class BlanklayoutComponent {

}
