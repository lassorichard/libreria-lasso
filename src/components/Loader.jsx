
export const Loader = () => {
    return (
        <>
            <div className="loader">
                <div className="player">
                    <div id="button"></div>
                    <div className="eye"></div>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="150"
                        height="150"
                        className="disc"
                        viewBox="0 0 150 150"
                    >
                        <g fill="none" fillRule="evenodd" stroke="none" strokeWidth="1">
                            <g transform="matrix(1 0 0 -1 0 150)">
                                <path
                                    fill="#312F2D"
                                    d="M75 150c41.421 0 75-33.579 75-75S116.421 0 75 0 0 33.579 0 75s33.579 75 75 75z"
                                ></path>
                                <path
                                    stroke="#5A5A5A"
                                    strokeLinecap="round"
                                    strokeWidth="3"
                                    d="M27.742 75c0 26.018 23.998 47.184 47.258 47.184"
                                ></path>
                                <path
                                    stroke="#5A5A5A"
                                    strokeLinecap="round"
                                    strokeWidth="3"
                                    d="M111.427 75c0-20.32-18.498-36.852-36.427-36.852"
                                ></path>
                                <path
                                    stroke="#5A5A5A"
                                    strokeLinecap="round"
                                    strokeWidth="3"
                                    d="M38.09 75c0 20.32 18.744 36.852 36.91 36.852"
                                ></path>
                                <path
                                    stroke="#5A5A5A"
                                    strokeLinecap="round"
                                    strokeWidth="3"
                                    d="M122.258 75c0-26.018-23.998-47.184-47.258-47.184"
                                ></path>
                            </g>
                        </g>
                    </svg>
                    <div className="stylus-base"></div>
                    <div className="stylus"></div>
                </div>
                <p className="player__text">Loading...</p>
            </div>
        </>
    );
};
