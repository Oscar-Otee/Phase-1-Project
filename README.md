# Phase-1-Project
This project covers building an application that allows a user to
 to learn more about a fruit such as knowing the fruit name in the list and can have information about it such as genus, family, order and more importantly nutritional value content per 100g such as carbohydrates, protein, fat, sugar and calories after clicking its name which are very important for making decision when a user want to purchase a fruit. 


## Technologies Used
-CSS for styling.
-HTML for structure.
-JavaScript for functionality
-Json server


## Files created
-db.json
-index.js
-index.html
-style.css
-README.md

## Setup

Run this command to get the backend started:

```console
$ json-server --watch db.json
```

The server was tested by visiting this route in the browser:

[http://localhost:3000/fruits](http://localhost:3000/fruits)

Then, the `index.html` file was opened on my browser for running this application.

The code was written in the `index.js` file. The base URL for my API was
[http://localhost:3000](http://localhost:3000).

## Core Deliverables

As a user, I can:

1. See the first fruit's details, including its **name, genus, family,
   order, and its nutritional values per 100g such as carbohydrates, 
   protein, fat, calories and sugar on the right** when the page loads. 
   I can also comment on the fruit and delete the comment before submitting 
   if I am not satisfied with it. I made a GET
   request to the following endpoint to retrieve the fruit data:

   ```txt
   GET /fruits/1

   Example Response:
   {
    "genus": "Musa",
    "name": "Banana",
    "id": 1,
    "family": "Musaceae",
    "order": "Zingiberales",
    "nutritions": {
        "carbohydrates": 22,
        "protein": 1,
        "fat": 0.2,
        "calories": 96,
        "sugar": 17.2
    }
   ```

2. See a menu of all fruits on the left side of the page in the `ul#fruits`
   element when the page loads. I made a GET request to the following endpoint to retrieve the
   fruit data:

   ```txt
   GET /fruits

   Example response:
   [
      {
    "genus": "Malus",
    "name": "Apple",
    "id": 6,
    "family": "Rosaceae",
    "order": "Rosales",
    "nutritions": {
        "carbohydrates": 11.4,
        "protein": 0.3,
        "fat": 0.4,
        "calories": 52,
        "sugar": 10.3
    }
}, {
    "genus": "Prunus",
    "name": "Apricot",
    "id": 35,
    "family": "Rosaceae",
    "order": "Rosales",
    "nutritions": {
        "carbohydrates": 3.9,
        "protein": 0.5,
        "fat": 0.1,
        "calories": 15,
        "sugar": 3.2
    }
   ]
   ```

3. Click the name of the fruit and see it details on the right.

4. Add a fruit.




*MS*
Copyright (c) 2022 **Oscar Oluoch Aboh Otee**

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.




