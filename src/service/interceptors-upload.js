import axios from "axios";
import { Base64 } from "js-base64";
import { getCookies, deleteCookie } from "cookies-next";
import { warningAlert, errorAlert } from "../utils/alert";

const noToken = () => {
  warningAlert("กรุณาเข้าสู่ระบบอีกครั้ง");
  deleteCookie("token");

  setTimeout(() => {
    window.location.href = "/login";
  }, 1000);
};

const apiFetch = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASEURL,
});

apiFetch.interceptors.request.use(
  (request) => {
    const { token } = getCookies("token") || "";
    const { branch } = getCookies("branch") || "";

    request.headers["x-access-token"] = token;
    request.headers["x-select-branch"] = branch;
    request.headers["x-platform"] = "WEB";
    request.headers["Accept-Language"] = "TH";
    request.headers["Content-Type"] = "multipart/form-data";
    request.headers["x-access-login-application"] = "WEB";
    request.headers.Authorization = `Basic ${Base64.encode(
      process.env.NEXT_PUBLIC_BASICUSER +
        ":" +
        process.env.NEXT_PUBLIC_BASICPASS
    )}`;

    return request;
  },
  (error) => {
    return Promise.reject(error);
  }
);

apiFetch.interceptors.response.use(
  (response) => {
    if (
      response.data.res_code == "9003" ||
      response.data.res_code == "2300" ||
      response.data.res_code == "9004"
    ) {
      return noToken();
    } else {
      return response;
    }
  },
  (error) => {
    return errorAlert(error.message);
    // Handle ERROR
    // if (error.response.status === 404) {
    //   // do something
    //   console.log('NOT FOUND');
    // }
    // return Promise.reject(error);
  }
);

export default apiFetch;
