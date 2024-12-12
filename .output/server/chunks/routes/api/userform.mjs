import { d as defineEventHandler, r as readBody, u as useRuntimeConfig } from '../../runtime.mjs';
import 'node:http';
import 'node:https';
import 'node:fs';
import 'node:path';
import 'node:url';
import '@iconify/utils';
import 'consola/core';
import 'ipx';

const userform = defineEventHandler(async (event) => {
  const method = event.req.method;
  if (method != "POST")
    return { message: "Error in request" };
  const payload = await readBody(event);
  const response = await fetch("https://api.telegram.org/bot" + useRuntimeConfig().TELEGRAM_TOKEN + "/sendMessage", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      chat_id: useRuntimeConfig().TELEGRAM_CHAT_ID,
      text: `
\u041D\u0430\u0434\u0456\u0439\u0448\u043B\u0430 \u043D\u043E\u0432\u0430 \u0437\u0430\u044F\u0432\u043A\u0430:
--------------------
\u0406\u043C'\u044F: ${payload.username}
\u0422\u0435\u043B\u0435\u0444\u043E\u043D: ${payload.phone}
\u0417\u0430\u043C\u043E\u0432\u043B\u0435\u043D\u043D\u044F: ${payload.description}`
    })
  });
  return response;
});

export { userform as default };
//# sourceMappingURL=userform.mjs.map
