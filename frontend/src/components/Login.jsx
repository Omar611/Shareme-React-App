import React, { useState, useEffect } from "react";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { GoogleLogin } from "@react-oauth/google";
import { useGoogleLogin } from "@react-oauth/google";
import axios from "axios";

// import { useNavigate } from "react-router-dom";

// import GoogleLogin from "react-google-login";
// import { FcGoogle } from "react-icons/fc";
import shareVideo from "../assets/share.mp4";
import logo from "../assets/logowhite.png";

function Login() {
	const responseGoogle = (response) => {
		// localStorage.setItem("user", JSON.stringify(response.profileObj));
		// const { name, googleId, imageUrl } = response.profileObj;
		// const doc = {
		// 	_id: googleId,
		// 	_type: "user",
		// 	userName: name,
		// 	image: imageUrl,
		// };
		// console.log(doc);
		console.log(response);
	};
	return (
		<div className="flex justify-start items-center flex-col h-screen">
			<div className="relative w-full h-full">
				<video className="absolute w-full h-full object-cover" src={shareVideo} autoPlay loop muted type="video/mp4"></video>
				<div className="absolute flex flex-col justify-center items-center w-full h-full bg-blackOverlay">
					<div className="flex justify-center items-center flex-col">
						<img src={logo} width="130px" className="mb-10" />
					</div>
					<div className="shadow-2xl">
						{/* <GoogleLogin
							clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
							render={(renderProps) => (
								<button type="button" className="bg-mainColor flex justify-center items-center p-3 cursor-pointer outline-none rounded-lg" onClick={renderProps.onClick} disabled={renderProps.disabled}>
									<FcGoogle className="mr-4" />
									Login with Google
								</button>
							)}
							onSuccess={responseGoogle}
							onFailure={responseGoogle}
							cookiePolicy={"single_host_origin"}
						/> */}
						<GoogleOAuthProvider clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}>
							<GoogleLogin onSuccess={responseGoogle} onError={responseGoogle} />
						</GoogleOAuthProvider>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Login;
