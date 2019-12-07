# folks-in-space
### An app for finding out where people are when they aren't here

## Design Goals
Functionality:
* Google Oauth2
* Main page welcome
* Responsive nav bar collapsing to hamburger via Materialize
* 4 menu items (3 secured React routes + logout redirect to home)
* Oohs and Aahs
Testing with Jest framework:
* Functionality
* Boundary cases
* Code coverage
* Accessibility
Misc Deliverables:
* Readme.md
* Git repo

## Open Issues


## Dev Notes
Date | Description
---- | ----
2019-12-7 | Housekeeping
&nbsp; | Added some descriptive text to ISS Location pane
&nbsp; | Removed extra console messages
2019-12-6 | Making it pretty
&nbsp; | Made the ISS path track appear on the globe
&nbsp; | Included material-ui
&nbsp; | Applied Material UI styles to nav menu
&nbsp; | Rough CSS format of content for each app page
2019-12-5 | Making API calls and displaying results to pages
&nbsp; | Created API handler for people-in-space API
&nbsp; | Created API handler for ISS Location API
&nbsp; | Created constants file
&nbsp; | Included react-globe
2019-12-4 | Initial commit
&nbsp; | Created basic React project space with create-react-app
&nbsp; | Added Git repo with .env and .gitignore
&nbsp; | Started this Readme.md
&nbsp; | Included react-google-login, react-router-dom, and axios
&nbsp; | Added routes for Home, Profile, Astronauts, and ISSLocation
&nbsp; | Generated API key at console.developers.google.com
&nbsp; | Implemented Google OAuth
&nbsp; | Implemented Profile page
&nbsp; | Protected React routes