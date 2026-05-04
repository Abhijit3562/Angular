# 🔥 Angular Basics & Architecture

## 🎯 1. What is Angular and why is it used?

**👉 One-liner:**  
Angular is a TypeScript-based front-end framework used to build scalable Single Page Applications (SPAs).

**📖 Explanation:**  
Angular provides a complete solution for frontend development including routing, state management, HTTP communication, and form handling. It follows a component-based architecture which makes applications modular, maintainable, and scalable.

---

## 🎯 2. Explain Angular architecture

**👉 One-liner:**  
Angular follows a component-based architecture with modules, components, services, and dependency injection.

**📖 Explanation:**  
- **Modules** organize the application
- **Components** control UI
- **Templates** define HTML views
- **Services** contain business logic
- **Dependency Injection (DI)** manages dependencies  
Flow: User Action → Component → Service → API → Response → UI Update

---

## 🎯 3. What is SPA? Advantages?

**👉 One-liner:**  
SPA (Single Page Application) loads a single HTML page and dynamically updates content without reloading.

**📖 Explanation:**  
Advantages:
- Faster navigation (no full reload)
- Better user experience
- Reduced server load
- Client-side rendering improves performance

---

## 🎯 4. Angular vs React vs Vue?

**👉 One-liner:**  
Angular is a full-fledged framework, while React and Vue are lightweight libraries.

**📖 Explanation:**  
- **Angular:** Complete solution (routing, DI, forms)
- **React:** UI library, needs external tools
- **Vue:** Lightweight, easy to learn  
Angular is preferred for enterprise-scale applications.

---

## 🎯 5. What are building blocks of Angular?

**👉 One-liner:**  
Core building blocks are Components, Modules, Templates, Services, and Dependency Injection.

**📖 Explanation:**  
- Component → UI logic  
- Module → grouping  
- Template → HTML view  
- Service → reusable logic  
- DI → inject dependencies efficiently  

---

## 🎯 6. What is TypeScript and why Angular uses it?

**👉 One-liner:**  
TypeScript is a strongly typed superset of JavaScript used for better maintainability and error detection.

**📖 Explanation:**  
- Provides static typing
- Supports OOP concepts
- Helps catch errors at compile time  
Angular uses TypeScript to build large-scale, maintainable applications.

---

## 🎯 7. What is Angular CLI?

**👉 One-liner:**  
Angular CLI is a command-line tool used to create, build, and manage Angular applications.

**📖 Explanation:**  
It automates development tasks like:
- Project creation
- Component/service generation
- Build and deployment  
Example:
```bash
ng new app
ng generate component user
```

---

## 🎯 8. What is change detection?

**👉 One-liner:**
Change detection is the process by which Angular updates the DOM when application data changes.

**📖 Explanation:**
Angular automatically tracks changes in component data and updates the UI.
Default strategy checks all components, ensuring synchronization between model and view.

---

## 🎯 9. What are decorators?

**👉 One-liner:**
Decorators are special functions that add metadata to classes, methods, or properties.

**📖 Explanation:**
Common decorators:

* `@Component` → defines component
* `@NgModule` → defines module
* `@Injectable` → defines service
  They help Angular understand how to process classes.

---

## 🎯 10. Difference between compilation and runtime in Angular?

**👉 One-liner:**
Compilation converts TypeScript and templates into JavaScript, while runtime executes the application in the browser.

**📖 Explanation:**

* **Compilation (Ahead-of-Time / Just-in-Time):**

  * Converts Angular code into browser-understandable JS
* **Runtime:**

  * Executes the compiled code
  * Handles rendering and user interactions

---

# 🛠️ Hands-On Tasks

---

## ✅ Task 1: Create Angular App

```bash
npm install -g @angular/cli
ng new angular-prep
cd angular-prep
ng serve
```

Access app at:
[http://localhost:4200](http://localhost:4200)

---

## ✅ Task 2: Generate Components

```bash
ng generate component user
ng generate component dashboard
```

---

## ✅ Task 3: Display Static + Dynamic Data

**user.component.ts**

```ts
export class UserComponent {
  name = "Abhijit";
}
```

**user.component.html**

```html
<h2>Hello {{ name }}</h2>
<p>Welcome to Angular Prep</p>
```

---

## ✅ Task 4: Use Components in App

**app.component.html**

```html
<app-user></app-user>
<app-dashboard></app-dashboard>
```

---

# 🚀 Quick Revision Keywords

* SPA
* Component-based architecture
* TypeScript
* CLI
* Change Detection
* Dependency Injection
* Decorators

---