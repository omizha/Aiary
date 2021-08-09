import axios from "axios";
import axiosRetry from "axios-retry";
import env from "react-native-config";

/**
 * @description statusCode 200을 제외한 다른 statusCode들의 statusText를 제대로 반환하기 위해 interceptor 설정을 진행한 axios instnace를 반환하는 함수입니다
 * @param {Boolean} retry axios retry를 진행할지 여부를 전달합니다. 기본값은 false입니다.
 */
export default function axiosInstance(retry = false) {
    const instance = axios.create({
        timeout: 5000,
    });

    if (retry) {
        axiosRetry(instance, {
            retries: 3,
            retryDelay: (retryCount) => retryCount * 1000,
            retryCondition: () => true,
        });
    }

    instance.interceptors.response.use(
        function (response) {
            return response;
        },

        function (error) {
            const statusCode = error.response.data.statusCode;
            const message = error.response.data.message;
            const code = error.code;
            return Promise.reject({ statusCode, message, code });
        }
    );

    return instance;
}
