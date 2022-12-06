import { configureStore } from '@reduxjs/toolkit';
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import userReducer from "./features/user/userSlice"
import { Provider } from 'react-redux';

const root = createRoot(document.getElementById("root"))

const store = configureStore({
	reducer: {
		user: userReducer,
	},
});
root.render(
    <Provider store={ store }>
        <App />
    </Provider>
)