export const Explanation = () => {
    return (
        <>
            <div className="explanation-container">
                <h1 className="site-title">Fake posts</h1>
                <div className="explanation-info">
                    <p className="site-subtitle">What Fake Posts is?</p>
                    <p className="site-description">
                        Fake Posts is an app where you can create, like its name says,
                        Fake Posts. <br />
                        This was developed just for showing you the useState, useEffect and useContext
                        React hooks common usage.
                    </p>
                    <sub className="site-aclaration">Once you refresh this page, all added posts wil be deleted.</sub>
                </div>
            </div>
        </>
    )
}
