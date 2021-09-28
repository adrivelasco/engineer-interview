# Task Board

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

- You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).
- To learn React, check out the [React documentation](https://reactjs.org/).

![Preview](https://personal-images-hub.s3.us-east-1.amazonaws.com/Screen%20Shot%202021-09-27%20at%2011.23.48%20PM.png)

## Getting Started

Start the project in **development** mode:

```
npm install
npm run start

# Then, open http://localhost:3000 in your browser.
```

Run the interactive **test** runner:

```
npm run test
```

Builds the app for **production** to the `build` folder.

```
npm run test
```

### Notes

- [Chakra UI](https://chakra-ui.com/) has been used to build and customize the user interface
- All the logic to manipulate the tasks is encapsulated under `useTaskBoard.tsx` hook file and provided by `<TaskBoardProvider />` context provider.
- I wrote unit tests for the most relevant and critical pieces of the app.
- It's fully-responsive

### Features

1. The list has 3 states. Each represented by a column. Similar to Trello.
   1. `Todo`
   2. `In Progress`
   3. `Done`
2. Each list item has a right and left arrow button.
   1. The right arrow moves the list item from:
      1. `Todo` to `In Progress`
      2. `In Progress` to `Done`
   2. The Left arrow moves the list item from
      1. `Done` to `In Progress`
      2. `In Progress` to `Todo`
3. If the list in the in the `Todo` column, the left button should be disabled
4. If the list is in the `Done` column, the right button should be disabled.
5. There should be form with a text input below the buttons. When the user submits the form, the text from the text input should be added to a new todo item in the `Todo` column.
