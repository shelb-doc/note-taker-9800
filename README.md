# 📝🖥️ Note Taker 9800 🖥️📝
an application that can be used to write, save, and delete notes.
http://www.catipsum.com/index.php
## Youtube Demo

[Youtube Demo](https://youtu.be/6KBkpA14bng)

## Installation

### While in Git Bash

To generate your own HTML page for You Team,

First go to [Team Builder 9000](https://github.com/shelb-doc/Template-Employee-Summary)
Then Pull Down the Repo into your machine. Click here to see how that is done [Clone a repository from GitHub](https://docs.github.com/en/free-pro-team@latest/github/creating-cloning-and-archiving-repositories/cloning-a-repository)

Next run `npm install` in order to install the following npm package dependencies.

* [`inquirer`](https://www.npmjs.com/package/inquirer)
* [`path`](https://www.npmjs.com/package/path)
* [`fs`](https://www.npmjs.com/package/fs)

Then run the application with the command `node app.js`.

Then answer the CLI prompts,

After that then finished html page should look like this.

![Finished project](https://media.giphy.com/media/ddTFDm1bahgQHpNfhl/giphy.gif)

## Usage

When you run `node app.js`, the Team Builder 9000 uses the `inquirer` package to prompt you in the command line with a series of questions about your Team.

From there, the application will generate markdown and a table of contents for the README conditionally based on your responses to the Inquirer prompts.

Finally, `fs.writeFileSync` is used to generate your project's README.md file. Check out the [`team.html`](https://github.com/shelb-doc/Template-Employee-Summary/blob/main/output/team.html) in this repo as an example.

## Methodology

The application utilizes, as much as possible, syntax and paradigms introduced in ES6 and beyond, including `arrow functions`, `const`, `let`, template literals, and `async/await` to handle the `inquirer`, `path`, `fs`, and `fs.writeFileSync` promises.

## Credits

Thank you to my cat Mimikyu for being my Rubber Ducky.


## License

Licensed under the [MIT](LICENSE.txt) license.