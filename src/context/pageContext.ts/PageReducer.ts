import { PageState } from "./PageProvider";

type PageType = 
|{ type: "Page - Get One"} 
|{ type: "Page - get Previous"}

export const PageReducer = (state: PageState, action: PageType):PageState => {
    
    switch (action.type) {
        case "Page - Get One" :
            return {
                ...state, 
                page: state.page + 1
            }
        case "Page - get Previous":
            return {
                ...state,
                page: state.page - 1
            }
        default:
            return state;
    }


}