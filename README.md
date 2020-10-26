# Acato - Frontend Developer assessment

## Table of contents  




-  [Instructions ](#instructions )

-  [Technologies and tools](#technologies-and-tools)

-  [Task](#task)

-  [Reflections](#reflections)

-  [Timeline](#timeline)

-  [Screenshots](#screenshots)

## Instructions
Option 1 - `git clone [this repo]`.
Option 2 `Download this repo as a .zip file and extract locally`.

1. `cd` into the  `[covid19-client]` directory.

2. Run `npm install`.

3. Run `npm run dev` in the same folder to concurrently start the React app and the JSON-Server.

4. Add two dotenv files to the main folder: .env.development & .env.production 

5. In the .env.development file add: REACT_APP_API_BASE=http://localhost:5000 and REACT_APP_COVID_API=https://disease.sh/v3/covid-19

6. In the .env.production file add: REACT_APP_API_BASE=https://my-acato-server.herokuapp.com and REACT_APP_COVID_API=https://disease.sh/v3/covid-19

7. I will remove step 5 to 7 after you checked my app :)


## Technologies and tools 

HTML5 | CSS | Flexbox | JavaScript  | React (bootstrapped with [Create React App]) | JSON-Server (mock server --> https://github.com/typicode/json-server)


### Task 
- **Develop a small SPA to demonstrate your level of skill, passion and view on today's world of web! Design & develop a page where a list of data (JSON) is displayed. As data, think of a list
of to-do's, people, your hobbies or even perhaps something else you are most passionate about.**

### Solution
- For this assessment I tried to come up with something that's useful and relevant nowadays. I decided to go with a Covid-19 dashboard combined with a small blog where people can share their Corona experience to help other people get through the situation. I started out with a lot of 'great' functionalities on paper but in the end I had to cut down the app and strip it down to a respectable MVP due to time constraint. The client functionalities meet the CRUD requirements specified in the assessment. I realise there is plenty of room for improvement but I hope this gives you an idea of my present skills. In our upcoming call I would like to elaborate a bit more on the improvements I realised during development but feel free to get in touch if you can't wait.

**Challenges**
- The biggest challenge for me during this assessment was the freedom to choose to build whatever I wanted. In order to impress someone you tend to overexaggerate by keep adding functionalities without keeping an eye on the quality of your code. I myself noticed that my class components, for example the survey and the dashboard components, became way too spaghetti and by the time the deadline closed in on me, I realized there was no time anymore to refactor my code. 
- Another little challenge I got stuck on was figuring out which API I wanted to use. In the end I want for a public one of which I was sure there are no request limitations. 
- Aside from this I also tried to implement some coding conventions and technologies. Following the coding standard provided by BEM for example was something I had to get used to. By the end I think I got the hang of it but as you might noticed: in some stylesheets BEM was not implemented correctly.
- My process for debugging is as  follows: console.log the issue, if that was too vague or the error did no present itself clearly I moved to using the Chrome debugger.


### Reflections
This coding challenge was really enjoyable, it pushed me to dive into some deeper React knowledge and gave me the chance to be creative. I feel that while doing this challenge I got a real feel for what the Creative Frontend Developer role would look like and I feel that it would be a really good fit for me and I could really excel at. I also learned to plan my next projects better by spending less time on coming up with something creative and above all spending less time on quantity and go for quality code instead. On top of this I plan to learn React Hooks to prevent these big class components in the future. Overall this was just a great learning experience. 


## Timeline
Started on 19/10/2020 (all of this had to be done in the evening since I work during the day)

### Monday
Refine idea (Covid related app) and search for usable API's. 

### Tuesday
Playing around with the API's and filter useful data.

### Wednesday
Design and develop MVP Covid dashboard and display data I wanted to use.

### Thursday
Got sick so started coding fairly late in the evening. Finished most of the dashboard and created repo for assessment

### Friday
Started developing the app during work and in the evening and at the end of the day I had some basic components working.

### Saturday
Refined structure of app and watched some tutorials on React Router. App reloads much smoother than before. 

### Sunday
Highly stressful but also pleasant day. Spent most of the day on styling and halfway I decided to change the layout of the app. Luckily my components were pretty reusable so without a lot of effort I was able to change it into something I was very satisfied with. At the very end I was able to add some Form validation as well.

### Monday (coming)
Deployed to share the app with friends and family who were asking why I react(ed...) a bit slow to their messages.
https://thecovid19experience.netlify.app/

## Screenshots
- **The Covid-19 Experience**
<div style="display: flex; justify-content: center">
<img src="https://res.cloudinary.com/dgz86qdxk/image/upload/v1603662508/TheCovid19Experience1_nbwbhl.png" />
</div>

<div style="display: flex; justify-content: center; width: 100px">
<img src="https://res.cloudinary.com/dgz86qdxk/image/upload/v1603662519/TheCovid19Experience_dbnp6z.png" />
</div>
