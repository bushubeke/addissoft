import { createSlice } from '@reduxjs/toolkit'

export const userReducer = createSlice({
  name: 'useradminflow',
  initialState: {
    loggedin: false,
    current_user:'',
    user_name:'',
    user_id:'',
    email:'',
    token:'',
    ref_token:'',

  },
  reducers: {
    login: (state) => {
      
      state.loggedin=true;
      console.log("this path is working fine")
      
    },
    logout: (state) => {
      
      state.loggedin=false;
      console.log("this path is working fine")
    },
  
  },
})

// Action creators are generated for each case reducer function
export const { login,logout } = userReducer.actions;
export const selectUser = (state) => state.reducer.loggedin;
export default userReducer.reducer