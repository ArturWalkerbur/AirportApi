import React, { useState } from 'react';
import ErrorMessage from "./ErrorMessage";

const ErrorBoundary = ({ children }) => {
    const [hasError, setHasError] = useState(false);
    const [error, setError] = useState(null);

    const handleOnError = (error) => {
        setHasError(true);
        setError(error);
    };

    if (hasError) {
        return <ErrorMessage error={error} />;
    }

    return (
        <div onError={handleOnError}>
            {children}
        </div>
    );
};

export default ErrorBoundary;