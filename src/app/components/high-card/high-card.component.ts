import { Component, Input } from '@angular/core';
import { NgIconComponent, provideIcons } from "@ng-icons/core";
import { heroPlusCircleSolid } from "@ng-icons/heroicons/solid";
import { ContentItem } from "../../types/movie.interface";

@Component({
  selector: 'app-high-card',
  imports: [NgIconComponent],
  providers: [provideIcons({ heroPlusCircleSolid })],
  templateUrl: './high-card.component.html',
  styleUrl: './high-card.component.css',
})
export class HighCardComponent {
  @Input() movie!: ContentItem;
}
