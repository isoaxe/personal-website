# Personal Website

This is the codebase for my [personal website](https://www.lucasoconnell.net/). It's a single page application showcasing educational achievements, technologies that I am familiar with and some portfolio projects that I have completed. Finally, there is a contact form at the bottom.


## Website Evolution - Technologies Used

The website was originally developed in HTML, CSS and vanilla JavaScript.

When the contact form was built, Node.js and Express.js were selected to handle middleware routing and backend functions such as server creation and automatic generation of emails on form submission.

React was [integrated gradually](https://reactjs.org/docs/add-react-to-a-website.html). Components were written in JSX and then preprocessed by Babel via a [CLI script](https://github.com/Isoaxe/personal-website/blob/master/package.json) so that they would be readable by a browser. Then Browserify was used to bundle the preprocessed components into a single file, which was in turn loaded via a `<script>` in the HTML file. This was necessary to run third party Node modules client-side.

Finally, the website migrated from Namecheap to Firebase hosting where Firebase functions were used to handle the backend functionality via a serverless architecture.


## Local Setup

The project can be cloned and set up locally by the following CLI commands. Note that this sets up the website only, and not the linked projects (setup instructions for these can be found in their respective readme's, where applicable).


In the **personal-website directory**, run the following commands:

### `npm install`

Install all of the Node dependencies for React and other third party packages used in the frontend.

### `npm run babel`

This runs a script in the package.json file that preprocesses all of the JSX files within the components directory and writes them to the preprocessed directory. These preprocessed files are then readable by the browser as plain JavaScript.

Hint: Hold ctrl-c a few seconds after running this command to resume control of the command line. Control will not automatically be returned since the script watches for changes in the code and re-preprocesses on an ad-hoc basis. If you plan on editing the codebase, it's best to keep this running and proceeding with the following steps in another shell tab.

### `npm run browserify`

Run the Browserify script in the package.json file. Browserify allows us to `require('module')` from the browser as is done with Node. This script bundles all of the components from the preprocessed directory into a single `development.js` file. This bundling occurs only when running the script, so any changes to the components will mean that the script will need to be run again to be reflected in the browser, unless the following optional step is taken.

### `npm run watchify` (optional)

Run the Watchify script in the package.json file. This does the same thing as Browserify, except it continually monitors the preprocessed components for change and rebundles as necessary rather than running just once. It is therefore ideal if continually working on the project rather than building without much modification. Leave this running in a separate shell tab. If the `watchify` script is used, then the `browserify` script is no longer necessary.

### `npm run build`

This takes the `development.js` file and converts it into `production.js` by running envify, uglifyify and terser on it. This is then loaded in the HTML file via a `<script>` tag.

### Note on Loading Scripts:

By default the `production.js` script is loaded. Any changes made to the codebase will not be updated until the relatively time-consuming `build` is run again. Therefore for development purposes, comment out that script in `index.html` and uncomment the `development.js` script so that is used instead. This way, the page will reload if you make edits to files in the backend folder without having to run the build each time. You will also see any lint errors in the console.


**Now the backend functions need to be set up.**

*Note:* This requires the setting up of a [Firebase project](https://firebase.google.com/) (hosting and functions), which is not covered here. If you want to host someplace else or simply want to test locally, it's best to use the alternative method below.

*Note:* In order for the contact form to work, a dedicated gmail account will be required to route queries posted via the form to you and to the sender. When setting up the email account, both [less secure apps](https://myaccount.google.com/lesssecureapps) and [display unlock captcha](https://accounts.google.com/DisplayUnlockCaptcha) need to be enabled for Nodemailer not to be blocked by Google.

### `npm install -g firebase-tools`

After setting up the Firebase project, install the Firebase CLI.

### `firebase login`

You will also need to [login](https://firebase.google.com/docs/cli#sign-in-test-cli) and link this project to the remote, which will be your Google account.

### `firebase functions:config:set email_router.email=EMAIL_ADDRESS email_router.password=EMAIL_PASSWORD`

[Set](https://firebase.google.com/docs/functions/config-env) the Firebase environment variables for the router email address and password. These are implemented in `email.js` but require configuration first. EMAIL_ADDRESS and EMAIL_PASSWORD in this script should be replaced with the secret address and password that have previously been created for the email router (see note above).

### `cd functions`

Navigate to the functions folder in a new shell tab to set up the server.

### `npm install`

Install all of the Node dependencies for Express and other third party packages used by Firebase functions.

### `cd .. && npm run serve` (local only)

Move up to the main directory again and run the `serve` script. This starts both the hosting and functions emulators for local testing. The hosted site and function logs can then be viewed in the [browser](http://localhost:4000).

### `npm run deploy-all` (hosted only)

Deploy both Firebase hosting and Firebase functions. In future, these can be deployed separately as required. Run `npm deploy` from this main directory for hosting or the same script from the `functions` directory to deploy functions.


**Alternative to Firebase functions: Create Node server.**

### `cd backend`

Navigate to the backend folder in a new shell tab to set up the server.

### `npm install`

Install all of the Node dependencies for Express and other third party packages used in the backend.

### `npm start`

Spins up a server, either locally or hosted. If done in the local environment, open [http://localhost:3000](http://localhost:3000) to view it in the browser.
