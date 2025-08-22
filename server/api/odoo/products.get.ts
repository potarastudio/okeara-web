// server/api/odoo/products.get.ts
import axios from "axios";

export default defineEventHandler(async () => {
    const config = useRuntimeConfig();

    const loginRes = await axios.post(config.odooUrl, {
        jsonrpc: "2.0",
        method: "call",
        params: {
            service: "common",
            method: "login",
            args: [config.odooDb, config.odooUsername, config.odooPassword]
        },
        id: new Date().getTime()
    });

    const uid = loginRes.data.result;

    const res = await axios.post(config.odooUrl, {
        jsonrpc: "2.0",
        method: "call",
        params: {
            service: "object",
            method: "execute_kw",
            args: [
                config.odooDb,
                uid,
                config.odooPassword,
                "product.product",
                "search_read",
                [[["sale_ok", "=", true]]],
                { fields: ["id", "name", "list_price"], limit: 10 }
            ]
        },
        id: new Date().getTime()
    });

    return res.data.result;
});
