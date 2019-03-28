Version 1:

Initial Commit:

Simple Webpack Setup.<br />
Will take html file from src folder and move it to dist folder with minification and include the entry JS file<br />
Will take the JS file in src folder and move it to dist folder will minify for build run, has babel for backwards compatibility, updated output section so JS files will be loaded into a JS directory<br />
Will take SCSS file and convert it to CSS and load the script via JS when needed<br />
There is a plugin to remove all files in the dist folder and then reload all the files each time<br />
Update to take images and move them to dist/images folder<br />
Add in webpack dev server so that you can access the application from http://localhost:8080/
Webpack Dev Server added in devServer section for devServer configuration (can change port, activate https, add custom headers)

RUN:

npm run develop <br />
to have the JS not be minified and easy to read and have the tool watch and update the files as you work

npm run build <br />
to have everything minified and ready for deployment

Things to add later:<br />
	-> Add Webpack Hot module Replacement