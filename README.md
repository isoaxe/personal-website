# Personal Website

This is the codebase for my [personal website](https://www.lucasoconnell.net/). It's a single page application showcasing educational achievements, technologies that I am familiar with and some portfolio projects that I have completed. Finally, there is a contact form at the bottom.


## Website Evolution - Technologies Used

The website was originally developed in HTML, CSS and vanilla JavaScript.

When the contact form was built, Node.js and Express.js were selected to handle middleware routing and backend functions such as server creation and automatic generation of emails on form submission.

Finally, React was [integrated gradually](https://reactjs.org/docs/add-react-to-a-website.html) and without a toolchain. This was done by loading react scripts along with any components in the existing HTML file. Components were written in JSX and then preprocessed by Babel via a [CLI script](https://github.com/Isoaxe/personal-website/blob/master/package.json) so that they would be readable by a browser. Several Node.js packages were used to add dynamism to the website in this way.


## Local Setup

The project can be cloned and set up locally by the following CLI commands. Note that this sets up the website only, and not the linked projects (setup instructions for these can be found in their respective readme's, where applicable).

In the **personal-website directory**, run the following commands:

### `npm install`

Install all of the Node dependencies for React and other third party packages used in the frontend.

### `mkdir preprocessed`

Generate a new directory called 'preprocessed' for the next step.

### `npm run jsx`

This runs a script in the package.json file that preprocesses all of the JSX files within the components directory and writes them to the preprocessed directory. These preprocessed files are then readable by the browser as plain JavaScript.

Hint: Hold ctrl-c a few seconds after running this command to resume control of the command line. Control will not automatically be returned since the script watches for changes in the JSX and re-preprocesses on an ad-hoc basis. If you plan on editing the codebase, it's best to keep this running and proceeding with the following steps in another terminal window / tab.

**Now the backend needs to be set up.**

### `cd backend`

Navigate to the backend folder to set up the server.

### `npm install`

Install all of the Node dependencies for Express and other third party packages used in the backend.

### `npm start`

Spins up a local development server. Open [http://localhost:3000](http://localhost:3000) to view it in the browser. The page will reload if you make edits to files in the backend folder. You will also see any lint errors in the console.
