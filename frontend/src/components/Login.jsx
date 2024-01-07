import React from "react";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import { useNavigate } from "react-router-dom";

import shareVideo from "../assets/share.mp4";
import logo from "../assets/logowhite.png";
import { client } from "../client";

function Login() {
	const navigate = useNavigate();

	const responseGoogle = (response) => {
		const token = response.credential;
		const decodedToken = jwtDecode(token);
		const { name, sub, picture } = decodedToken;
		const doc = {
			_id: sub,
			_type: "user",
			userName: name,
			image: picture,
		};

		client.createIfNotExists(doc).then(() => {
			navigate("/", { replace: true });
		});
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
