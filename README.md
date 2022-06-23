# mamali-abag

## Technical requirements

- Material UI 5 - Please use the latest version of Material UI
- Typescript, Next.js, React - start with the template [provided by material UI](https://mui.com/getting-started/example-projects/#heading-official-examples)
- Refrain from using plain CSS or SCSS (only in special cases if needed) and rather use MUI's native styling processors `createTheme` , `makeStyles` , `sx` property and more
- Build the app in such a way that it is straightforward to change properties globally. In other words, keep colors, spacings, borders (and more) bound to few properties of the MUI theme
- **BONUS** implement dark mode color palette using your own colors (design no evaluated)

### Steps to init client side:

1.  `yarn`

2.  `yarn dev`

### Tech Stack:

- MUI latest
- React latest
- Typescript
- NextJS
- Eslint / Prettier / husky / lint-staged config

## Things that can be improved:

- Add tests

- Create a custom hook for localstorage (if needed), or use a persist tool for state managment

- We can add a loader component for ethereums requests

- We can use Material UI for styling correctly dropdowns

- Split up the code into smaller components

- We can use a better way to handle errors

- Probably the design is not pixel perfect, but it works well enough for now

- Make a better organization for components, maybe using atomic design principles as figma does

- Creating breakpoints for tablet

- Change SX styling for dropdowns

- Change some SX styling for mui theme styles, create more variants, or add makeStyles on each component
