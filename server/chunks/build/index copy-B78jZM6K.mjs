import { _ as _sfc_main$1 } from './index-BB7KKil7.mjs';
import { mergeProps, withCtx, createTextVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
import { d as useHead } from './server.mjs';
import 'clsx';
import 'tailwind-merge';
import 'radix-vue';
import 'class-variance-authority';
import '../nitro/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:fs';
import 'node:path';
import 'node:url';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'devalue';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'vue-router';
import 'axios';

const _sfc_main = {
  __name: "index copy",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "CRM"
    });
    const links = [
      { name: "\u041F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u0438", path: "/users" },
      { name: "\u041A\u043E\u043D\u0442\u0440\u0430\u0433\u0435\u043D\u0442\u044B", path: "/contractors" },
      { name: "\u0422\u0440\u0430\u043D\u0441\u043F\u043E\u0440\u0442\u043D\u044B\u0435 \u0441\u0440\u0435\u0434\u0441\u0442\u0432\u0430", path: "/vehicles" },
      { name: "\u041F\u0440\u0435\u0434\u043E\u043F\u043B\u0430\u0442\u044B", path: "/prepayments" },
      { name: "\u0417\u0430\u044F\u0432\u043A\u0438", path: "/orders" }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UiButton = _sfc_main$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-col items-center justify-center h-screen bg-gray-100" }, _attrs))}><h1 class="text-2xl font-bold mb-6">\u041C\u0415\u041D\u042E</h1><div class="flex flex-col gap-4"><!--[-->`);
      ssrRenderList(links, (link) => {
        _push(ssrRenderComponent(_component_UiButton, {
          key: link.name,
          as: "a",
          href: link.path,
          class: "w-full"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(link.name)}`);
            } else {
              return [
                createTextVNode(toDisplayString(link.name), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]--></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index copy.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined;
};

export { _sfc_main as default };
//# sourceMappingURL=index copy-B78jZM6K.mjs.map
