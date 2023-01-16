function Loading({ error, errorMessage }) {

    return (
        <div className="loading col-lg-12 col-md-12">
            {!error && (
                <>
                    <i className="fas fa-cog fa-spin fa-3x"></i>
                    <h3>Loading...</h3>
                </>
            )}

            {error && (
                <>
                    <i className="fas fa-exclamation-triangle fa-3x"></i>
                    <h3>{errorMessage}</h3>
                </>
            )}
        </div>
    );
}

export default Loading;
