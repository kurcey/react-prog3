# Mobile Flashcards Project

For the UdaciCards project, I build a mobile application on Android that allows users to study collections of flashcards. The app will allow users to create different categories of flashcards called "decks", add flashcards to those decks, then take quizzes on those decks.

I create this project using create-react-native-app. There will be no starter code that you need to download.

The `_DATA.js` file represents a fake database and methods that starts the project with an initial card.

## How to Run

The application requires only `npm install` and `npm start` to install and launch.

## Libarys used

redux to keep all views connected

- npm install react-redux --save
- npm install redux --save
- npm install redux-persist --save

navigation to navigate inbetween screens corectly

- npm install @react-navigation/native --save
- npm install @react-navigation/material-bottom-tabs --save
- npm installreact-native-tab-view --save
- npm install react-native-paper --save
- npm install @react-navigation/stack --save

native elements for working on device

- npm install react-native-elements --save
- npm install react-native-reanimated --save
- npm install react-native-gesture-handler --save
- npm install react-native-screens --save
- npm install react-native-safe-area-context --save
- npm install @react-native-community/masked-view --save
- npm install @react-native-community/async-storage --save

expo for built in notifications

- npm install -g expo-cli
- npm install expo-permissions --save
- npm install expo-constants --save
- npm install expo-file-system --save

### Components

Project COmponents include:

| Name          | Description                                            |
| ------------- | ------------------------------------------------------ |
| `AddCard.js`  | Screen used to add a card to a specific deck           |
| `DeckList.js` | Screen used to see a list of decks within the database |
| `DeckView.js` | Screen used to see a spicific deck statistics          |
| `Home.js`     | Main page used to handel all routing and navigations   |
| `NewDeck.js`  | Screen used to add a new deck to the database          |
| `Quiz.js`     | Screen used to take quiz from cards within a deck      |
| `Score.js`    | Scren used to show the score of a quiz taken           |

### Redux datastore Files

Redux Reducers include:

| Name       | Description                             |
| ---------- | --------------------------------------- |
| `decks.js` | The Reducer to keep the deck infomation |
| `index.js` | Combines all reducers                   |
| `_DATA.js` | Inital data and mock database functions |

Redux include:

| Name             | Description                                            |
| ---------------- | ------------------------------------------------------ |
| `actions.js`     | Keeps all the actions functions                        |
| `actionTypes.js` | Keeps the constants for all reducer actions            |
| `store.js`       | Loads inital data and initilizae redux store and thunk |

Utils include:

| Name         | Description                                |
| ------------ | ------------------------------------------ |
| `helpers.js` | Used to add notification features via expo |

Main file:

| Name     | Description                                                                 |
| -------- | --------------------------------------------------------------------------- |
| `App.js` | Main entry point used to wrap all sub screens in redux thunk and Navigation |

### Database Calls

The Application talks to the mock database via 3 methods:

- `saveDeckTitle()`
- `addCardToDeck()`
- `addAllQuestion`
