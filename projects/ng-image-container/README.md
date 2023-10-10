# ng-image-container

ng-image-container: Angular component for enhanced, accessible image presentation.

![npm](https://img.shields.io/npm/v/%40commudle%2Fng-image-container?logo=npm&link=https%3A%2F%2Fgithub.com%2Fcommudle%2Fng-image-container)
![NPM](https://img.shields.io/npm/l/%40commudle%2Fng-image-container)

The ng-image-container is an Angular component that enhances image presentation in web applications. It allows users to specify image sources, set custom aspect ratios for containers, and provide accessibility with alternative text. It automatically handles background blur when the aspect ratio doesn't match the image's aspect ratio, ensuring a visually pleasing and accessible image display. This component is easy to install and use in Angular projects, contributing to a more engaging user experience.

**Demo:**
[Preview](https://www.commudle.com/communities/cdn-commudle-developer-network/events/connectivity-and-storage-in-docker-containers)

## Table of Contents

- [Usage](#usage)
- [Installation](#installation)
- [License](#license)
- [Issues and Feedback](#issues-and-feedback)

## Usage

Here's a brief overview of the available options and features of ng-image-container:

1. [src]: Specifies the source URL of the image to be displayed.
2. [aspectRatio]: Allows you to set the aspect ratio of the image container, e.g., 16/9 for a widescreen aspect ratio.
3. [alt]: Provides alternative text for the image for accessibility purposes.

## Installation

To use `ng-image-container` in your Angular project, follow these steps:

1. Install the library using npm or yarn:

```bash
npm install @commudle/ng-image-container
# or
yarn add @commudle/ng-image-container
```

2. Import the NgImageContainerModule into your Angular module (e.g., app.module.ts):

```typescript
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { NgImageContainerModule } from "@commudle/ng-image-container";

@NgModule({
  declarations: [
    // ...
  ],
  imports: [
    BrowserModule,
    NgImageContainerModule, // Import the NgImageContainerModule here
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
```

3. Start using the ng-image-container component in your templates:

```html
<ng-image-container [src]="'your-image-url.jpg'" [aspectRatio]="16/9" [alt]="'Image Alt Text'"></ng-image-container>
```

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Issues and Feedback

If you encounter any issues or have suggestions for improvements, please feel free to open an issue on the GitHub repository.
<https://github.com/commudle/ng-image-container/issues>

We welcome contributions from the community, so if you'd like to contribute, please read our contribution guidelines.
