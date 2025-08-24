// server/api/odoo/auth.get.ts
import { defineEventHandler } from "h3"
import { odooLogin } from "~/utils/odooClient"

export default defineEventHandler(async () => {
  const config = useRuntimeConfig()
  const uid = await odooLogin(config)

  return { uid }
})
