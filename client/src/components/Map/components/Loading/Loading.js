function Loading({error, errorMessage}) {
    return (
        <div className="loading">

            {!error && <>
                <i class="fas fa-cog fa-spin fa-3x"></i>
                <h3>Connecting to API...</h3>
            </>}

            {error && <>
                <i class="fas fa-exclamation-triangle fa-3x"></i>
                <h3>{errorMessage}</h3>
            </>}

        </div>
    )
};

export default Loading;