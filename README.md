# Final Project CSCIE114

## Project URL
https://cscie59-f1data.netlify.app/


# About
I decided to develop an web application that would keep track of the current season of Formula 1 using a REST API
This application is using 11ty to build static pages with the data loaded on it. 

# Data
The REST API is provided by: https://api-sports.io/

# CD/CI
I simplified the file used in Assignment 5 to deplay automatically on Netlify

# "Extraordinary Disctinction"
Once again I couldn't make this kind of feature works, my plan was to build an edge-function on the homepage of the web application to let the user know
when will be the next race according to their own timezone. Unfortunately I was never able to access to the API data in the edge function file .js.
I could make works some basic edge functions work locally tho.

# How to start the project locally

## Step 1:
Use ```npm install``` to install all dependencies used for this project

## Step 2:
Download the ```.env``` uploaded alongside to have access to the REST API Token

## step 3:
Use ``` npm start ```


