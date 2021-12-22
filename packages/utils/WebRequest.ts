import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import * as fs from "fs";

namespace InitialEditor {
    export class WebRequest {
        public static async get(
            url: string,
            config?: AxiosRequestConfig<any>
        ): Promise<AxiosResponse<any, any>> {
            return axios.get(url, config);
        }

        public static async post(
            url: string,
            data?: any
        ): Promise<AxiosResponse<any, any>> {
            return axios.post(url, data);
        }

        public static async put(url: string, data?: any): Promise<any> {
            return axios.put(url, data);
        }

        public static async delete(url: string): Promise<any> {
            return axios.delete(url);
        }
    }

    export class WebDownloader {
        public static async download(
            url: string,
            filePath: string
        ): Promise<void> {
            const response = await WebRequest.get(url);
            const data = response.data;
            const buffer = Buffer.from(data, "binary");
            if (!Buffer.isBuffer(buffer)) {
                return Promise.reject(new Error("Invalid data"));
            }
            return await fs.promises.writeFile(filePath, data);
        }
    }
}

export = InitialEditor;
