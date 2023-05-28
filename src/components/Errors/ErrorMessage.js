const ErrorMessage = ({ error }) => {

    let message = 'An error occurred. Please try again later.';

    return <div>{message}<br />Error: {error}</div>;
};

export default ErrorMessage;