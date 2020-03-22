// ensure to not run tests before the DOM is ready
$(function() {

	/*_________________________
	RSS feed definitions
	_________________________*/

    describe('RSS Feeds', function() {
				 // ensure allFeeds variable is defined and it is not empty
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

				// ensure each feed has a URL defined and the URL is not empty
				it('have a URL and the URL is not an empty string', function() {
						for (const feed of allFeeds) {
							expect(feed.url).toBeDefined();
							expect(feed.url.length).not.toBe(0);
						}
				});

				// ensure each feed has a name defined and the name is not empty
				it('have a name and the name is not an empty string', function() {
						for (const feed of allFeeds) {
							expect(feed.name).toBeDefined();
							expect(feed.name.length).not.toBe(0);
						}
				});
    });


		/*_________________________
		burger menu
		_________________________*/

		describe('The menu', function() {
				const bodyEl = document.querySelector('body');

				// test default visibility
				it('is hidden by default', function() {
						// check if body has the class "menu-hidden" and menu hence is hidden
						expect(bodyEl.classList.contains('menu-hidden')).toBe(true);
				});

				// test toggle functionality
				it('changes visibility when the menu icon is clicked', function() {
						const burgerIcon = document.querySelector('.menu-icon-link');

						// simulate first click
						burgerIcon.click();
						expect(bodyEl.classList.contains('menu-hidden')).not.toBe(true);

						// simulate second click
						burgerIcon.click();
						expect(bodyEl.classList.contains('menu-hidden')).toBe(true);
				});
		});


		/*_________________________
		initial entries of the feed reader
		_________________________*/

		describe('Initial Entries', function() {

			// wait for asynchronous function to complete
			beforeEach(function(done) {
				loadFeed(0, function() {
					done();
				});
			});

			// test once asynchronous function is complete
			it('have at least one single entry element within the feed container', function(done) {
				const entryEl = document.querySelectorAll('.feed .entry');
				// test if at least one entry element exists which is not empty
				expect(entryEl.length).toBeGreaterThan(0);
				done();
			});
		});


		/*_________________________
		new feed content on update
		_________________________*/

		describe('New Feed Selection', function() {
			let oldContent;
			let newContent;

			// load feed twice
			beforeEach(function(done) {

				// load feed content for the first time
				loadFeed(0, function() {
					oldContent = document.querySelector('.feed').textContent;

					// load feed content for the second time
					loadFeed(1, function() {
						newContent = document.querySelector('.feed').textContent;
						done();
					});
				});
			});

			// test if loaded feeds differ from each other
			it('is displayed when the loadFeed function loads a new feed', function(done) {
				expect(oldContent).not.toEqual(newContent);
				done();
			});
		});
}());
