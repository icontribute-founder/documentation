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

1. [Problem](#1-problem)
   - 1.1 [Problem Statement](#11-problem-statement)
   - 1.2 [Problem Space](#12-problem-space)
2. [Solution](#2-solution)
   - 2.1 [Our Solution: iContribute](#21-our-solution-icontribute)
   - 2.2 [Business Model](#22-business-model)
   - 2.3 [Scalability](#23-scalability)
   - 2.4 [Implementation Plan](#24-implementation-plan)
   - 2.5 [Competitive Analysis](#25-competitive-analysis)
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
5. [Product Roadmap](#5-product-roadmap)
   - 5.1 [Product Deliverables](#51-product-deliverables)
   - 5.2 [Deliverable Breakdowns](#52-deliverable-breakdowns)
   - 5.3 [Project Team Structure](#53-project-team-structure)
   - 5.4 [Minimizing Dev Workflow Conflicts](#54-minimizing-dev-workflow-conflicts)
6. [Design](#5-design)
7. [Resources](#6-resources)
8. [Authors](#7-authors)

# 1. Problem

## 1.1 Problem Statement

**Original:** How might we make the volunteer discovery process for youth more seamless?

**Revised:** How might we foster a positive mindset about volunteerism in youth through community involvement?

## 1.2 Problem Space

In the Ontario high school curriculum, secondary students are required to complete 40 hours of community service in order to graduate. The annual number of volunteer hours has significantly decreased by almost 7% within the last decade. Based on a feasibility study done with high school students (n>300), we discovered that youth are not being equipped with the proper resources to find volunteer opportunities. The decrease in volunteerism over the decades can be directly attributed to this issue and the pandemic has only made this worse.

Ottawa's local school board, the OCDSB, consists of 25,000 high school students. Across Canada, there exist 332 school boards making up well over 3 million secondary students in the nation. According to STATS Canada, almost 50% of those aged 15 to 24 reported doing volunteer work in 2018, putting our market size at just over 1.5 million users for students alone.

# 2. Solution

## 2.1 Our Solution: iContribute

iContribute is a not-for-profit that bridges the gap between high school students looking for volunteer opportunities, and volunteer organizations seeking helping hands. Our team seeks to cater our product specifically towards the youth by providing opportunities that are directly relevant to career paths, a board-vetted hour tracker, and integrating ourselves into their daily workflow by working with schools. Lastly, by providing opportunities that are both in-person and virtual, our team enables students to still complete their hours through the comfort of their home during the pandemic.

## 2.2 Business Model

Although individuals will always have the opinion to download the free version of our app, in the future to ensure the sustainability of our business, our revenue model would follow business-to-business transactions by targeting distribution platforms such as school boards and universities as our main source of revenue. Our team will follow a value-based pricing model to sell our software to educational institutions.

The software will allow the institutions to virtually track and verify volunteer hours, providing an efficient and improved process. Receiving the seal of approval from school boards, teachers, and guidance counsellors, would enable our team to establish legitimacy and value amongst students. Additionally, transactions with school boards allow us to reach tens of thousands of students which improves iContribute’s perceived value to other neighbouring school boards in other cities and provinces.

<!-- ### 2.2.1 School Boards:

We would operate on a freemium where clients can access base features for free
(examples include):

- Browsing and applying to volunteer opportunities
- Calendar integration of opportunities

Whereas our premium features would lean into our paid model with features such as:

- Advanced analytics and insights
- Board-vetted hour tracker
- In-app messaging

### 2.2.2 Organizations

Organizations represent another potential source of long term funding where we can use the masses of school board students to incentivize organizations for a paid model. For example, we could leverage exposure to students in exchange for financial or in-kind return with features such as

- Promoted opportunity postings
- Volunteer applicant insights
- Featured highlights on social media -->

## 2.3 Scalability

Our team plans to leverage our partners as our largest asset, some of whom already have strong national and international reach through their parent and affiliated organizations. Therefore, if we are successful locally, our partners can act as a gateway to expand into new regions near and far. Furthermore, because iContribute is a software-based app, our project is easily scalable, operates at a low cost, and is effortless to implement. Typical roadblocks such as production costs and geographical obstacles would not constrain iContribute's ability to expand.

## 2.4 Implementation Plan

In order to actually reach this sustainable future, we plan to take a hybrid approach where we can leverage government grants to subsidize school board payments. Once we have fully secured enough interest in a broad enough group of school boards, we can completely pivot to have our clients cover the entire costs

Currently, our iContribute mobile app is available for student volunteers and volunteer organizations across the iOS and Android mobile app stores. Our go-to-market strategy would involve 4 stages consisting of:

```
Phase 1) Deploying an MVP; this includes the first release of our mobile app into both app stores

Phase 2) Building our Base Business Case; providing our service to local schools, getting testimonials

Phase 3) Establishing a Pricing Model; creating a legally binding relationship and financial model between our partners

Phase 4) After defining a local expansion playbook, we would scale to other regions to create the most amount of impact we can
```

## 2.5 Competitive Analysis

To be filled out

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
