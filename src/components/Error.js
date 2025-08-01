import { useRouteError } from "react-router-dom";

const Error = () => {
    const err = useRouteError();
    console.log(err);
    return (
        <div className="Error-container">
            <h1>Oops! Something went wrong.</h1>
            <h2>{err.status} : {err.statusText}</h2>
        </div>
    )
}

export default Error;