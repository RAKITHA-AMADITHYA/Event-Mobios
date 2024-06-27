// // import { logoutAction } from "../../reducers/auth.reducer";
// import store from "../store";
// import axios, { AxiosResponse, AxiosError, HttpStatusCode } from "axios";

// const { token } = store.getState().auth;

// const http = axios.create({
//   baseURL: import.meta.env.VITE_BASE_URL,
//   headers: {
//     "Content-Type": "application/json",
//     "Access-Control-Allow-Origin": "*",
//     "Access-Control-Allow-Methods": "GET, PUT, POST, DELETE, HEAD, OPTIONS",
//     Authorization: `Bearer ${token}`,
//   },
// });

// interface ApiResponse<T> {
//   data: T;
//   status: number;
// }

// function handleResponse<T>(response: AxiosResponse<T>): ApiResponse<T> {
//   return {
//     data: response.data,
//     status: response.status,
//   };
// }

// function handleError(error: AxiosError): never {
//   if (error.response?.status === HttpStatusCode.Unauthorized) {
//     // store.dispatch(logoutAction());
//   }
//   throw error;
// }

// interface ApiRequest {
//   path: string;
//   requestBody?: any;
//   header?: Record<string, string>;
// }

// export const apiPost = async <T>({
//   path,
//   requestBody,
//   header = {},
// }: ApiRequest): Promise<ApiResponse<T>> => {
//   const { token } = store.getState().auth;

//   return await http
//     .post<T>(path, requestBody, {
//       headers: {
//         Authorization: `Bearer ${token}`,
//         ...header,
//       },
//     })
//     .then(handleResponse)
//     .catch(handleError);
// };

// export const apiGet = async <T>({
//   path,
//   header = {},
// }: ApiRequest): Promise<ApiResponse<T>> => {
//   const { token } = store.getState().auth;

//   return await http
//     .get<T>(path, {
//       headers: {
//         Authorization: `Bearer ${token}`,
//         ...header,
//       },
//     })
//     .then(handleResponse)
//     .catch(handleError);
// };

// export const apiPatch = async <T>({
//   path,
//   requestBody,
//   header = {},
// }: ApiRequest): Promise<ApiResponse<T>> => {
//   const { token } = store.getState().auth;

//   return await http
//     .patch<T>(path, requestBody, {
//       headers: {
//         Authorization: `Bearer ${token}`,
//         ...header,
//       },
//     })
//     .then(handleResponse)
//     .catch(handleError);
// };

// export const apiDelete = async <T>({
//   path,
//   header = {},
// }: ApiRequest): Promise<ApiResponse<T>> => {
//   const { token } = store.getState().auth;

//   return await http
//     .delete<T>(path, {
//       headers: {
//         Authorization: `Bearer ${token}`,
//         ...header,
//       },
//     })
//     .then(handleResponse)
//     .catch(handleError);
// };
