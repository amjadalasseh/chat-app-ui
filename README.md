# Chat App UI

> **Note:** Initially, I started working on this test using a private GitHub account by mistake. Due to strict permission roles, I couldn't transfer the code to my own repository. Since I was originally told to share the code in a ZIP file, I worked quickly without noticing the private account issue. To resolve this, I created a new repository to share the project with you.

## Overview

This project is a chat application built with Next.js and React, designed with modularity, maintainability, and scalability in mind. The application follows best practices in UI/UX, accessibility, and performance, ensuring a seamless user experience.

## Technical Proficiency

- **Clean, Modular, and Reusable Code:** The code is structured to be modular and reusable, making it easy to maintain and extend.
- **Preferred Tech Stack:** The project is built using:
  - Next.js
  - React
  - Zustand for state management
  - Tailwind CSS for styling
  - ESLint and Prettier for code quality
  - Storybook for UI component visualization
  - Google API Gemini for AI-powered interactions
  - Jest for unit testing

## Project Structure

```
/src
 ├── app/               # Application entry and page containers
 ├── components/        # Reusable UI components with no business logic
 ├── features/         # Feature-specific components with business logic
 ├── utilities/        # Generic utility functions
 ├── services/         # API integration and service logic
 ├── store/            # Zustand state management store
 ├── theme/            # Standardized theme for colors and spacing
```

## Environment Variables

To configure the application properly, create an **`.env.local`** file in the root directory and add the following environment variables:

```
NEXT_PUBLIC_API_BASE_URL=<your-api-url>
NEXT_PUBLIC_GOOGLE_API_KEY=<your-google-api-key>

```

the token is shared with the email with Nina

### **Environment Considerations**

- **Environment Configuration:** The project uses an `.env.local` file to manage environment-specific variables.
- **No Sensitive Data Exposure:** Sensitive credentials and API keys are not stored in the codebase.
- **Environment-Specific Configurations:** Different environments (development, production) can have their respective configurations.

## Key Features

- **Reusable UI Components:** All stateless components are placed under `components/` for reusability.
- **Feature-Specific Components:** Components with business logic are kept under `features/`.
- **Standardized Theme:** Tailwind CSS theme ensures consistent colors and spacing.
- **Utility Functions:** Generic helper functions are placed in `utilities/` for easy reuse.
- **Google API Gemini Integration:** Connected under `services/` for AI-powered interactions.
- **Error Handling & Notifications:** Toast notifications enhance the user experience.
- **Scalability Considerations:** The architecture allows for easy expansion of features and state management.

## Performance Optimization

- **Lazy Loading & Code Splitting:** Implemented to ensure efficient loading times and reduce bundle size.
- **Optimized Image Rendering:** Using Next.js image component for better performance.
- **SSR/SSG Strategies:** Leveraging Next.js server-side rendering (SSR) and static site generation (SSG) where necessary.

## Security Considerations

- **Security Headers:** Implemented `Content-Security-Policy` and other HTTP security headers in `next.config.js`.
- **XSS Protection & Input Sanitization:** Ensuring user inputs are sanitized to prevent cross-site scripting attacks.
- **Authentication Security:** Securing API requests and authentication flows to prevent vulnerabilities.

## Setup & Installation

1. Clone the repository:
   ```sh
   git clone <repository-url>
   cd chat-app-ui
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Create an **`.env.local`** file in the root directory:

   ```
   NEXT_PUBLIC_API_BASE_URL=<your-api-url>
   NEXT_PUBLIC_GOOGLE_API_KEY=<your-google-api-key>
   NEXT_PUBLIC_GEMINI_API_KEY=AIzaSyAYsJJNP8o7bsI2FRJvoWYs0b-ma-uzJCE

   ```

4. Run the development server:
   ```sh
   npm run dev
   ```
5. Run tests:
   ```sh
   npm test
   ```
6. View components in Storybook:
   ```sh
   npm run storybook
   ```

## Conclusion

This project follows best coding practices, ensuring modularity, maintainability, and performance. The integration of Zustand, Tailwind, Storybook, and automated testing makes it a scalable and developer-friendly solution. Additionally, security, accessibility, and performance optimizations have been implemented to ensure high-quality development.
