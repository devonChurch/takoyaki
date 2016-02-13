# Takoyaki

A simple personal portal for the domain [devonchu.ch](http://devonchur.ch/).

## Installation

- Clone this repository.

    ```
    git clone https://github.com/devonChurch/takoyaki.git
    ```

- Install project dependancies.

    ```
    npm install
    ```

- Start up a local server at http://localhost:8080/, generate a development build and begin watching for changes to your source files.

    ```
    npm start
    ```

## Usage

This project uses NPM as a substitute for task runners like [Grunt](http://gruntjs.com/) and [Gulp](http://gulpjs.com/). Below are some of the most helpful NPM tasks you will utilise while working:

For a full range of tasks refers to the scripts object in the *package.json* file locating in the root directory of this project.



- #### Create a new post:
This will place a new reference at the top of the order.js config file and inject a new .jade template into the *./src/post* directory. **Note:** you must pass in a post file name as a parameter - this will act as the .jade and .html file name.

    ```
    npm run posts:new [post-file-name]
    ```

- #### Opens the order.js config file:
This is a Javascript array that dictates the order in which the posts will appear on the home page (in defending order). This allows you to not only customise the post order but also work on posts without actually outputting them to the home page when you curate.

    ```
    npm run posts:order
    ```

- #### Optimises media assets:
Image located in the *./src/img* folder are optimised using [ImageOptim](https://imageoptim.com/) with lossy compression. In that regard save your images as 100% percent quality as the web compression is automated.

    ```
    npm run media:render
    ```

    In addition the SVG’s in the *./src/svg/raw* folder are compiled into an inline SVG sprite that is embedded into each page via a Jade partial. Use the following snippet to reference a particular SVG from the sprite.

    ```
    svg: use(xlink:href='#raw-svg-filename')
    ```

- #### Start a development server:
Spins up a server at http://localhost:8080/. Adding / modifying files under the *./dist* directory will cause the browser to automatically refresh.

    ```
    npm run server
    ```

- #### Watch files:
Runs three simultaneous watch tasks for Jade files, JS / SCSS and image assets then runs their respective build functions.

    ```
    npm run watch
    ```

- #### Publish site:
Runs a production build of all site assets then pushes the ./dist folder content directly up to your gh-pages branch.

    ```
    npm run publish
    ```

## Posts
This project uses [Jade](http://jade-lang.com/) as its tempting system. Setting up and reordering posts is trivial using the post tasks listed under the **Usage** section above.

When editing a posts content make sure you follow the structure that the template generates for you.

The **page** object holds information utilised by other Jade partials:

- #### Heading, type and date:
 Are values that are procedurally curated into post snippets on the homepage in addition to generating the intro section on each dedicated post page. **Note:** supply the date attributes in numeric form and Jade will parse them into a more reader friendly format.

- #### Images:
Are supplied in both a generic and 2x variant. The naming convention between the two versions should only differ by the *-2x* appended onto the file name. The layout of the images can be dictated via the **images.type** attribute i.e. *3upEqual* or *2upEqual*. The **Images.data** array holds an object for each image instance. Each instance has the following attributes:
    - ###### Src:
    The name of the file. **Note** the *-2x* image versions are referenced automatically.
    - ###### Extension:
    File type i.e. jpg or png.
    - ###### Alt:
    The [alternate text](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img/#attr-alt) for the image.

- #### Technology
Is an simple array that holds a list of relevant web technologies to the associated post. This object will generate a custom section at the bottom of the main post content.

- #### More
Is an array that holds an object for each button instance. This object will generate a custom section above the footer. Each instance has the following attributes:
    - ###### Heading:
    The name of the button.
    - ###### Link:
    The button URL.
    - ###### Local
    A boolean dictating if the URL is off site or not - this controls the animation transition.

- The presence of either **technology** or **more** content creates a nav item at the top of the current page which automatically scrolls down to the referenced section when clicked.

The main content area of a post can be written in [markdown](https://guides.github.com/features/mastering-markdown/) by parsing in the filter option [*:markdown*](http://jade-lang.com/reference/filters/) into your Jade template.

## License

MIT
