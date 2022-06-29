import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { AppThunk } from 'src/store/index'
import { RootState } from 'src/store/rootReducer'

interface InitialState {
  users: User[]
  hasError: boolean
  isLoading: boolean
}

interface User {
  id: number
  name: string
}

interface UserPayload {
  users: User[]
}

interface LoadingPayload {
  loading: boolean
}

interface ErrorPayload {
  error: boolean
}

const initialState: InitialState = {
  users: [],
  hasError: false,
  isLoading: false,
}

const { actions, reducer } = createSlice({
  name: 'users',
  initialState,
  reducers: {
    updateIsLoading: (state, action: PayloadAction<LoadingPayload>) => {
      const { loading } = action.payload

      state.isLoading = loading
    },
    updateHasError: (state, action: PayloadAction<ErrorPayload>) => {
      const { error } = action.payload

      state.hasError = error
    },
    updateUsers: (state, action: PayloadAction<UserPayload>) => {
      const { users } = action.payload

      state.users = users
    },
  },
})

// Actions
const { updateUsers, updateHasError, updateIsLoading } = actions

// Action Creators
export const getUsers = (): AppThunk => dispatch => {
  dispatch(updateIsLoading({ loading: true }))

  try {
    dispatch(
      updateUsers({
        users: [
          { id: 1, name: 'Amy' },
          { id: 2, name: 'Doug' },
          { id: 3, name: 'Jack' },
        ],
      })
    )
    dispatch(updateHasError({ error: false }))
  } catch (e) {
    dispatch(updateHasError({ error: true }))
  } finally {
    dispatch(updateIsLoading({ loading: false }))
  }
}

// Selectors
// @reduxjs/toolkit also reexports createSelector from reselect if required
export const usersDataSelector = (state: RootState): InitialState => state.users

export default reducer
