# WealthHealth - HRnet

#### Switch a jQuery library to React

## Scenario
HRnet alone accounts for about 90% of the total tech debt. It uses jQuery on the front end which leads to bugs and makes the system less efficient and unstable.

## Prerequisites

-   [NodeJS](https://nodejs.org/en/)  Version 14.16.0
-   [NPM](https://www.npmjs.com/package/npm)  Version 8.6.0
-   [Visual Studio Code](https://code.visualstudio.com/)  or another IDE of your choice

## Dependencies

- react : Version 18.2.0,
- react-router-dom:  Version 6.3.0,
- reduxjs/toolkit: Version 1.8.5,
- date-fns:  Version 2.29.2,
- prop-types: Version 15.8.1,
- react-hook-form:  Version 7.34.2,
- react-redux:  Version 8.0.2,
- react-table:  Version 7.8.0,
- redux-persist : Version 6.0.0,
- redux-thunk: Version 2.4.1,
- sass : Version 1.54.7,

## Objective

### HRNet p**strong text**roject conversion

-   The whole HRNet application has to be converted to React.
-   Make a new version of the "Create Employee" and "Employee List" pages with React.
-   Add a state management system (the current version uses local storage).
-   Make sure that everything is consistent in style. No need to redesign the application, but if so, change the style to something more modern.
-   If time, test the React code with a unit test suite. Otherwise, only manual tests are needed.

### Plugin conversion

Here is the list of currently used jQuery plugins that need to be converted:

-   **Date picker plugin**
-   **Modal window plugin - jQuery.modal.js**
-   **Drop down menus**
-   **Plugin for data tables**

### Performance testing

-   The company wants to measure quantifiable data (e.g. page load times, network calls) to ensure that converting the app to React actually improves performance. To do this, do **Lighthouse** performance audits. To compare, do one for the current jQuery HRnet application, and then another once the application and the chosen jQuery plugin are converted to React.
-   Once the HRnet app in React is working, publish the React component to npm as a package and share the link it can used later if needed.

## Technical constraints

-   Follow a functional programming paradigm when writing these libraries in React.
-   Avoid using classes when you convert the old application.
-   Write smaller, modular pieces of code and standalone functions for optimal modularity and maintainability.
-   When converting a jQuery plugin to a React component, keep in mind to convert only the code that deals with the actual functionality of the plugin's user interface. For example, if you convert a jQuery plugin for a modal window, focus on creating a React component that works as a modal window, and nothing else.
-   Document the converted React component with a general description of what the component does and comments explaining what each accessory is for and how it is used.

## Summary of the main tasks:

-   Convert the entire HRNet project to React.
-   Convert one of the four current jQuery plugins to React. Replace the 3 remaining jQuery plugins with React components.
-   Perform Lighthouse performance tests comparing the old and new application.

## Install and run the project

-   Clone the repository onto your computer : git clone `https://github.com/Laurene45/LaureneCourde_14_31082022.git`
    
-   Inside this repository, install the packages/dependencies :  `npm install`
    
-   Run the Api:  `npm start`
    
The App runs on  [http://localhost:3000/](http://localhost:3000/)


##  Plugin Modal (StoryBook) : 
Version : 0.2.0

 -  Run StoryBook : `npm run storybook`
 -  Package NPM : [lc_modal_custom_projet14](https://www.npmjs.com/package/lc_modal_custom_projet14)
 - Package sur Github : [LaureneCourde_14_31082022_Modal](https://github.com/Laurene45/LaureneCourde_14_31082022_Modal)
 
 

