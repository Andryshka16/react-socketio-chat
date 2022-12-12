import { configureStore } from '@reduxjs/toolkit';
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import {
	messagesReducer, alertReducer,
	userReducer, onlineUsersReducer,
} from "./features"
import { Provider } from 'react-redux';

const root = createRoot(document.getElementById("root"))

const store = configureStore({
	reducer: {
		user: userReducer,
		alert: alertReducer,
		messages: messagesReducer,
		onlineUsers: onlineUsersReducer,
	},
});

root.render(
    <Provider store = { store }>
        <App />
    </Provider>
)