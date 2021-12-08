import { LOGIN, LOGOUT, DISPLAY_NOTIFICATION_DRAWER, HIDE_NOTIFICATION_DRAWER } from './uiActionTypes';

// https://www.youtube.com/watch?v=2iAKHu2rw-g
// Action creators are functions that create actions
export const login = (email, password) => (
  {
    type: LOGIN,
    user: { email, password }
  }
);

export const logout = () => (
  {
    type: LOGOUT
  }
);

export const displayNotificationDrawer = () => (
  {
    type: DISPLAY_NOTIFICATION_DRAWER
  }
);

export const hideNotificationDrawer = () => (
  {
    type: HIDE_NOTIFICATION_DRAWER
  }
);
