import {AuthState} from "./AuthProvider"

type AuthType = 
|{ type: "Auth - Login", payload: string} 
|{ type: "Auth - Load user token from Local Storage", payload: string} 
|{ type: "Auth - Error", payload: string} 
|{ type: "Auth - Logout"} 

export const AuthReducer = (state: AuthState, action: AuthType):AuthState => {
    
    switch (action.type) {
        case "Auth - Login" :
            return {
                token: action.payload,
            }
        case 'Auth - Logout':
            return {
                ...state,
                token: ''
            }
        case 'Auth - Error':
            return {
                ...state,
                error: action.payload,
                token: ''
            }
        default:
            return state;
    }


}
