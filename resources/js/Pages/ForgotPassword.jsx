import React from "react";
import "../../css/style.css";
import "../../css/main.min.css";
import "../../css/weather-icon.css";
import "../../css/weather-icons.min.css";
import "../../css/color.css";
import "../../css/responsive.css";
import '../../css/login.css';

const ForgotPassword = () => {
    return (
        <div className="www-layout">
            <section>
                <div className="gap no-gap signin whitish medium-opacity">
                    <div
                        className="bg-image"
                        style={{
                            backgroundImage:
                                "url(images/resources/theme-bg.jpg)",
                        }}
                    ></div>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8">
                                <div className="big-ad">
                                    <figure>
                                        <img
                                            src="images/logo2.png"
                                            alt="Logo"
                                        />
                                    </figure>
                                    <h1>You want to retrieve your password</h1>
                                    <p>Please create and remember!.</p>

                                    <div className="barcode">
                                        <figure>
                                            <img
                                                src="images/resources/Barcode.jpg"
                                                alt="Barcode"
                                            />
                                        </figure>
                                        <div className="app-download">
                                            <span>
                                                Download Mobile App and Scan QR
                                                Code to login
                                            </span>
                                            <ul className="colla-apps">
                                                <li>
                                                    <a
                                                        title=""
                                                        href="https://play.google.com/store?hl=en"
                                                    >
                                                        <img
                                                            src="images/android.png"
                                                            alt="Android"
                                                        />
                                                        android
                                                    </a>
                                                </li>
                                                <li>
                                                    <a
                                                        title=""
                                                        href="https://www.apple.com/lae/ios/app-store/"
                                                    >
                                                        <img
                                                            src="images/apple.png"
                                                            alt="iPhone"
                                                        />
                                                        iPhone
                                                    </a>
                                                </li>
                                                <li>
                                                    <a
                                                        title=""
                                                        href="https://www.microsoft.com/store/apps"
                                                    >
                                                        <img
                                                            src="images/windows.png"
                                                            alt="Windows"
                                                        />
                                                        Windows
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="we-login-register">
                                    <div className="form-title">
                                        <i className=""></i>Reset your password
                                        <span>
                                            Enter your user account's verified
                                            email address and we will send you a
                                            password reset link.
                                        </span>
                                    </div>
                                    <form className="we-form" method="post">
                                        <input
                                            type="text"
                                            placeholder="Email"
                                        />
                                        <button type="submit" data-ripple="">
                                            Verify
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ForgotPassword;
