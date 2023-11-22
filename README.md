# Requirements

1. Use SCSS;
2. Use jQuery, ES6+. Allowed front-end libraries and plugins (don't use any other 3rd party JS libraries or plugins):
   - jQuery
   - https://jqueryvalidation.org
   - lodash
3. Semantically correct HTML;
4. Must work in Chrome;
5. Use the `data-plugin="..."` HTML attribute to initialize plugins on elements as shown in the example file `src/javascripts/main.js`
   - Custom plugins must NOT be attached to elements by calling a plugin directly on the selector `$(selector).plugin()`
   - All JS plugins must be reusable (should work if attached to multiple elements).
6. Responsive / adaptive version is a plus;
7. Page layout similar to the attached layout-instructions.jpg;
8. Delivered files must NOT include `node_modules` or `public` folders.
9. Compress files into the archive adding your first and last names to the archive file name.

## !!! IMPORTANT !!!

- Follow the requirements;
- Do not use any other libraries than listed above. We would like to assess your programming and problem-solving skills;
- Test your code against the above requirements before delivery. Fail to comply with the requirements decreases your chances for a job;
- Write clean and well-stuctured code. We require consistency in code formatting and naming;
- Show your programming skills: write reusable code.

# How to use bundler / build process

The build process does the following:

1. Copies all files from `src/static/` into `public/` folder;
2. Compiles and bundles JS from `src/javascripts/` into `public/javascripts/` folder;
3. Compiles SCSS into CSS from `src/stylesheets/` into `public/stylesheets/` folder;
4. Runs a static server in development mode.

## Installing

Make sure NodeJS v12.0 is installed.
Run `npm install` in command promt or shell to install dependencies.

## Build files

To build files once run `npm run production`.
To start a web-server, build files, and rebuild the project on file changes run `npm run development`. The web server will be available at http://localhost:3000.

# Tasks

## Animations = 1.5h

Write a jQuery plugin to apply animation to a button.

1. In the right top corner of the screen place a fixed positioned button;
2. Create reusable animation which will fade-out the button: element scales down from 1 to 0.6 and is being hidden from right to left, see attached animation-instructions.jpg;
3. Create reusable animation which will fade-in the button: animation opposite to fade-out, see animation-instructions.jpg;
4. Apply `fade-in` animation when a user moves the cursor into the top half of the screen. Hide the button using `fade-out` animation when the user moves the cursor to the bottom half of the screen.

## Form = 3h

1. Create a form with multiple inputs:
   - One required text field;
   - Two phone number fields.
2. Implement form fields value validation using https://jqueryvalidation.org/ library
   - Add a custom error message next to the required text field when the field is empty;
   - Add a custom validation rule to to check value provided in phone number fields. The rule should pass when a phone number entered consists of a "+" sign, digits and have a length of at least 5 characters. Display the error message "Invalid phone number" in case of validation failure;
   - Validation should work if more inputs are added or existing inputs are removed from the index.html;
   - Validation messages must not be hardcoded inside the .js files
3. Prevent page reloading on successful form validation and hide form using `fade-out` animation showing the success message using `fade-in`.
   Make a smooth transition, eg. success message should fade-in at the same time (simultaneously) as the form is fading out.

## Image lazy loading = 1.5h

1. Image should start loading when a user scrolls down to its position;
2. There are three screen breakpoints (512, 768, and 1280px). Use relevant image for each breakpoint `src/images/image-...jpg` (`public/images/image-...jpg`);
3. Image must be outside viewport visible area (below the fold), make sure it works on all resolution. See layout-instructions.jpg;
4. Do not use `loading="lazy"` attribute, we would like to see your JS implementation of lazy loading.

## Text animation = 1h

1. Add a block of text on the right side of the image;
2. When the user scrolls down to the text show the text using some animation of your choice.

## Styles = 1h

Show your ability to write reusable and well structured SCSS.

There are 2 `.scss` files in `src/stylesheets/`. The build process generates an invividual `.css` for each of them.
Only one of the `.css` files can be used on a website at a time. It should be possible to change the website theme by changing the name of the CSS file to load. Development of theme switcher is not required.

1. `light` and `dark` should look the same, except for:
   - `light.css` - white background, dark text, font 'Arial', line color `#ccc`;
   - `dark.css` - dark background, white text, font 'Times New Roman', line color `#333`.
2. Source SCSS code must be reused between themes as much as possible;
3. Use `light.css` scheme in your test assignment, but we will test `dark.css` too.
