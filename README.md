# Timetables

Timetables is a simple react app that shows up to 7 current HSL route suggestions between any two locatons around the greater Helsinki area. You can just go to Google maps, pick out the locations, input them in the fields in the appbar and click the save button. You can also quickly switch the start and end locations. The locations are saved in the locale storage of the browser.

The app is meant for displaying the routes on a bigger screen and doesn't work well on phones or tables. It only shows the transit legs of the routes and only shows the suggested routes for the current time.

## Running the locally

The app is running in https://timetables-hsl.herokuapp.com/

To run the app locally, just do `git clone https://github.com/EskoSalaka/timetables.git`, `npm install` and `npm run start-dev` to run the development version or `npm run build` and `npm run start` to run the production build. You can then access the app in `localhost:3000`.

Another way is to pull and run the docker container of the app with `docker pull eskosalaka/timetables` and `docker run --rm -d -p 3000:3000/tcp eskosalaka/timetables:latest`
