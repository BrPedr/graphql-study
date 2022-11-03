# About

It is a single full-page that displays fake user information in cards.
The project is structured following the Clean Architecture: [Clean Architecture - Uncle Bob](blog.cleancoder.com/uncle-bob/2012/08/13/the-clean-architecture.html).

## Main Tech

- React
- Typescript
- Graphql
- Apollo
- Styled Components
- Webpack
- Babel

## Setup

- `yarn install`

## Scripts

- `yarn start` - runs Webpack serve in development mode
  Open [http://localhost:3000](http://localhost:3000) to view it in the browser. It uses the webpack.dev.js file
- `yarn run build` - runs webpack to build the repository to
  production. It uses the webpack.prod.js file
- `yarn run types:check` - runs tsc with noEmit rule
- `yarn run lint` - runs eslint with max warnings set to 0
- `yarn run lint:check` - runs eslint check of src files
- `yarn run prettier` - runs prettier write
- `yarn run prettier:check` - runs prettier check of src files
- `yarn run generate-icon` - runs @svgr/cli to transform SVG files
  into functions

## Project Structure

```
+-- src -> codebase source
|  +-- presentation -> ui layer
|     +-- PresentationLayer.tsx -> main entry point of the application
|
|     +-- Main -> where external providers and the server
|         are initialized
|
|     +-- hooks -> custom hooks. They're used also as substitutes of the
|         Main layer, isolating the presentation layer from the usage of
|         specific librabies, such as Apollo
|
|     +-- pages -> responsibles for aggregating re-usable
|         components into a single page
|
|     +-- components -> re-usable components
|
|     +-- layouts -> theme options and styled components global styles
|
|  +-- domain -> domain layer
|     +-- entities -> entities that rule the application
|
|     +-- errors -> custom errors to deal with apis response
|
|  +-- data -> data layer
|     +-- protocols -> protocols requests
|
|     +-- useCases -> requests functions
|
|  +-- infra -> infra layer
|     +-- apollo -> where the configuration of Apollo library is
|
|     +-- server -> server mock with mocked endpoints
```

## Component Tested

- UserCard: `src/presentation/components/Card/UserCard`

## Mobile Friendly Approach

I usually set a theme option named `breakpoints` and create a custom hook to
watch for media queries and resizing of the screen. The combination of these
two methods already gives us a powerful tool to both use the correct CSS
using the breakpoints standardized for the whole application and to use
the Javascript through the hook when needed. If we need that something to
happen only in desktop screen size we could use the useMediaQuery custom hook
passing to it the breakpoint we want. This way, for example,
we could have `const isDesktop = useMediaQuery(theme.breakpoints.lg)` and use
the boolean to trigger some action or layout change.

I also make use of the grid and the flex CSS properties to allow the transition
of the correct layout to happen without the constant need of using queries.
A combination, for example, of width and max-width can provide a great way to
shape the size of a box without watching for the screen resize. The library
`styled-bootstrap-grid` is a simplest way to solve resize problems.

Another alternative is to develop layout components whose only responsability
is to render the children adapted to each screen size. At the same time that
this method saves time, it also creates a standard approach to the application,
preventing the recurrent need to restructure the different pages. We could have,
for example, a `SectionLayout`, a `SectionHeader`, and other components of this
type, to wrap both the other components, as the pages themselves.

## What I Would Do:

- Add a button to clear the search updating the user's list with previous 
  queries;
- Use focus on UserCards to activate the extra info;
- Open modal with keyDown 'Enter' when the user is focusing on some card;
- Replace Mirage.js with @graphql-tools
- Test the components: I would use Jest and React Testing Library;
- Return the previous data inside the useUserData hook, to only trigger the
  loader underneath the cards already loaded (or find some pre-existing Apollo
  method to do it);
- Add delete API and query;
- Integrate a map API inside the editUser modal;
- Create StoryBook components;
- Handle errors by creating useCases inside the Domain layer, to make them
  available to the whole application;
- Validate and sanitize inputs;
- Treat input text trimming extra spaces and removing punctuations with
  Regex function util;
- Update components to work in all screen sizes.