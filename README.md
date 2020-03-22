# Feed Reader Testing

## Table of Contents

- [Project overview](#project-overview)
- [How to run the application](#how-to-run-the-application)


## Project overview
The goal of this project was to get familiar with browser based testing and the Jasmine framework in particular. The precise task was to write several test suites that make sure the functionalities of the "UdaciFeeds Website" (which was the starter code provided by Udacity) work properly. Tests are carried out on the toggle functionality of the menu and on the loading behavior of the Google Feed Reader API which was used to implement the UdaciFeeds.

The following seven tests were implemented:
- test if RSS Feeds are defined
- test if RSS Feeds have a URL and the URL is not an empty string
- test if RSS Feeds have a name and the name is not an empty string
- test if the menu is hidden by default
- test if the menu changes visibility when the menu icon is clicked
- test if initial entries have at least one single entry element within the feed container
- test if a new feed selection is displayed when the loadFeed function loads a new feed


## How to run the application

### Quickstart
Access this [GitHub page](https://marlisa31.github.io/feed-reader/). It shows the SpecRunner (`index.html`). Scroll to the bottom of the page to see the Jasmine tests.

### Download
Download the repository and open `index.html` in your browser (you can find the file in the root folder of the repository). The Jasmine tests are displayed at the bottom of the page. Functionalities are written in `app.js` (js sub folder) whereas tests are written in `feedreader.js` which is located in the jasmine > spec folder.
