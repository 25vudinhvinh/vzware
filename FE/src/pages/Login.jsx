// pages/Login.js
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import logo from "../assets/logo.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

function Login() {
    const [credentials, setCredentials] = useState({
        username: "",
        password: "",
    });
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            // Thay bằng API call thực tế của bạn
            // const response = await yourLoginAPI(credentials);

            // Giả lập đăng nhập thành công
            setTimeout(() => {
                localStorage.setItem("isAuthenticated", "true");
                localStorage.setItem(
                    "user",
                    JSON.stringify({
                        username: credentials.username,
                        name: "User Name",
                    })
                );

                navigate("/"); // Chuyển hướng về trang chính
                setLoading(false);
            }, 1000);
        } catch (error) {
            console.error("Login error:", error);
            setLoading(false);
        }
    };

    return (
        <div className="flex h-screen">
            <div className="flex-1 w-full h-full">
                <div className="p-30 flex flex-col gap-4">
                    <div className="flex gap-3 items-center">
                        <img src={logo} className="w-[35px] rounded" alt="" />
                        <p className="text-2xl font-semibold">Vzware</p>
                    </div>
                    <div className="flex gap-1 flex-col">
                        <p className="font-semibold text-xl">
                            Welcome Back Creative!
                        </p>
                        <p className="text-sm text-gray-600">
                            We Are Happy To See You Again
                        </p>
                    </div>

                    <div className="flex flex-col gap-2">
                        <div className="flex items-center bg-transparent rounded-full border border-gray-200 ">
                            <input
                                className="flex-1 p-2 rounded-full  focus:bg-transparent focus:outline-0 fill-transparent"
                                type="text"
                                name="username"
                                id="username"
                                placeholder="Tên đăng nhập"
                            />
                            <FontAwesomeIcon icon={faUser} className="mr-3" />
                        </div>
                        <div className="flex items-center border border-gray-200 rounded-full">
                            <input
                                className="p-2 rounded-2xl bg-transparent w-full focus:bg-transparent focus:outline-0"
                                type="password"
                                name="password"
                                id="password"
                                placeholder="Mật khẩu"
                            />
                        </div>
                    </div>

                    <div className="flex gap-1 items-center">
                        <input type="radio" className=" h-5 w-5" />
                        <p className="text-gray-600 text-sm">Nhớ tôi</p>
                    </div>

                    <div className="bg-blue-500 p-3 select-none rounded-full flex justify-center items-center cursor-pointer">
                        <button className="text-white">Đăng nhập</button>
                    </div>
                </div>
            </div>
            <div className="flex-1 ">
                <img className="w-full h-full" src={logo} alt="" />
            </div>
        </div>
    );
}

export default Login;
