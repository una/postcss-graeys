var postcss = require('postcss');

module.exports = postcss.plugin('postcss-graeys', function () {
    return function (css) {
        css.eachDecl(function(decl) {
        decl.value = decl.value.replace('grey', 'gray');
    });
    };
});
