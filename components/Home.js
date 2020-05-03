import * as React from 'react';
import {Animated} from 'react-native';

import {createStackNavigator} from '@react-navigation/stack';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import Ionicons from 'react-native-vector-icons/AntDesign';

import NewDeck from './NewDeck';
import DeckList from './DeckList';
import DeckView from './DeckView';
import AddCard from './AddCard';
import Quiz from './Quiz';
import Score from './Score';

const Tab = createMaterialBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="DeckList"
      tabBarOptions={{
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
      }}>
      <Tab.Screen
        name="DeckList"
        component={DeckListStack}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color, size}) => (
            <Ionicons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="NewDeck"
        component={NewDeckStack}
        options={{
          tabBarLabel: 'New Deck',
          tabBarIcon: ({color, size}) => (
            <Ionicons name="addfile" color={color} size={size} />
          ),
        }}
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
        name="DeckView"
        component={DeckView}
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
      <Stack.Screen
        name="Score"
        component={Score}
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
