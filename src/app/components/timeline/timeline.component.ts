import { Component, ElementRef, Input, signal, ViewChild  } from '@angular/core';
import { FrontPageSection } from "../../types/movie.interface";
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { heroChevronLeftSolid, heroChevronRightSolid } from "@ng-icons/heroicons/solid";
import { heroChevronRight } from "@ng-icons/heroicons/outline";
import { HighCardComponent } from "../high-card/high-card.component";

@Component({
  selector: 'app-timeline',
  imports: [HighCardComponent, NgIconComponent],
  providers: [provideIcons({ heroChevronRight, heroChevronRightSolid, heroChevronLeftSolid })],
  templateUrl: './timeline.component.html',
  styleUrl: './timeline.component.css',
})
export class TimelineComponent {
  @ViewChild('timelineContainer') timelineContainer!: ElementRef;

  currentSection = signal(0);

  @Input() section!: FrontPageSection;

  ngAfterViewInit() {
    this.updateMaxSections();
    this.timelineContainer.nativeElement.addEventListener('scroll', this.onScroll.bind(this));
  }

  get maxSections(): number {
    if (!this.section?.data) return 0;

    const itemsPerView = this.getItemsPerView();
    return Math.max(0, Math.ceil(this.section.data.length / itemsPerView) - 1);
  }

  getItemsPerView(): number {
    const width = window.innerWidth;
    if (width >= 1024) return 6;
    if (width >= 768) return 3;
    return 2;
  }

  updateMaxSections() {
    window.addEventListener('resize', () => {
      this.currentSection.update(val => val);
    });
  }

  nextSection() {
    const max = this.maxSections;
    this.currentSection.update(val => Math.min(val + 1, max));
    this.scrollToSection();
  }

  prevSection() {
    this.currentSection.update(val => Math.max(val - 1, 0));
    this.scrollToSection();
  }

  scrollToSection() {
    if (!this.timelineContainer) return;

    const container = this.timelineContainer.nativeElement;
    const itemsPerView = this.getItemsPerView();
    const currentIndex = this.currentSection();

    const itemWidth = container.scrollWidth / this.section.data.length;
    const scrollPosition = currentIndex * itemsPerView * itemWidth;

    container.scrollTo({
      left: scrollPosition,
      behavior: 'smooth'
    });
  }

  isPrevDisabled(): boolean {
    return this.currentSection() <= 0;
  }

  isNextDisabled(): boolean {
    return this.currentSection() >= this.maxSections;
  }

  onScroll() {
    const container = this.timelineContainer.nativeElement;
    const itemsPerView = this.getItemsPerView();
    const itemWidth = container.scrollWidth / this.section.data.length;
    const scrollLeft = container.scrollLeft;
    const section = Math.round(scrollLeft / (itemsPerView * itemWidth));
    if (section !== this.currentSection()) {
      this.currentSection.set(section);
    }
  }

  ngOnDestroy() {
    if (this.timelineContainer) {
      this.timelineContainer.nativeElement.removeEventListener('scroll', this.onScroll.bind(this));
    }
  }
}
