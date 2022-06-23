# Phase-1-Project
phase 1 project
In this project I will be building an application that allows a user to
 to learn more about a fruit. This is very important since it can help a user to make decision on which fruit to use based on nutritional value per 100g.



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

3. Add a fruit.

