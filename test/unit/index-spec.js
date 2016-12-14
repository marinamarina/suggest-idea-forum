var React = require('react');

describe('My tests', function() {
    var Module = require('../../');

    it('should render to string correctly', function() {
        var output = React.renderToString(React.createElement(Module, {}));
        expect(output).toContain('not been clicked');
    });
});
