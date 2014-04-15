var compileES6 = require('broccoli-es6-concatenator')
var pickFiles = require('broccoli-static-compiler');
var mergeTrees = require('broccoli-merge-trees')


var app = 'app'
app = pickFiles(app,{
	srcDir: '/',
	destDir: 'app-kit'
})

var appJS = compileES6(app, {
	inputFiles: ['/app-kit/**/*.js'],
	outputFile: '/dist/app.js'
})

module.exports = mergeTrees([appJS]);