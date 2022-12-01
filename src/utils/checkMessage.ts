

export function checkMessage(error: boolean, loading: boolean){

    // to make cleaner and more scalable code, i wrote this, but it is not 100% necessary.
     let val;
     if(error) val = "An error has ocurred"
     else if(loading && !error) val = "Loading..."
     else if(!loading && !error) val = "Loaded"
  
     return val
}
  