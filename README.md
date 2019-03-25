Version 1:

Initial Commit:
Simple Webpack Setup.
Will take html file from src folder and move it to dist folder with minification and include the entry JS file
Will take the JS file in src folder and move it to dist folder will minify for build run, has babel for backwards compatibility 
	-> updated output section so JS files will be loaded into a JS directory
Will take SCSS file and convert it to CSS and load the script via JS when needed
There is a plugin to remove all files in the dist folder and then reload all the files each time
Update to take images and move them to dist/images folder

RUN:
npm run develop 
to have the JS not be minified and easy to read and have the tool watch and update the files as you work

npm run build 
to have everything minified and ready for deployment

Things to add later:
	-> Add Webpack Hot module Replacement