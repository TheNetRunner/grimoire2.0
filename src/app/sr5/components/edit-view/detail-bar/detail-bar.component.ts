import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-detail-bar',
  templateUrl: './detail-bar.component.html',
  styleUrl: './detail-bar.component.css'
})
export class DetailBarComponent {
    @Input() karmaSpent: number = 0;
    @Input() karmaTotal: number = 0;
}
