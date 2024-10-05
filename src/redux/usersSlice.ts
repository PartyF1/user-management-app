import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User } from './usersApi';

interface UsersState {
  visible: User[];
  archived: User[];
  hidden: number[]; // Массив ID скрытых пользователей
}

const initialState: UsersState = {
  visible: [],
  archived: [],
  hidden: [],
};

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    setUsers: (state, action: PayloadAction<User[] | undefined>) => {
      state.visible = action.payload || [];
    },
    archiveUser: (state, action: PayloadAction<User>) => {
      state.visible = state.visible.filter((user) => user.id !== action.payload.id);
      state.archived.push(action.payload);
    },
    unarchiveUser: (state, action: PayloadAction<User>) => {
      state.archived = state.archived.filter((user) => user.id !== action.payload.id);
      state.visible.push(action.payload);
    },
    hideUser: (state, action: PayloadAction<User>) => {
      state.visible = state.visible.filter((user) => user.id !== action.payload.id);
    },
  },
});

export const { archiveUser, unarchiveUser, hideUser, setUsers } = usersSlice.actions;
export default usersSlice.reducer;
