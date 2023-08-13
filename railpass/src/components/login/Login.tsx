import React from "react";
import { handleSubmit } from "../../services/formServices";
const Login = () => {
  return (
    <div>
      <div className="formContainer" onSubmit={handleSubmit}>
        <form>
          <input type="text" />
          <input type="password" />
          <button type="submit"> Login </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
