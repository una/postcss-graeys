var postcss = require('postcss');
var expect  = require('chai').expect;

var plugin = require('../');

var test = function (input, output, opts, done) {
    postcss([ plugin(opts) ]).process(input).then(function (result) {
        expect(result.css).to.eql(output);
        expect(result.warnings()).to.be.empty;
        done();
    }).catch(function (error) {
        done(error);
    });
};

describe('postcss-graeys', function () {

    it('converts grey to gray individually', function (done) {
        test('p { color: grey; }',
             'p { color: gray; }',
             {}, done);
    });

    it('converts dimgrey to dimgray', function (done) {
        test('p { color: dimgrey; }',
             'p { color: dimgray; }',
             {}, done);
    });

    it('converts a greyscale filter to grayscale', function (done) {
        test('p { filter: greyscale(50%) }',
             'p { filter: grayscale(50%) }',
             {}, done);
    });

});
