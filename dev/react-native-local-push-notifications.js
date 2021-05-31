import React from 'react';
import { View, Text, Button, Platform } from 'react-native';
import PushNotification from 'react-native-push-notification';

PushNotification.configure({
    onRegister: function (token) {
        console.log("TOKEN:", token);
    },

    onNotification: function (notification) {
        console.log("NOTIFICATION:", notification);
    },

    onAction: function (notification) {
        console.log("ACTION:", notification.action);
        console.log("NOTIFICATION:", notification);
    },

    onRegistrationError: function (err) {
        console.error(err.message, err);
    },

    permissions: {
        alert: true,
        badge: true,
        sound: true,
    },

    popInitialNotification: true,
    requestPermissions: Platform.OS === 'ios',
});

PushNotification.createChannel(
    {
        channelId: "channel-test",
        channelName: "My channel",
        vibrate: true,
    },
    (created) => console.log(`createChannel returned '${created}'`)
);

const App = () => {

    const cancelNotify = () => {
        PushNotification.cancelAllLocalNotifications();
    }

    const notify = () => {
        PushNotification.localNotification({
            channelId: "channel-test",
            title: "My Notification Title",
            message: 'You have a notification here!',
        })
    }

    const scheduleNotify = () => {
        PushNotification.localNotificationSchedule({
            channelId: "channel-test",
            title: "My schedule Notification Title",
            message: "My schedule Notification Message",
            date: new Date(Date.now() + 5 * 1000), // 5 secs
            repeatType: "time",
            repeatTime: (5 * 1000), // 5 secs
            allowWhileIdle: true,
        });
    }

    return (
        <View>
            <Text>
                Learning about local notifications!
      </Text>

            <Button
                onPress={notify}
                title="Send Notification"
            />
            <Button
                onPress={scheduleNotify}
                title="Send schedule Notification"
            />
            <Button
                onPress={cancelNotify}
                title="Cancel Notification"
            />
        </View>
    )
}

export default App;

/*
Follow docs: https://github.com/zo0r/react-native-push-notification

It doesn't need to run "react-native link" !
 */