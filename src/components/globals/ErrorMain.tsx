import { faExclamationCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useLocation, useNavigate } from "react-router";

interface Props {
    error: string;
}

const ErrorMain: React.FC<Props> = ({error}) => {
  
  
    return (
        <div className="loading-wrapper">
            <div className='error-wrapper' style={{
                background: 'none',
                color: 'red'
            }}>
                <FontAwesomeIcon icon={faExclamationCircle}/>
                {
                    <p>{error}</p>
                }
            </div>
                <button className="errorButton" onClick={() => location.reload()}>Try again</button>
        </div>
 )
}


export default ErrorMain