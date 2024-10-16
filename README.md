# TooltipComponent

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.2.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

# Tooltip Component

A versatile tooltip component for Angular that provides contextual information on hover or click interactions. The tooltip can be customized to appear in various positions and remains responsive and accessible across devices.

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Component Architecture](#component-architecture)
- [Technologies Used](#technologies-used)
- [Design Decisions](#design-decisions)
- [License](#license)

## Installation

To integrate the tooltip component into your Angular project, follow these steps:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/yourusername/tooltip-component.git
   cd tooltip-component
Install dependencies: Make sure you have Angular and its CLI installed. Then run:


npm install
Add the Tooltip Component:

Copy the tooltip folder (which contains the component) to your project directory, usually within the src/app folder.
Import the TooltipComponent into your desired module:



import { TooltipComponent } from './tooltip/tooltip.component'; // Adjust the path as necessary

@NgModule({
  declarations: [
    // other components,
    TooltipComponent
  ],
  imports: [
    CommonModule // Ensure CommonModule is imported for directives
  ]
})
export class YourModule {}

Usage
To use the tooltip component, simply add it to your HTML with the desired properties:

  <app-tooltip tooltipText="This is a tooltip!" position="top">
    <button>Hover or Click me</button>
  </app-tooltip>

Tooltip Properties
tooltipText: The text to be displayed in the tooltip.
position: Position of the tooltip (top, bottom, left, right).
Component Architecture
The tooltip component is structured to provide two modes of interaction:

Hover Mode: The tooltip appears when the user hovers over the target element and disappears when the mouse moves away.
Click Mode: The tooltip remains visible until the user clicks outside or clicks a designated close button.

File Structure:
src/
  app/
    tooltip/
      tooltip.component.ts   // Component logic
      tooltip.component.html  // Component template
      tooltip.component.scss   // Component styles
      
Technologies Used:
Angular: The framework used to build the component.
TypeScript: The programming language for writing the component logic.
HTML/CSS: For structuring and styling the tooltip.
CommonModule: For Angular directives like *ngIf and *ngClass.

Design Decisions:
Flexibility: The tooltip is designed to allow customization of position, making it adaptable to different layouts.
Accessibility: It incorporates ARIA attributes to ensure that it is usable with screen readers and is keyboard navigable.
Responsiveness: The tooltip adapts to various screen sizes, ensuring a consistent user experience.
Independent Tooltips: Each tooltip maintains its visibility state independently, allowing multiple tooltips to be opened simultaneously without interference.
