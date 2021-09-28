# Task Board

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

- You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).
- To learn React, check out the [React documentation](https://reactjs.org/).

![Preview](https://personal-images-hub.s3.us-east-1.amazonaws.com/Screen%20Shot%202021-09-27%20at%2011.23.48%20PM.png?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDMaCXNhLWVhc3QtMSJHMEUCIQDu67m4g1XKxELPTe7qUjjt9j%2BCkFA91ioMgeObGqmIGgIgKY4E7kzp%2BotGmPQ415QVcocN8Bp67N8zQ8UTyRQVqBYq%2FwIIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARABGgwwODkyMzY3ODcwNzYiDPfsjmHVF9AZ5BtvCyrTAmK%2F3hX92Wq95lT%2FdzK7NDl5R7ZrxvEojx3rHmYocU8QgNIxRLe9ZTayc57s3N9CvveoyqBEwdYVWbYmZHU7He4gImk%2Fc6m9kAtf4dDTtRxZTe7Chh29p9YKDD814kHuS8sK2%2FVvxtvyqEGKPrIERQDWygH%2BeS%2BTjWlAJtHW8FqPTlc%2FQkD1vvwjAfpaOgfZ4Nz0eJgTWpYpTOQwD%2BiQCj5ZjRqcd0%2FyslEpCwvYJJQBh26bGpk1YRZDBgV9MRGxu20VVjyHNzUrrbYnL1lUOhP79rOlQh%2Ff7cAQSfoMxkAoCaJkPr9qoWnqA40A0gK0CIJOs3QgY%2F%2B6YP541WJGY8d%2BIpWqsIub4p5v%2FOOoUdbL3l0rGltrnuBXSUhsCueVcOSywFLAI1Y5Zbcj0v4X9snsJQ1wU8Ok5YhnkOL2gb0ZRdpFQdd1VDtDXsRZlB3jEUN51TCD98mKBjqzAvtTDD%2FgN771ZeToIymdsR4dcZYQwLwwqbiNrcLuFSYXCdF9WaeJrC51ToPsUIs86ZDjWneij5PXFVxnmdI%2FrJeI4kWrLgRaEwF6N72ojhaSTPSLeqwUrAXzY4njCDJl5vt%2BQFb5r8%2BX%2BN7DZQNjZ64mUeU81mMh36hcCOtPOCoZE0HZcheX1cJ8lOmrP3iqFn7n5Gv6kZDVRzumrz0Sp9Ff2dyqSQmsR8NABKboEGJo4vt1SpbMqOZi77VtTanr%2BNiNftlRQMuFNuqBRpO8OpQ9V5uyqAosD7aFnDOYKcrAvv78WI%2BmVeNPmLFVmmVQXbF8%2Br6tEwE%2FqY1iIE7795RcabkTnN6mQ8M4RpMVHG99RKX0xHHyrJACI2TLLjy6cuRCLcl2J%2B0NCFOROASCkLqJJA0%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20210928T022440Z&X-Amz-SignedHeaders=host&X-Amz-Expires=300&X-Amz-Credential=ASIARJRXNJ6CC3CYJLGF%2F20210928%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=b801158b3820dbe3ab98ac9f480a400297972b73eacfe22ca4ad4ae6a6d70c4c)

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
