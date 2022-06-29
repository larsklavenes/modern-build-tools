import { combineReducers } from '@reduxjs/toolkit'

import users from 'src/store/usersSlice'

const rootReducer = combineReducers({ users })
export type RootState = ReturnType<typeof rootReducer>

export default rootReducer
