import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import {logOutTeam} from './teamSlice'

export const fetchMe = createAsyncThunk(
    'user/fetchMe',
    async (API, {dispatch}) => {
        return (
            await fetch(API, {
                credentials: 'include'
            })
            .then(resp => {
                if (resp.ok) {
                    resp.json()
                    .then(user => dispatch(getUser(user)))
                }
            })
        )
    }
)

export const fetchLogOut = createAsyncThunk(
    'user/fetchLogOut',
    async (API, {dispatch}) => {
        return (
            await fetch(API, {
                method: 'DELETE'
            })
            .then(resp => {
                if (resp.ok) {
                    dispatch(logOutUser());
                    dispatch(logOutTeam());
                }
            })
        )
    }
)

// export const loginUser = createAsyncThunk(
//     'user/loginUser',
//     async (loginForm, {dispatch}) => {
//         return (
//             await fetch('/login', {
//                 method: "POST",
//                 headers: {
//                     "Content-Type": "application/json",
//                 },
//                 body: JSON.stringify(loginForm)
//                 })
//                 .then(resp => {
//                     if (resp.ok) {
//                         resp.json()
//                         .then(user => dispatch(getUser(user)))
//                     }
//                 })
//         )
//     }
// )

const initialState = null

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        getUser(state, action) {
            return {...action.payload}
        },
        logOutUser(state, action) {
            return null
        }
    },
})

export const { getUser, logOutUser } = userSlice.actions
export default userSlice.reducer