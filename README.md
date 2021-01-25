# Acato - Frontend Developer assessment

## Table of contents  




-  [Instructions ](#instructions )

-  [Technologies and tools](#technologies-and-tools)

-  [Task](#task)

-  [Reflections](#reflections)

-  [Screenshots](#screenshots)

## Instructions
Option 1 - `git clone [this repo]`.
Option 2 `Download this repo as a .zip file and extract locally`.

1. `cd` into the  `[covid19-client]` directory.

2. Run `npm install`.

3. Open your code editor and add two dotenv files to the main folder: .env.development & .env.production 

4. In the .env.development file add: REACT_APP_API_BASE=http://localhost:5000 and REACT_APP_COVID_API=https://disease.sh/v3/covid-19

5. In the .env.production file add: REACT_APP_API_BASE=https://my-acato-server.herokuapp.com and REACT_APP_COVID_API=https://disease.sh/v3/covid-19

6. Run `npm run dev` in the same folder to concurrently start the React app and the JSON-Server.

7. I'm well aware to hide the .env files but since this is a public key I will just leave it in the readme for all of you to play around with it :)


## Technologies and tools 

HTML5 | CSS | Flexbox | JavaScript  | React (bootstrapped with [Create React App]) | JSON-Server (mock server --> https://github.com/typicode/json-server)

### API
For this project I used the disease.sh - Open Disease Data API for the dasboard data. The API uses data from the trustworthy John Hopkins University. Most important for me was that it's updated every hour of the day and above all there is no limit on the requests.
For more info:
- https://disease.sh/docs/
- https://github.com/disease-sh/API

### GOAL 
- **Develop a small SPA to keep up with the always ongoing technology. Design & develop a page where a list of data (API calls) is displayed.**

### Solution
- For this personal project I tried to come up with something that's useful and relevant nowadays. I decided to go with a Covid-19 dashboard combined with a small blog where people can share their Corona experience to help other people get through the situation. I started out with a lot of 'great' functionalities on paper but in the end I had to cut down the app and strip it down to a respectable MVP due to time constraint. The client functionalities: create, read, update and delete data. I realise there is plenty of room for improvement but I hope this gives you an idea of my present skills. Feel free to get in touch!

**Challenges**
- The biggest challenge for me was to be creative and come up with something creative instead of practicing with standard coding projects. Keep adding functionalities without keeping an eye on the quality of your code was also another challenge. I myself noticed that my class components, for example the survey and the dashboard components, became way too spaghetti and since I gave myself only a week to do this I didn't have the time to refactor as much as I wanted anymore. 
- Another little challenge I got stuck on was figuring out which API I wanted to use. In the end I went for a public one of which I was sure there are no request limitations and was accessible for anyone. 
- Aside from this I also tried to implement some coding conventions and technologies. Following the coding standard provided by BEM for example. By the end I think I got the hang of it but as you will might notice: in some stylesheets BEM was not implemented correctly.
- My process for debugging is as  follows: console.log the issue, if that was too vague or the error did no present itself clearly I moved to using the Chrome debugger.


### Reflections
This project was really enjoyable, it pushed me to dive into some deeper React knowledge (sharing data between parent and child of differents levels) and gave me the chance to be creative. I also learned to plan my next projects better by spending less time on coming up with something creative and above all spending less time on quantity and go for quality code instead. On top of this I plan to learn React Hooks to prevent these big class components in the future. Overall this was just a great learning experience. 

## Screenshots
- **The Covid-19 Experience**
<div style="display: flex; justify-content: center">
<img src="https://res.cloudinary.com/dgz86qdxk/image/upload/v1603662508/TheCovid19Experience1_nbwbhl.png" />
</div>

<div style="display: flex; justify-content: center; width: 100px">
<img src="https://res.cloudinary.com/dgz86qdxk/image/upload/v1603662519/TheCovid19Experience_dbnp6z.png" />
</div>
