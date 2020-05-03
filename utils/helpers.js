import {AsyncStorage} from 'react-native';

import {Notifications} from 'expo';
import * as Permissions from 'expo-permissions';

const NOTIFICATION_KEY = 'Project3:notifications';

export function getDailyReminderValue() {
  return {
    today: "👋 Don't forget to log your data today!",
  };
}

export function isBetween(num, x, y) {
  if (num >= x && num <= y) {
    return true;
  }

  return false;
}

export function timeToString(time = Date.now()) {
  const date = new Date(time);
  const todayUTC = new Date(
    Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()),
  );
  return todayUTC.toISOString().split('T')[0];
}

export function clearLocalNotification() {
  return AsyncStorage.removeItem(NOTIFICATION_KEY)
  .then(() => {
    if (Notifications) {
      Notifications.cancelAllScheduledNotificationsAsync();
    }
  });
}

function createNotification() {
  return {
    title: 'Take your Quiz!',
    body: "👋 don't forget to take your quiz for today!",
    ios: {
      sound: true,
    },
    android: {
      sound: true,
      priority: 'high',
      sticky: false,
      vibrate: true,
    },
  };
}

export function setLocalNotification() {
  AsyncStorage.getItem(NOTIFICATION_KEY)
    .then(JSON.parse)
    .then(data => {
      if (data === null) {
        Permissions.askAsync(Permissions.NOTIFICATIONS)
          .catch(function(error) {
            console.log(
              'There has been a problem with getting permision for your notification: ',
            );
            // ADD THIS THROW error
            // throw error;
          })
          .then(({status}) => {
            if (status === 'granted') {
              Notifications.cancelAllScheduledNotificationsAsync().catch(
                function(error) {
                  console.log(
                    'There has been a problem with canceling notification: ',
                  );
                  // ADD THIS THROW error
                  // throw error;
                },
              );

              let tomorrow = new Date();
              tomorrow.setDate(tomorrow.getDate() + 1);
              tomorrow.setHours(20);
              tomorrow.setMinutes(0);

              Notifications.scheduleLocalNotificationAsync(
                createNotification(),
                {
                  time: tomorrow,
                  repeat: 'day',
                },
              ).catch(function(error) {
                console.log(
                  'There has been a problem with secheduling your notification: ',
                );
                // ADD THIS THROW error
                // throw error;
              });

              AsyncStorage.setItem(NOTIFICATION_KEY, JSON.stringify(true));
            }
          })
          .catch(function(error) {
            console.log(
              'There has been a problem with getting permision status: ',
            );
            // ADD THIS THROW error
            // throw error;
          });
      }
    });
}
