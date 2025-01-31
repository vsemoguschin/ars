import { f as defineNuxtRouteMiddleware, b as useNuxtApp } from './server.mjs';
import { p as getRequestHeaders } from '../nitro/nitro.mjs';
import 'vue';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'devalue';
import 'vue/server-renderer';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'vue-router';
import 'axios';
import 'node:http';
import 'node:https';
import 'node:fs';
import 'node:path';
import 'node:url';

function useRequestEvent(nuxtApp = useNuxtApp()) {
  var _a;
  return (_a = nuxtApp.ssrContext) == null ? undefined : _a.event;
}
function useRequestHeaders(include) {
  const event = useRequestEvent();
  const _headers = event ? getRequestHeaders(event) : {};
  if (!include || !event) {
    return _headers;
  }
  const headers = /* @__PURE__ */ Object.create(null);
  for (const _key of include) {
    const key = _key.toLowerCase();
    const header = _headers[key];
    if (header) {
      headers[key] = header;
    }
  }
  return headers;
}
const logReferrer = defineNuxtRouteMiddleware((to, from) => {
  const referer = useRequestHeaders(["referer"]).referer || "csacdc";
  console.log("\u041F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044C \u043F\u0435\u0440\u0435\u0448\u0435\u043B \u0441:", referer);
});

export { logReferrer as default };
//# sourceMappingURL=logReferrer-B7VPt8Yb.mjs.map
