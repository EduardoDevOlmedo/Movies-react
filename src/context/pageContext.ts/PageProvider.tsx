import { useReducer } from 'react'
import { PageContext } from './PageContext';
import { PageReducer } from './PageReducer';

export interface PageState {
    page: Number;
}


const initialState:PageState = {
    page: 1
}

interface Props {
    children: JSX.Element | JSX.Element[]
}


const PageProvider: React.FC<Props> = ({children}) => {

    const [state, dispatch] = useReducer(PageReducer, initialState)

    const addOnePage = () => {
        dispatch({
            type: 'Page - Get One'
        })
    }

    const previousPage = () => {
      dispatch({
        type: 'Page - get Previous'
      })
    }

return (
    <PageContext.Provider value={{...state, addOnePage, previousPage}}>
     {
       children
     }
    </PageContext.Provider>
)
}
export default PageProvider




