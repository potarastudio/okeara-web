/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios"

export async function odooLogin(config: any) {
    const response = await axios.post(config.odooUrl, {
        jsonrpc: "2.0",
        method: "call",
        params: {
            service: "common",
            method: "login",
            args: [config.odooDb, config.odooUsername, config.odooPassword],
        },
        id: Date.now(),
    })
    return response.data.result
}
