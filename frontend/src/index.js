import { configureStore } from '@reduxjs/toolkit';
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import userReducer from "./features/user/userSlice"
import messagesReducer from "./features/chat/chatSlice"
import onlineUsersReducer from "./features/onlineUsers/onlineUsers"
import { Provider } from 'react-redux';

const root = createRoot(document.getElementById("root"))

const store = configureStore({
	reducer: {
		user: userReducer,
		messages: messagesReducer,
		onlineUsers: onlineUsersReducer,
	},
});
root.render(
    <Provider store = { store }>
        <App />
    </Provider>
)