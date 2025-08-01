# TaskApp Notification Backend

A simple Express backend for sending push notifications via Expo.

## Setup Instructions

1. Clone or unzip this repo.
2. Run `npm install`
3. Create `.env` file and add your `FCM_SERVER_KEY`
4. Run `node index.js`

## API Endpoint

POST /send-notification

Request Body:
{
  "expoPushToken": "ExponentPushToken[xxx]",
  "title": "Task Update",
  "body": "New task assigned"
}"# taskapp-notify-backend" 
# taskapp-notify-backend
