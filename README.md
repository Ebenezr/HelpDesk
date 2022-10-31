# Help Desk

### Authors

    Cecilia Anyega
    Allan Ngoma
    Alice Auko
    Lewis Mwendwa
    Karugo Murage
    Ebenezar Bukosia

## Project Description

---

## Screen shots

### landing page

#### ![image](https://user-images.githubusercontent.com/37300065/199033287-084eee6c-b3f1-472a-823b-d8ba7119a0ef.png)

### home page

#### ![image](https://user-images.githubusercontent.com/37300065/199033785-0395dbb1-efcb-49a3-af9d-acfc4d43f3dd.png)

### ask question page

![image](https://user-images.githubusercontent.com/37300065/199034124-9edd18eb-8c71-448c-9e67-d9eb47d2784c.png)

### profiles page

![image](https://user-images.githubusercontent.com/37300065/199034553-cc249837-ced9-43ae-b4ab-1c65ec12b7da.png)

## Table of content

- [Technologies](#description)
- [Description](#description)
- [Features](#features)
- [Setup-process](#setup_process)
- [Project-usage](#project-usage)
- [Licence](#licence)
- [Copyright](#copyright)

---

## Technologies

--- Ruby on Rails

--- HTML and CSS

--- JavaScript (React)

--- PostgreSQL

--- Heroku (deployment)

--- Git and GitHub (version control)

--- Minitest (testing)

--- Jest (testing)

---

### Features

--- The features of a HelpDesk web application that allows students to post questions and provide solutions to other questions are as follows:

-- The application allows students to post questions and provide solutions to other questions in a forum-like setting.

-- The application includes a search function that allows students to search for specific questions or topics.

-- The application allows students to up-vote or down-vote questions and solutions, providing a way for the community to rate the usefulness of questions and solutions.

-- The application allows students to comment on questions and solutions, providing a way for the community to provide feedback.

---

### description

--- The HelpDesk web application is a great way for students to get help with their studies.

-- By posting questions and providing solutions to other questions, students can help each other out and learn from each other.

-- This application is a great resource for students who are struggling with a particular subject.

-- By being able to see what other students are asking, they can get a better understanding of the material.

-- Additionally, by providing solutions to other students' questions, they can deepen their own understanding of the subject matter.

---

## How to set up and run the project

---

### Requirements

--- the following are the requirements for the project

-- Ruby 2.3.3 or later.

-- Rails 5.0 or later.

-- PostgreSQL 9.5 or later.

-- npm

-- node

---

### Dependencies

- rails
- ruby
- node
- npm

### setup

---

#### Client (React)

clone the repo using the command

```shell
git clone git@github.com:Ebenezr/Helpdesk.git
```

change directory using command

```shell
cd Helpdesk
```

open project in vscode texteditor

```shell
code .
```

install dependancies

```shell
npm install
```

run front end

```shell
npm run dev
```

---

#### API (Ruby on Rails)

clone the repo using the command

```shell
git clone git@github.com:Ebenezr/Helpdesk-api.git
```

change directory using command

```shell
cd Helpdesk-api
```

open project in vscode texteditor

```shell
code .
```

Check your Ruby version

```shell
ruby -v
```

The ouput should start with something like `ruby 2.5.1`

If not, install the right ruby version using [rbenv](https://github.com/rbenv/rbenv) (it could take a while):

```shell
rbenv install 2.7.0
```

install dependancies packages

```shell
bundle install
```

Initialize the database

```shell
rails db:create db:migrate db:seed
```

run api server

```shell
rails s
```

---

## How to use the project

--- To use the project follow the steps below:

-- First sign up to the application.

-- Then you can post a question.

-- You can also give a solution to a question.

-- You can also comment on a question.

-- You can also up-vote or down-vote a question.

## -- You can also search for a question.

### Contributing to project

- Fork the repo

* Create a new branch in your terminal (git checkout -b improve-feature)
* Install the prerequisites
* Make appropriate changes in file(s)
* Run the server to see the changes
* Add the changes and commit them (git commit -am "Improve App")
* Push to the branch (git push origin improve-app)
* Create a Pull request

---

## Copyright

--- This project is licensed under the MIT License - see the LICENSE.md file for details.

---

## [License](LICENSE)

MIT License
Copyright (c) 2022
