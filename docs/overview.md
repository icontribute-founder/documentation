---
id: overview
slug: /
---

# Overview

Tech design docs and workflows go here.

<!-- @format -->
<div align="center">
   <h1>iContribute - We Rise by Lifting Others</h1>
   <p>A future where your ideal volunteer opportunity is a click away. iContribute is a not for profit that closes the gap betweeen students and local volunteer opportunities. Our mission is to foster community involvement amongst youth and show that with the right resources anyone can volunteer.</p>
</div>

# Table of Contents

3. [Tech Details](#3-tech-details)
   - 3.1 [Github Repositories](#31-github-repositories)
   - 3.2 [Tech Stack](#32-tech-stack)
   - 3.3 [Backend Folder Structure and API Functionality](#33-backend-folder-structure-and-api-functionality)
   - 3.4 [Security](#34-security)
   - 3.5 [Best Practices](#35-best-practices)
     - 3.5.1 [Pull Requests](#351-pull-requests)
     - 3.5.2 [Designer x Developer QA Workflow](#352-designer-x-developer-qa-workflow)
4. [Diagrams](#4-diagrams)
   - 4.1 [Architecture Diagrams](#41-architecture-diagram)
   - 4.2 [Database ER Diagram](#42-database-er-diagram)
   - 4.3 [Mobile Frontend Component Diagram](#43-mobile-frontend-component-diagram)
   - 4.4 [User Flows](#44-user-flows)
     - 4.4.1 [Onboarding](#441-onboarding)
     - 4.4.2 [Apply to Opportunity](#442-apply-to-opportunity)
     - 4.4.3 [Create Opportunity](#443-create-opportunity)
   - 4.5 [Sequence Diagrams](#45-sequence-diagrams)
   - 4.6 [QA Workflow](#46-qa-workflow)
<!--      - 4.6.1 [Mobile Workflow](#461-mobile-workflow)
     - 4.6.2 [Web Workflow](#462-web-workflow) -->

# 3. Tech Details

## 3.1 Github Repositories

These are all the current repositories we have that are constant.

**Mobile (front-end)** - _iContribute-React-Native-Dev_  
Production mobile application of iContribute. Currently implemented with the firebase database.  
Available: [https://github.com/icontribute-founder/IContribute-React-Native-Dev](https://github.com/icontribute-founder/IContribute-React-Native-Dev)

**Web (front-end)** - _icontribute-webapp_  
Web version of iContribute, implemented to use the new server and database.  
Available: [https://github.com/icontribute-founder/icontribute-webapp](https://github.com/icontribute-founder/icontribute-webapp)

<!-- **Web integration (front-end)** - _icontribute-web-integration_
Copy of the production mobile application but is implemented to use the new server and database.
Available: https://github.com/icontribute-founder/icontribute-web-integration -->

**Main Server (back-end)** - _icontribute-server_  
Main server/API implemented with mongoDB. Defines routes to be used in the web application and mobile application.  
Available: [https://github.com/icontribute-founder/icontribute-server](https://github.com/icontribute-founder/icontribute-server)

**Authentication Server (back-end)** - _icontribute-server-auth_  
Authentication server/API implemented with mongoDB. Defines all authentication routes to be used in the web application and mobile application.  
Available: [https://github.com/icontribute-founder/icontribute-server-auth](https://github.com/icontribute-founder/icontribute-server-auth)

<!-- **Firestore Migration (back-end)** - _migrate-firestore_
Used to migrate data from the existing firebase database to the new mongoDB database.
Available: [https://github.com/icontribute-founder/migrate-firestore](https://github.com/icontribute-founder/migrate-firestore) -->

**Landing Page (front-end)** - _icontribute-landingpage_  
Main iContribute landing page.  
Available: [https://github.com/icontribute-founder/icontribute-landingpage](https://github.com/icontribute-founder/icontribute-landingpage)

Many of the other repositories we have are based on projects are currently in progress.

## 3.2 Tech Stack

<div align="center">
   <a href="https://www.figma.com/file/LHWd4Bq0T6LSB7PewhUcwL/Brainstorming?node-id=1132%3A1762">View tech slack</a>
</div>

<br />

![Tech-Stack](https://user-images.githubusercontent.com/38811310/130990942-9851f2bf-9710-4aaf-a295-b721f415bcc5.png)

**FrontEnd**

- React-Native and React:

  - One of the primary versions we coupled React and React-Native because they are very similar development languages. Thus, if we ever need to transfer resources from web to mobile, it should be a more or less seamless development transition.
  - React-Native allowed us to hit the ground running as we only had to build out 1 codebase, but could deploy to both the Android and Apple store without having to learn two separate languages
  - Additionally, compared to other frameworks that support cross-platform mobile app development such as Flutter and Xamarin, React-Native was one of the stronger and more established open-source communities. This meant that we could rely on other developers across the globe in case we got stuck in a pinch.
    <br/><br/>

- Other FrontEnd Technologies used:
  - Redux - Global state management library
  - StyledComponents - CSS-in-JS library
  - Typescript - JS superset
  - Jest - Testing library (future)
  - Android Studio & Xcode - mobile development

**Backend**

- NodeJS and ExpressJS:
  - Since our frontend codebase is primarily Javascript-based, we wanted to leverage NodeJS as our backend framework so that the development team wouldn't have to change languages if they wanted to work full-stack.
- MongoDB:

  - Our team actually originally used Firebase to set up our Mobile app as fast as possible and get it kickstarted. That being said, MongoDB provides a higher performant database once we need to scale and for that reason we decided to port over earlier on to avoid later costs down the line.<br/><br/>

- Other BackEnd Technologies used:
  - Mocha and Chai: Test Framework and Assertion Library
  - SwaggerUI - Documentation platform

## 3.3 Backend Folder Structure and API Functionality

<div align="center">
   <a href="https://lucid.app/lucidchart/invitations/accept/inv_dae81f26-0ff7-47f7-93e2-ca83f13eae6f">View Express REST Diagram</a>
</div>

<br/>

<div
align="center"     
>
   <img 
      src="https://user-images.githubusercontent.com/38811310/131048479-cc80e512-38aa-4923-9621-262d4237c3f0.JPG"
      alt="Backend Folder Structure and API Functionality diagram"
   />     
</div>

<br />

#### Router: [./src/routes](https://github.com/icontribute-founder/icontribute-server/tree/heroku-dev/src/routes)

`app.ts` is the entrypoint to the API and would call different routers for different functionalities. The router defines which routes would use which controllers. This allows for abstraction between the routes and the controllers.

#### Authentication: [./src/middlewares/auth](https://github.com/icontribute-founder/icontribute-server/tree/heroku-dev/src/middlewares/auth)

The authentication folder ensures that any of the HTTP requests are coming from users and resources with the right authentication.

#### Controller: [./src/middlewares/controllers](https://github.com/icontribute-founder/icontribute-server/tree/heroku-dev/src/middlewares/controllers)

Each controller is in charge of a different base route and group of requests. Each route consists of either a `GET`, `POST`, `PUT`, and `DELETE` request. We make sure that there is no business logic in these files and call on services inside each route. This allows for scalability in the future when there are many more services and routes.

#### Utilities: [./src/utils](https://github.com/icontribute-founder/icontribute-server/tree/heroku-dev/src/utils)

The utilities folder contains files that harbour the business logic in our routes.

#### Models: [.src/models](https://github.com/icontribute-founder/icontribute-server/tree/heroku-dev/src/models)

The models folder contain all the information concerning schemas and their properties. The models defined are the following:

- User
  - Student
  - Organization
- Event
- Shift
- Notification
- Review

### Swagger Documentation

For our main and authentication API, we used Swagger to document the routes. All route documentation can be accessed through the following links:

- [Main API documentation (icontribute-server)](https://icontribute-api-dev-server.herokuapp.com/docs/)
- [Authentication API documentation (icontribute-server-auth)](https://icontribute-server-auth.herokuapp.com/docs/)

## 3.4 Security

## 3.5 Best Practices

#### 3.5.1 Pull Requests

In the past, our Pull Request standards have not fully been set in stone, so their level of context and description for a PR reviewer greatly varied. We are introducting a standardized PR template in our GitHub repositories, so that the most important points of a PR are highlighted for a reviewer who is about to read your code. It follows the following format:

```
## Why ##
[ A short description of why this change is required ]

## What Changed ##
[ A description of what changed to address your reasoning above ]
[ If applicable, did you consider adding translations? ]

## How I Tested ##
[ Bullets on the test cases that I covered ]

## What’s Next ##
[ If your PR has a second part coming, or is a work in progress (WIP), give some context for your PR reviewers ]

## Link to Ticket/ Bug ##
[ Link to your Notion ticket ]

## Screenshot ##
[ Android and iOS if applicable. Before and After images to demonstrate visual differences ]
```

This PR template has so far been implemented in the following repositories:

- icontribute-server
- icontribute-webapp
- icontribute-React-Native-dev
- icontribute-web-integration

#### 3.5.2 Designer x Developer QA Workflow

To ensure that our developers are implementating our designs on a 1:1 ratio (as accurately as possible), in past terms we have held design handoff meetings where the designers would present their Figma mockups to the developers and answer any questions that may arise before implementation begins.

That being said, to ensure that implementations are true to designs even after that initial design handoff, we'd like to include a step in the developers workflow, so that designers can review and QA UI components/ screens **before** they are pushed to production depending on the product/ the feature's scope.

This will be done through our new Slack channel **#design-dev-pr-reviews**. As usual, once a developer publishes their front-end (or design-related) PR, they must request a PR review from a fellow developer. In addition to this, they must post a link to their PR in the **#design-dev-pr-reviews** Slack channel and ask for a designer to take a look at the before/after screenshots and provide any feedback/ suggestions that they may have. In the case that the designer has difficulties accessing the PR through the provided GitHub PR URL, the developer can instead send a message in the channel that describes:

- what the PR accomplishes
- what changed
- before/ after screenshots of the UI

After the designer's feedback/ comments are addressed, as well as a developer peer review is complete + merge conflicts/ Github actions are resolved, the PR can then be merged as usual since it has been QA'd successfully!

<!-- ### 3.8.2 Link to PR example

### 3.8.2 Code Review best practices -->

# 4. Diagrams

## 4.1 Architecture Diagram

<div
align="center"     
>
   <img 
      width="730" 
      alt="iContribute Architecture Diagram (1)" 
      src="https://user-images.githubusercontent.com/38811310/130342341-3436982d-7d5c-4e51-9070-3bf93052c041.png"
   />
</div>

<br/>

## 4.2 Database ER Diagram

<div align="center">
   <a href="https://lucid.app/lucidchart/invitations/accept/inv_16dce1d8-49bc-4730-b16b-26adc40b886a">View ER Diagram</a>
</div>

<br/>
<img src="https://user-images.githubusercontent.com/38811310/132059105-0d73c3be-510a-4677-a608-99b65b85ba1e.JPG" alt="ER Diagram" />

<br/><br/>

<!-- ## 4.3 Express REST Diagram (to be replaced) -->

## 4.3 Mobile FrontEnd Component Diagram

<div align="center">
   <a href="https://www.figma.com/file/LHWd4Bq0T6LSB7PewhUcwL/Brainstorming?node-id=1224%3A1730">View User Flows</a>
</div>

<br/>

![mobile-frontend-component-diagram](https://user-images.githubusercontent.com/38811310/132078615-f289f187-dcac-4cd4-8a7e-513738dafb76.png)

<br/>

## 4.4 User Flows

<div align="center">
   <a href="https://www.figma.com/file/GgFqyHDh7pMLWBy4Dt4rGI/Mobile-App?node-id=6%3A1725">View User Flows</a>
</div>

<br/>

### 4.4.1 Onboarding

<br/><br/>

![mobile-onboarding](https://user-images.githubusercontent.com/38811310/132060290-080cd594-635e-4131-92f7-7259fae622a8.png)

### 4.4.2 Apply to Opportunity

<br/><br/>

![mobile-apply-to-opportunity](https://user-images.githubusercontent.com/38811310/132060686-1cca84bf-1a53-40f4-bc88-9e6c262c134c.png)

### 4.4.3 Create Opportunity

<br/><br/>

![mobile-create-opportunity](https://user-images.githubusercontent.com/38811310/132078529-3c7ae97d-31fa-4a41-8ef9-c7cae72afb73.png)

<br/>

## 4.5 Sequence Diagrams

<div
align="center"     
>
   <a href="https://www.figma.com/file/LHWd4Bq0T6LSB7PewhUcwL/Brainstorming?node-id=1094%3A1694">View sequence flow diagram</a>
</div>

<br/>

<div
align="center"     
>
   <img
      src="https://user-images.githubusercontent.com/38811310/130379641-8e4ae4f5-bfac-406f-896d-c72875d6c5c7.JPG"
      alt="iContribute Sequence Flow Diagram"
   />
</div>

<br/>
