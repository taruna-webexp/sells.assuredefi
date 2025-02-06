import apiCient from "./apiCient";

const AuthServices = {
  loginApi: () => {
    return apiCient.post("");
  },
};

export default AuthServices;
