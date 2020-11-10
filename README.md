## Installation
Create file .env and set variables

```bash
$ cp .env.example .env
```

```bash
$ docker-compose up
```

```bash
$ yarn
```

## Work with database

```bash
$ yarn migrate
```

```bash
$ yarn seed:run 
```

## Running the app

```bash
# development
$ yarn start

# production mode
$ yarn start:prod
```

#
## Description of Developer Test Task

# OVERVIEW

The following document includes instructions for a development task we use to measure your skill level.

What we&#39;re looking for:

- The instructions are vague - there is no &quot;right&quot; solution.
- Keep it simple! This test is designed to take you no more than a few hours to complete.
- Ask questions. Good communication is the key to our team. You should be able to complete this task without help, but if you have questions about expectations - ask.

# TL;DR

1. Create a new **Node.js** project and push it into a git repo.
2. Create a **MySQL database**.
3. Create a Node.js script that will fetch data from a **REST API** and store it in the database you created
4. Create a Node.js script that will fetch data from a website using **puppeteer** and store it in the database.
5. Create a simple **Frontend UI** to display the stored data.

# DETAILS

## 1 - Create a new Node.js project and push it into a git repo

Create a new repository on any git hosting platform of your choice.

## 2 - Create a MySQL database

Feel free to use whatever structure you think fits the tasks. You can use docker-compose or some free online MySQL hosting solution:

- https://www.freemysqlhosting.net
- https://www.db4free.net
- https://www.freesqldatabase.com/freemysqldatabase

## 3 - Create a Node.js script that will fetch data from an API

Create a simple script that will fetch data from an API and store it in the database you created.

1. Use [https://reqres.in/](https://reqres.in/) for the API.
2. Fetch the list of users from that API (both pages).
3. Store the fetched data in the database.

## 4 - Create a Node.js script to fetch data from a website using puppeteer

Create a simple script that uses [a puppeteer](https://www.npmjs.com/package/puppeteer) to fetch data from [https://develop.pub.afflu.net](https://develop.pub.afflu.net/).

1. Log into account using these credentials:\
  Login: developertest@affluent.io\
  Password: ******
2. Navigate to [https://develop.pub.afflu.net/list?type=dates](https://develop.pub.afflu.net/list?type=dates)
3. Change the date range to April 1st, 2020; April 30th, 2019
4. Fetch the whole &quot;DATES&quot; table at the bottom of the page (all pages).
5. Store data from the table in the database.

## 5 - Create a simple Frontend UI

1. Create a simple Express.js Web server.
2. Create one page (HTML + JS) that will be available via Express server at [https://localhost:8080](https://localhost:8080/)
3. That page should make an async request to the Express/Koa server to fetch all of the data you collected in the steps above.
4. Output everything that you fetched to the page.