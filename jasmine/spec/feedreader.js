// ensure to not run tests before the DOM is ready
$(function() {
		// RSS feed definitions
    describe('RSS Feeds', function() {
				 // ensure allFeeds variable is defined and it is not empty
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

				// ensure each feed has a URL defined and the URL is not empty
				it('have a URL', function() {
						for (const feed of allFeeds) {
							expect(feed.url).toBeDefined();
							expect(feed.url.length).not.toBe(0);
						}
				});

				// ensure each feed has a name defined and the name is not empty
				it('have a name', function() {
						for (const feed of allFeeds) {
							expect(feed.name).toBeDefined();
							expect(feed.name.length).not.toBe(0);
						}
				});
    });

		// burger menu
		describe('The menu', function() {
				const bodyEl = document.querySelector('body');

				it('is hidden by default', function() {
						// check if body has the class "menu-hidden" on page load and hence menu is hidden
						// spyOn(window, 'open');
						expect(bodyEl.classList.contains('menu-hidden')).toBe(true);
				});

				it('changes visibility when the menu icon is clicked', function() {
						// test toggle functionality
						const burgerIcon = document.querySelector('.menu-icon-link');

						// first, third, ... (even) click
						burgerIcon.click();
						expect(bodyEl.classList.contains('menu-hidden')).not.toBe(true);

						// second, fourth, ... (odd) click
						burgerIcon.click();
						expect(bodyEl.classList.contains('menu-hidden')).toBe(true);
				});
		});

		describe('Initial Entries', function() {

		});
    /* TODO: Write a new test suite named "Initial Entries" */

        /* TODO: Write a test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         * Remember, loadFeed() is asynchronous so this test will require
         * the use of Jasmine's beforeEach and asynchronous done() function.
         */

    /* TODO: Write a new test suite named "New Feed Selection" */

        /* TODO: Write a test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * Remember, loadFeed() is asynchronous.
         */
}());
