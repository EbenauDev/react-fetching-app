import axios from "axios";


export default class HttpClient {
    constructor() {
        this.instance = axios.create();
    }

    get(url, customHeaders = {}) {
        return this.instance.get(url, {
            headers: customHeaders,
        });
    }

    post(url, data, customHeaders = {}) {
        return this.instance.post(url, data, customHeaders);
    }

    put(url, data, customHeaders = {}) {
        return this.instance.put(url, data, customHeaders);
    }

    delete(url, customHeaders = {}) {
        return this.instance.delete(url, null, customHeaders);
    }
}