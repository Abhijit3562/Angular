**Execution Roadmap (STRICT)**

## ⏱️ **Hour 0 – 0.5 → Setup**

```bash
ng new netflix-clone
cd netflix-clone
ng serve
```

Install basics:

```bash
npm install bootstrap
```

Add to `angular.json`:

```json
"styles": ["node_modules/bootstrap/dist/css/bootstrap.min.css"]
```

---

# 🧱 **Hour 0.5 – 1.5 → Component Structure (IMPORTANT)**

## 🎯 Create Components

```bash
ng g c components/navbar
ng g c components/movie-row
ng g c components/movie-card
ng g c pages/home
```

---

## 🧠 Final Structure

```
app/
 ├── components/
 │     ├── navbar
 │     ├── movie-row
 │     ├── movie-card
 │
 ├── pages/
 │     └── home
 │
 ├── services/
 │     └── movie.service.ts
```

---

# 🔥 **Hour 1.5 – 2.5 → OMDb API Integration (VVIP)**

## 🎯 Get API Key

👉 [http://www.omdbapi.com/apikey.aspx](http://www.omdbapi.com/apikey.aspx)

---

## 🎯 Create Service

```bash
ng g s services/movie
```

### movie.service.ts

```ts
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  apiKey = 'YOUR_API_KEY';
  baseUrl = 'https://www.omdbapi.com/';

  constructor(private http: HttpClient) {}

  getMovies(search: string) {
    return this.http.get(`${this.baseUrl}?apikey=${this.apiKey}&s=${search}`);
  }
}
```

---

## 🎯 Import HttpClient

```ts
import { HttpClientModule } from '@angular/common/http';

imports: [HttpClientModule]
```

---

# 🎬 **Hour 2.5 – 3.5 → Home Page + Data Flow**

## home.component.ts

```ts
movies: any = [];

constructor(private movieService: MovieService) {}

ngOnInit() {
  this.movieService.getMovies("batman").subscribe((res: any) => {
    this.movies = res.Search;
  });
}
```

---

## home.component.html

```html
<app-navbar></app-navbar>

<app-movie-row 
  title="Batman Movies"
  [movies]="movies">
</app-movie-row>
```

---

# 🎞️ **Hour 3.5 – 4.5 → Movie Row (Horizontal Scroll UI)**

## movie-row.component.ts

```ts
@Input() title: string = '';
@Input() movies: any[] = [];
```

---

## movie-row.component.html

```html
<h3 class="text-white">{{ title }}</h3>

<div class="d-flex overflow-auto">
  <app-movie-card 
    *ngFor="let movie of movies"
    [movie]="movie">
  </app-movie-card>
</div>
```

---

# 🎥 **Hour 4.5 – 5.5 → Movie Card UI**

## movie-card.component.ts

```ts
@Input() movie: any;
```

---

## movie-card.component.html

```html
<div class="card bg-dark text-white m-2" style="width: 150px;">
  <img [src]="movie.Poster" class="card-img-top" />
  <div class="card-body">
    <p class="card-title">{{ movie.Title }}</p>
  </div>
</div>
```

---

# 🎨 **Hour 5.5 – 6 → Styling + Polish**

## Add Dark Theme (important for Netflix look)

### styles.css

```css
body {
  background-color: #141414;
  color: white;
}

h3 {
  margin-left: 10px;
}
```

---

## Navbar Basic

```html
<nav class="navbar navbar-dark bg-black px-3">
  <span class="navbar-brand text-danger">NETFLIX</span>
</nav>
```

---

# 🚀 **If Time Left (Bonus – High Impact)**

### ✅ Multiple Rows

```ts
this.movieService.getMovies("action")
this.movieService.getMovies("comedy")
```

---

### ✅ Add Loading

```html
<div *ngIf="!movies">Loading...</div>
```

---

### ✅ Handle Missing Poster

```html
<img [src]="movie.Poster !== 'N/A' ? movie.Poster : 'fallback.jpg'">
```

---

# 🧠 **How to Explain This in Interview**

Say this confidently:

> “I created a component-driven Angular UI with reusable movie row and card components. Data is fetched using HttpClient from OMDb API through a service layer. Used input bindings to pass data and implemented horizontal scrolling similar to Netflix UI.”

---

# ⚠️ **Reality Check (Important)**

Don’t try:

* Routing ❌
* Forms ❌
* Fancy CSS ❌

Focus on:
✔ Components
✔ API
✔ Data binding
✔ UI structure

---