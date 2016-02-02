# Eventbrite Visualizer
A simple web app built on React and Redux that visualizes popular events from the Eventbrite API.

# Requirements

* Node  `^4.2.0` 
* NPM  `^3.0.0`

# Development

To get started, clone the repo and install dependencies:

    $ git clone https://github.com/bharatari/eventbrite-visualizer.git
    $ cd eventbrite-visualizer
    $ npm install
    $ npm start

The Eventbrite API requires every request to be authenticated with an OAuth token. Go to Eventbrite's API page and follow the instructions to get your own personal OAuth token. Once you get it, your OAuth token should be placed in /src/constants/Keys.js like this: 
    
    export const eventbriteToken = 'TOKEN_GOES_HERE';

This file is included in .gitignore so that OAuth tokens aren't committed to the repository. Because of this, you'll have to manually add this file after you clone this repository.

# Running
* `npm start` - Starts development server and serves app at `localhost:3000`.
* `npm run compile` - Compiles application to `~/dist`.
* `npm run test` - Runs unit tests with Karma and generates code coverage report.
* `npm run lint` - Lints all `.js` files.

# License

The MIT License (MIT) 
Copyright (c) 2016 Bharat Arimilli

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
