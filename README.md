# Using Chart.js to plot chart in Node.js
ChartJs is used to plot chart of monthly and yearly sales

# Chart Js
Chart.js is a free open-source JavaScript library for data visualization, which supports 8 chart types: bar, line, area, pie (doughnut), bubble, radar, polar, and scatter.
## Requirements

For development, you will need Node.js and a node global package and NPM installed in your environement.

### Node 
- #### Node installation on Windows (npm installed with node)

  Just go on [official Node.js website](https://nodejs.org/) and download the installer.
Also, be sure to have `git` available in your PATH, `npm` might need it (You can find git [here](https://git-scm.com/)).

- #### Node installation on Ubuntu

  You can install nodejs and npm easily with apt install, just run the following commands.

      $ sudo apt install nodejs
      $ sudo apt install npm

- #### Other Operating Systems
  You can find more information about the installation on the [official Node.js website](https://nodejs.org/) and the [official NPM website](https://npmjs.org/).

If the installation was successful, you should be able to run the following command.

    $ node --version
    v8.11.3

    $ npm --version
    6.1.0

If you need to update `npm`, you can make it using `npm`! Cool right? After running the following command, just open again the command line and be happy.

    $ npm install npm -g

###
## Modules Used:
```
    "ejs": "~2.6.1"
    "express": "~4.16.1",
    "express-ejs-layouts": "^2.5.0",
    "express-session": "^1.16.2",
    "express-validator": "^6.1.1",

  ```


## Install

    $ git clone https://github.com/YOUR_USERNAME/PROJECT_TITLE
    $ cd PROJECT_TITLE
    $ npm install

## Configure app

Open `a/nice/path/to/a.file` then edit it with your settings. You will need:

- A setting;
- Another setting;
- One more setting;

## Running the project
Puroject runned using nodemon. to install nodemon:
```
npm install -g nodemon
```
    
Starting Application:
```
$ npx nodemon
```

## PM2 is used to build production. To install PM2 and other pm2 functionalities:
    $ npm install pm2 -g
    $ pm2 start app.js

## Visualizations
Visualizations are done with Chartjs module
```
<script src="https://chartjs-plugin-datalabels.netlify.com/chartjs-plugin-datalabels.js"></script>

npm install chart.js
```
