# MAST_POE
Culinary Master - Chef's Menu Manager 

A React Native application for managing restaurant menus, allowing chefs to add, remove, and organize menu items by courses. 

Changelog 

Part 3 - Final Portfolio of Evidence Updates (October 30, 2025) 

New Features 

Course-based Average Price Display 

Added average price calculation functionality for each course type 

Implemented a new dashboard view showing price statistics 

Enhanced visual presentation of menu statistics 

Dedicated Menu Management Screen 

Moved menu item addition from home screen to a dedicated management screen 

Added ability to view all menu items in one place 

Implemented item removal functionality 

Enhanced user feedback for menu operations 

Menu Item Storage 

Implemented array-based storage for menu items 

Added type safety with TypeScript interfaces 

Improved state management using React Context 

Course Filtering 

Added new filtering system to view items by course 

Implemented tab-based navigation for course selection 

Enhanced empty state handling for filtered views 

Added direct navigation to filtered views from dashboard 

 

Code Improvements 

Context Management 

Added new context functions: 

removeItem for menu item deletion 

getAveragePriceByCourse for price calculations 

Enhanced getItemsByCourse functionality 

Improved type safety throughout context usage 

Component Structure 

Separated concerns between screens 

Enhanced component reusability 

Improved prop typing and validation 

User Interface 

Consistent styling across all screens 

Enhanced visual feedback for user actions 

Improved empty state handling 

Added loading states where necessary 

Navigation 

Streamlined navigation between screens 

Added deep linking support for course filtering 

Improved navigation state management 

Bug Fixes 

Fixed type safety issues across components 

Improved error handling in form submissions 

Enhanced data validation for menu items 

Fixed navigation issues between screens 

Running the Application 

Clone the repository 

Install dependencies: bash npm install 

Start the development server: bash npm start 

Technologies Used 

React Native 

TypeScript 

Expo 

React Navigation 

React Context API 

Features 

Add and remove menu items 

Organize items by course type 

View average prices by course 

Filter menu items by course 

Detailed item view with full information 

Interactive dashboard with menu statistics 

Project Structure 

src/ ├── components/ # Reusable UI components ├── context/ # Application state management ├── navigation/ # Navigation configuration ├── screens/ # Main application screens └── types/ # TypeScript type definitions 
