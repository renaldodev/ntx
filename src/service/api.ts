/* eslint-disable @typescript-eslint/naming-convention */
import axios, { AxiosError } from "axios";
import { QueryClient } from "@tanstack/react-query";
import { initQueryClient } from "@ts-rest/react-query";
import { isEmptyObject } from "../util";
import { contract } from "./contract/contract";
import {
  operatorContract,
  operadorContract,
  blocoContract,
  pocoContract,
  plataformaContract,
} from "./contract";

export const apiUrl = "http://anpgwebapi.dowhile.ao/api";

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: false,
    },
  },
});

export const axiosInstance = axios.create({
  baseURL: apiUrl,
  headers: {
    "Content-type": "application/json",
    Accept: "application/json",
  },
});

export function setPushTokenHeader(token?: string) {
  if (!token) {
    delete axiosInstance.defaults.headers.common["Push-Token"];
    return;
  }

  axiosInstance.defaults.headers.common["Push-Token"] = token;
}

export function setAxiosAuthorizationHeader(token?: string) {
  if (!token) {
    delete axiosInstance.defaults.headers.common.Authorization;
    return;
  }

  axiosInstance.defaults.headers.common.Authorization = `Bearer ${token}`;
}

const mobileContract = contract.router({
  operator: operatorContract,
  operador: operadorContract,
  plataforma: plataformaContract,
  poco: pocoContract,
  bloco: blocoContract,
});

export const service = initQueryClient(mobileContract, {
  baseUrl: apiUrl,
  baseHeaders: {},
  api: async ({ path, method, body, headers }) => {
    try {
      const response = await axiosInstance.request({
        method,
        url: path,
        data: body,
        headers: isEmptyObject(headers)
          ? {
              "Content-type": "multipart/form-data",
              Accept: "application/json",
            }
          : { "Content-type": "application/json", Accept: "application/json" },
      });

      return {
        status: response.status,
        body: response.data,
        headers: response.headers as any,
      };
    } catch (error) {
      if (error instanceof AxiosError) {
        return {
          status: error.response?.status || 500,
          body: error.response?.data,
          headers: error.response?.headers as any,
        };
      }

      return { status: 500, body: error, headers };
    }
  },
});
