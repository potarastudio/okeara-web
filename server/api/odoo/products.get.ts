/* eslint-disable @typescript-eslint/no-explicit-any */
// server/api/odoo/products.get.ts
import axios from "axios";

export default defineEventHandler(async (event) => {
    const config = useRuntimeConfig();

    const query = getQuery(event);
    const companyId = query.company_id ? Number(query.company_id) : null;

    const loginRes = await axios.post(config.odooUrl, {
        jsonrpc: "2.0",
        method: "call",
        params: {
            service: "common",
            method: "login",
            args: [config.odooDb, config.odooUsername, config.odooPassword],
        },
        id: new Date().getTime(),
    });

    const uid = loginRes.data.result;

    const domain: any[] = [["sale_ok", "=", true]];
    if (companyId) {
        domain.push(["sale_ok", "=", true]);
        domain.push(["company_id", "=", companyId]);
    }

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
                "product.template",
                "search_read",
                [domain],
                { fields: ["id", "name", "list_price", "company_id", ], limit: 3 },
            ],
        },
        id: new Date().getTime(),
    });

    return res.data.result;
});
