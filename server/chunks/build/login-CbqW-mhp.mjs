import { _ as _sfc_main$1, a as _sfc_main$2 } from './Input-BHo_TP6t.mjs';
import { _ as _sfc_main$3 } from './index-BB7KKil7.mjs';
import { useSSRContext, defineComponent, ref, mergeProps, withCtx, createTextVNode } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
import { useRouter } from 'vue-router';
import { _ as _export_sfc, d as useHead } from './server.mjs';
import 'radix-vue';
import '@vueuse/core';
import 'clsx';
import 'tailwind-merge';
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
import 'axios';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "login",
  __ssrInlineRender: true,
  setup(__props) {
    useRouter();
    useHead({
      title: "\u0410\u0432\u0442\u043E\u0440\u0438\u0437\u0430\u0446\u0438\u044F"
    });
    const username = ref("");
    const password = ref("");
    const loading = ref(false);
    const error = ref("");
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UiLabel = _sfc_main$1;
      const _component_UiInput = _sfc_main$2;
      const _component_UiButton = _sfc_main$3;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "p-6" }, _attrs))} data-v-b46a9d84><h1 class="text-2xl font-bold mb-4 text-center" data-v-b46a9d84>\u0410\u0432\u0442\u043E\u0440\u0438\u0437\u0430\u0446\u0438\u044F</h1>`);
      if (loading.value) {
        _push(`<div class="text-center" data-v-b46a9d84><p data-v-b46a9d84>\u0417\u0430\u0433\u0440\u0443\u0437\u043A\u0430...</p></div>`);
      } else {
        _push(`<div data-v-b46a9d84><form class="flex flex-col gap-4" data-v-b46a9d84><div data-v-b46a9d84>`);
        _push(ssrRenderComponent(_component_UiLabel, { for: "username" }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`\u0418\u043C\u044F \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044F`);
            } else {
              return [
                createTextVNode("\u0418\u043C\u044F \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044F")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(ssrRenderComponent(_component_UiInput, {
          id: "username",
          modelValue: username.value,
          "onUpdate:modelValue": ($event) => username.value = $event,
          placeholder: "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0438\u043C\u044F \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044F"
        }, null, _parent));
        _push(`</div><div data-v-b46a9d84>`);
        _push(ssrRenderComponent(_component_UiLabel, { for: "password" }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`\u041F\u0430\u0440\u043E\u043B\u044C`);
            } else {
              return [
                createTextVNode("\u041F\u0430\u0440\u043E\u043B\u044C")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(ssrRenderComponent(_component_UiInput, {
          id: "password",
          modelValue: password.value,
          "onUpdate:modelValue": ($event) => password.value = $event,
          type: "password",
          placeholder: "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043F\u0430\u0440\u043E\u043B\u044C"
        }, null, _parent));
        _push(`</div>`);
        if (error.value) {
          _push(`<div class="text-red-500 text-center" data-v-b46a9d84><p data-v-b46a9d84>${ssrInterpolate(error.value)}</p></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(ssrRenderComponent(_component_UiButton, {
          type: "submit",
          class: "w-full"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`\u0412\u043E\u0439\u0442\u0438`);
            } else {
              return [
                createTextVNode("\u0412\u043E\u0439\u0442\u0438")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</form></div>`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/login.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined;
};
const login = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-b46a9d84"]]);

export { login as default };
//# sourceMappingURL=login-CbqW-mhp.mjs.map
