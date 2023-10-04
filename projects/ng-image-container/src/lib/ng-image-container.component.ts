import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'lib-ng-image-container',
  template: `
    <div
      *ngIf="src"
      class="image-container"
      [ngStyle]="{ 'aspect-ratio': aspectRatio }"
    >
      <div
        class="background"
        [ngStyle]="{ 'background-image': 'url(' + src + ')' }"
      ></div>
      <div class="image-section">
        <img alt="{{ title }}" src="{{ src }}" title="{{ title }}" />
      </div>
    </div>
  `,
  styles: [
    `
      :host {
        display: block;
        width: 100%;
      }
      .image-container {
        position: relative;
        overflow: hidden;
        width: 100%;
      }
      .background {
        margin: 0 auto;
        width: 100%;
        max-width: 100%;
        height: 100%;
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        z-index: 0;
        filter: blur(0.125rem);
      }
      .image-section {
        display: flex;
        justify-content: center;
      }
      .image-section img {
        height: 100%;
        position: absolute;
        top: 0;
      }
    `,
  ],
})
export class NgImageContainerComponent {
  @Input() src!: string;
  @Input() title!: string;
  @Input() aspectRatio = '16/6';
}
