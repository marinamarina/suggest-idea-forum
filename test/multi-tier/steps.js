var assert = require('assert');

module.exports = function() {
    this.Then(/^the page should contain "([^"]*)"$/, function (text) {
        return this.browser.execute(function() {
                return document.querySelector('body').innerHTML;
            })
            .then(function(result) {
                assert(result.value.indexOf(text) !== -1);
            });
    });
};
