import * as React from 'react';
import {Animated, StatusBar} from 'react-native';

import {createStackNavigator} from '@react-navigation/stack';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';

import NewDeck from './NewDeck';
import DeckList from './DeckList';
import DeckView from './DeckView';
import AddCard from './AddCard';
import Quiz from './Quiz';

const Tab = createMaterialBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="DeckList"
      tabBarOptions={{
        activeTintColor: '#e91e63',
        labelStyle: {fontSize: 20},
        style: {backgroundColor: 'powderblue'},
      }}>
      <Tab.Screen
        name="DeckList"
        component={DeckListStack}
        options={{tabBarLabel: 'Deck List'}}
      />
      <Tab.Screen
        name="NewDeck"
        component={NewDeckStack}
        options={{tabBarLabel: 'New Deck'}}
      />
    </Tab.Navigator>
  );
}

const Stack = createStackNavigator();

function NewDeckStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="NewDeck"
        component={NewDeck}
        options={
          {
            //   headerTintColor: 'white',
            //   headerStyle: {backgroundColor: 'tomato'},
          }
        }
      />
      <Stack.Screen
        name="AddCard"
        component={AddCard}
        options={{headerStyleInterpolator: forFade}}
      />
      <Stack.Screen
        name="Quiz"
        component={Quiz}
        options={{headerStyleInterpolator: forFade}}
      />
    </Stack.Navigator>
  );
}

function DeckListStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="DeckList"
        component={DeckList}
        options={
          {
            //  headerTintColor: 'white',
            //   headerStyle: {backgroundColor: 'tomato'},
          }
        }
      />
      <Stack.Screen
        name="DeckView"
        component={DeckView}
        options={{headerStyleInterpolator: forFade}}
      />
    </Stack.Navigator>
  );
}

const forFade = ({current, next}) => {
  const opacity = Animated.add(
    current.progress,
    next ? next.progress : 0,
  ).interpolate({
    inputRange: [0, 1, 2],
    outputRange: [0, 1, 0],
  });

  return {
    leftButtonStyle: {opacity},
    rightButtonStyle: {opacity},
    titleStyle: {opacity},
    backgroundStyle: {opacity},
  };
};

export default function Home() {
  return <MyTabs />;
}
