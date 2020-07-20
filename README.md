


# WDP Team project


## Project description

The project is an exemplary store page coded with a free PSD template. The project was created in order to learn page coding and work in a team.

Working tools:
Jira, Git, GitHub;

Interface building library:
React;

## Demo

The project demo can be found at the following link: xxxxx

## Project Initiation

After cloning the project, install the required packages with the command `yarn install` (or` npm install`).

Now you can start using the prepared task `yarn start` (or` npm start`).

All source files needed for work are located in the `src` and` public` folders.

## NPM Scripts

There are 3 main scripts to speed up work:

- `build`: builds a project in the` build` folder based on files from the `src` and` public` folders
- `start`: observes changes in the` src` folder and starts working preview
- `test`: starting the unit tests
- `refactor`: the script automatically formats files in the` src / `folder
  according to the accepted code formatting convention, and also checks for errors using ESLint

## Git Hooks

The project uses Git Hooks - the ability to run scripts in response to selected Git events.

Each time you execute the `git commit` command, unit tests, formatting, and linting will be run
for files selected with `git add` and to be saved in commit.

## Conventions and good practices

# General rules

- We comply to KISS and DRY.
- Use of english at all times.
- At the end of the day, we write daily summary of our work.
- Branch naming - this is the number of the jira tag.

# Work with git

- We update the local repository from origin master (git pull origin master) before starting a new task;
- Create a new branch on the local master with the name / number of the task;
- We update the local branch with the tag by downloading changes from the remote repository (git pull origin master);
- We resolve conflicts and send a branch with a tag to a remote repository to a remote branch with the same name as local (git push origin _name-task_) and create a Pull Request with a description of the changes made;

