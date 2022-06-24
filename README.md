# Phase-1-Project
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






# Hero Squad

An app that allows you to recruit a well-balanced team of superheroes (or any other character of your choosing).

[![hero-Squad.png](https://i.postimg.cc/jdNwCwZN/hero-Squad.png)](https://postimg.cc/PPXrRxGr)

## Description

This project basically covers the objects within objects concept. You have to recruit a well-balanced team of superheroes (or any other character of your choosing). By that you have to have eevry hero created be assigned to a squad. Keep in mind no database was configured on this application and data is lost the moment you reload the application.


## Specifications


## Prerequisites

- Basic Git knowledge, including an installed version of Git.
- Your application must run on the OpenJDK version 6, 7 or 8.

## Technologies Used 

- Java v9
- Gradle
- Spark Framework
- CSS (Bootstrap)
- JUnit v4.12
- Jacoco Plugin
- Velocity Templating Engine


## Setup Installations Requirements
   * To run the application, in your terminal:

    1. Clone or download the Repository
    2. cd into directory then run `cd Hero-Squad`
    3. Rebuild the Project Using Intellij IDEA or ...
    4. Open terminal command line then navigate to the root folder of the application.
    5. Run `gradle run` command.
    6. Navigate to `http://localhost:4567/` in your browser.
  

### Development

Want to contribute? Great!

To fix a bug or enhance an existing module, follow these steps:

- Fork the repo
- Create a new branch (`git checkout -b improve-feature`)
- Make the appropriate changes in the files
- Add changes to reflect the changes made
- Commit your changes (`git commit -am 'Improve feature'`)
- Push to the branch (`git push origin improve-feature`)
- Create a Pull Request 

## Known Bugs

If you find a bug (the website couldn't handle the query and / or gave undesired results), kindly open an issue [here](https://github.com/yomZsamora/Hero-Squad/issues/new) by including your search query and the expected result.

If you'd like to request a new function, feel free to do so by opening an issue [here](https://github.com/yomZsamora/Hero-Squad/issues/new). Please include sample queries and their corresponding results.

### License

*MIT*
Copyright (c) 2018 **Yommie Samora**

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
