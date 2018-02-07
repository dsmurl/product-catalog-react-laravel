# Product Catalog React Laravel

A simple product catalog.  Api written in Laravel and the front end written in React.js.  There is a simple entry form for new products and a listing display view.  I'm happy with it cause I've never built a Laravel and React project before.

## Running

* Run the included mysql instance through docker with:
    * docker-compose up
        * To clear the Db: rm -rf database/docker-mysql/*     
* Run the Lavavel server with:
    * php artisan serve
* Run the DB building script with:
    * php artisan migrate
* Check out the interface at:
    * localhost:8000
    
## Other Fun Stuff
* Optionally, you can create fake data with:
    * php artisan db:seed --class=ProductsTableSeeder
* Optionally, run the hot swap webpackDevServer for fast in-memory rebuild of react code after changes:
    * In a separate term window run: npm run hot
  
  
## High Notes
* Scss sass engine running css
* webpackDevServer for fast react development without manual rebuilds (doesn't work well on css for some reason)
* bootstrap extracted
* flexboxgrid system for row and col spacing and responsive layout on mobile
* Completed product list and create, and have beginning of edit, delete, and readonly view of products partially implemented
* Laravel serves both Api and React code with Laravel Mix for webpack (Wasn't fun or ideal but I always wanted to try this)
* Has built-in laravel users that can be used for cool auth
* React Router 4 single page application route switching with history
* Achieved server side validation on a form field with error message display on the form
    * Item titles must be unique and submitting a duplicate will show the server side error message
    * Error message isn't friendly, but still

## Nice Trys
* Tried to add redux-form but didn't have time
* Tried to add immutable to protect redux store but couldn't iron it out fast enough
* ReduxDev Tools support so you can view you store and actions live in the browser with the ReduxDevTools extension
* I really wanted to put css modules in for more component encapsulation but couldn't prepare it properly through Laravel Mix in time
* I was close to implementing a simple docker file to build and dockerize the laravel server that could have been used in the main docker-compose.yml but didn't have time.  Would have made a really smooth deploy
* I got pretty far with the css, but obviously could have gone a lot further
* I wanted to get reselect working but couldn't for some reason
* There is some confusion between controlled and uncontrolled inputs on the form that makes the values of the form after submit weird after submit, but I didn't have time to make nice controlled component inputs

## Credits
* Got help from: https://code.tutsplus.com/tutorials/build-a-react-app-with-laravel-restful-backend-part-1-laravel-5-api--cms-29442
* Got help from: https://code.tutsplus.com/tutorials/build-a-react-app-with-laravel-backend-part-2-react--cms-29443
* A lot of bug report from Jeffery Way on the Laravel Mix setup


## Enjoy
Enjoy and visit SamBagot.com for more fun.