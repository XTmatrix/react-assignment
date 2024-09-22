import { useState } from "react";

function LoginLogout() {
  const [isLogin, setIsLogin] = useState(true);
  return (
    <div>
      <button
        onClick={() =>
          isLogin === true ? setIsLogin(false) : setIsLogin(true)
        }
      >
        {isLogin === true ? "Login" : "Logout"}
      </button>
    </div>
  );
}

export default LoginLogout;
