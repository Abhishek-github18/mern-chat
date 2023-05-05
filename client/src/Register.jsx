import React, { useState } from "react";

const Register = () => {
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");

  function register(){
    
  }

  return (
    <div className="bg-blue-50 h-screen items-center flex">
      <form className="w-64 mx-auto mb-12" onSubmit={register}>
        <input
          type="text"
          value={username}
          onChange={(ev) => setusername(ev.target.value)}
          placeholder="username"
          className="blocks w-full p-2 mb-2 border"
        />
        <input
          type="password"
          value={password}
          onChange={(ev) => setpassword(ev.target.value)}
          placeholder="password"
          className="block w-full p-2 mb-2 border"
        />
        <button className="bg-blue-500 text-white block w-full rounded-sm p-2">
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
