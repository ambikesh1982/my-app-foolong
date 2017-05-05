#Clone the repository: https://github.com/ambikesh1982/my-app-foolong.git

	git clone https://github.com/ambikesh1982/my-app-foolong.git

Above command will create my-app-foolong directory in your local machine.
Now goto the my-app-foolong directory and run below commands-

	1. npm install

	2. npm install --save @angular/material

	3. npm install --save @angular/animations

	4. ng serve

Now open localhost in chrome browser to see the Web-App.

Pushing your changes to the repository:

	1. Check modified and new files in your local repository. Files shown in RED color are modified or new ones.

		git status

	2. Add the files that you have modified

		git add <filename>

	3. Again check the status. All files should be in green.

		git status

	4. Once you are ready to commit the changes, run the following command.

		git commit -m "Your comment on this change"

	5. Finally push the changes into the repository, so that everyone can use them.

		git push -u origin master

Check what is new in the repository.


# MyAppFoolong

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.0.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive/pipe/service/class/module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
