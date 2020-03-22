
// used resources: Google Feed Reader API, Handlebars templating libary, jQuery

// names and URLs to all of the feeds
var allFeeds = [
		{
        name: 'Udacity Blog',
        url: 'http://blog.udacity.com/feed'
    }, {
        name: 'CSS Tricks',
        url: 'http://feeds.feedburner.com/CssTricks'
    }, {
        name: 'HTML5 Rocks',
        url: 'http://feeds.feedburner.com/html5rocks'
    }, {
        name: 'Linear Digressions',
        url: 'http://feeds.feedburner.com/udacity-linear-digressions'
    }
];

 // starting application after Google Feed Reader API is loaded asynchronously
function init() {
    // Load the first feed that is defined
    loadFeed(0);
}

 // load feeds using the Google Feed Reader API
 function loadFeed(id, cb) {
     var feedUrl = allFeeds[id].url,
         feedName = allFeeds[id].name;

     $.ajax({
       type: "POST",
       url: 'https://rsstojson.udacity.com/parseFeed',
       data: JSON.stringify({url: feedUrl}),
       contentType:"application/json",
       success: function (result, status){

                 var container = $('.feed'),
                     title = $('.header-title'),
                     entries = result.feed.entries,
                     entriesLen = entries.length,
                     entryTemplate = Handlebars.compile($('.tpl-entry').html());

                 title.html(feedName);   // Set the header text
                 container.empty();      // Empty out all previous entries

									// loop through loaded entries and parse it against the entryTemplate, append resulting HTML to entires on the page
                 entries.forEach(function(entry) {
                     container.append(entryTemplate(entry));
                 });

                 if (cb) {
                     cb();
                 }
               },
       error: function (result, status, err){
                 //run only the callback without attempting to parse result due to error
                 if (cb) {
                     cb();
                 }
               },
       dataType: "json"
     });
 }

 // loads the Google Feed Reader API, defines funtion that will be called once API is done loading
google.setOnLoadCallback(init);

 // only execute once the DOM is ready
$(function() {
    var container = $('.feed'),
        feedList = $('.feed-list'),
        feedItemTemplate = Handlebars.compile($('.tpl-feed-list-item').html()),
        feedId = 0,
        menuIcon = $('.menu-icon-link');

		 // loop through all feeds
    allFeeds.forEach(function(feed) {
				// assign an id property to each of the feeds (based on array index)
				feed.id = feedId;
				// parse feed against the feedItemTemplate created with Handlebars and append it to Menu
        feedList.append(feedItemTemplate(feed));

        feedId++;
    });

    feedList.on('click', 'a', function() {
        var item = $(this);

				// hide menu if link in feedList is clicked
        $('body').addClass('menu-hidden');

				// load the feed
        loadFeed(item.data('id'));
        return false;
    });12

		 // toggle menu functionality (hide/show)
    menuIcon.on('click', function() {
        $('body').toggleClass('menu-hidden');
    });
}());
