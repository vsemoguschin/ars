import { _ as _sfc_main$1 } from './index-BB7KKil7.mjs';
import { _ as _sfc_main$1$1, a as _sfc_main$2 } from './Input-BHo_TP6t.mjs';
import { _ as _sfc_main$6, a as _sfc_main$1$2, b as _sfc_main$3, c as _sfc_main$5, d as _sfc_main$4$1 } from './SelectValue-D5HYJzCo.mjs';
import { _ as _sfc_main$4 } from './SelectGroup-uOS6RgQJ.mjs';
import { defineComponent, ref, mergeProps, unref, withCtx, createTextVNode, createVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
import { b as useNuxtApp, u as useRouter, e as useRoute, d as useHead } from './server.mjs';
import 'clsx';
import 'tailwind-merge';
import 'radix-vue';
import 'class-variance-authority';
import '@vueuse/core';
import '@radix-icons/vue';
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

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "[id]",
  __ssrInlineRender: true,
  setup(__props) {
    const { $useApi } = useNuxtApp();
    const router = useRouter();
    const route = useRoute();
    useHead({
      title: "\u041F\u0440\u043E\u0444\u0438\u043B\u044C"
    });
    const userId = route.params.id;
    const userForm = ref({
      username: "",
      user_full_name: "",
      role: "user",
      telegram_id: ""
    });
    const loading = ref(true);
    const error = ref(null);
    const successMessage = ref("");
    const saveUser = async () => {
      try {
        const { data } = await $useApi.patch(`/users/${userId}/`, userForm.value);
        console.log(data);
        successMessage.value = "\u041F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044C \u0443\u0441\u043F\u0435\u0448\u043D\u043E \u043E\u0431\u043D\u043E\u0432\u043B\u0451\u043D!";
        setTimeout(() => successMessage.value = "", 3e3);
      } catch (err) {
        error.value = err.message;
      }
    };
    const deleteUser = async () => {
      try {
        const response = await $useApi.delete(`/users/${userId}/`);
        console.log("\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044C \u0443\u0434\u0430\u043B\u0435\u043D!");
      } catch (err) {
        console.error("\u041E\u0448\u0438\u0431\u043A\u0430 \u0443\u0434\u0430\u043B\u0435\u043D\u0438\u044F \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044F:", err);
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UiButton = _sfc_main$1;
      const _component_UiLabel = _sfc_main$1$1;
      const _component_UiInput = _sfc_main$2;
      const _component_UiSelect = _sfc_main$6;
      const _component_UiSelectTrigger = _sfc_main$1$2;
      const _component_UiSelectValue = _sfc_main$3;
      const _component_UiSelectContent = _sfc_main$5;
      const _component_UiSelectGroup = _sfc_main$4;
      const _component_UiSelectItem = _sfc_main$4$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "p-6" }, _attrs))}><div class="flex gap-3">`);
      _push(ssrRenderComponent(_component_UiButton, {
        onClick: ($event) => unref(router).push("/users"),
        class: "h-8 w-8"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` &lt; `);
          } else {
            return [
              createTextVNode(" < ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<h1 class="text-2xl font-bold mb-4">\u041F\u0440\u043E\u0444\u0438\u043B\u044C</h1></div>`);
      if (unref(loading)) {
        _push(`<div class="text-center"><p>\u0417\u0430\u0433\u0440\u0443\u0437\u043A\u0430...</p></div>`);
      } else if (unref(error)) {
        _push(`<div class="text-red-500 text-center"><p>\u041E\u0448\u0438\u0431\u043A\u0430 \u0437\u0430\u0433\u0440\u0443\u0437\u043A\u0438: ${ssrInterpolate(unref(error))}</p></div>`);
      } else {
        _push(`<div class="flex flex-col gap-3"><div>`);
        _push(ssrRenderComponent(_component_UiLabel, { for: "username" }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`\u0418\u043C\u044F`);
            } else {
              return [
                createTextVNode("\u0418\u043C\u044F")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(ssrRenderComponent(_component_UiInput, {
          class: "mt-2",
          id: "username",
          modelValue: unref(userForm).username,
          "onUpdate:modelValue": ($event) => unref(userForm).username = $event,
          placeholder: "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0438\u043C\u044F"
        }, null, _parent));
        _push(`</div><div>`);
        _push(ssrRenderComponent(_component_UiLabel, { for: "user_full_name" }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`\u0424\u0430\u043C\u0438\u043B\u0438\u044F`);
            } else {
              return [
                createTextVNode("\u0424\u0430\u043C\u0438\u043B\u0438\u044F")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(ssrRenderComponent(_component_UiInput, {
          class: "mt-2",
          id: "user_full_name",
          modelValue: unref(userForm).user_full_name,
          "onUpdate:modelValue": ($event) => unref(userForm).user_full_name = $event,
          placeholder: "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0444\u0430\u043C\u0438\u043B\u0438\u044E"
        }, null, _parent));
        _push(`</div><div>`);
        _push(ssrRenderComponent(_component_UiLabel, { for: "role" }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`\u0420\u043E\u043B\u044C`);
            } else {
              return [
                createTextVNode("\u0420\u043E\u043B\u044C")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(ssrRenderComponent(_component_UiSelect, {
          modelValue: unref(userForm).role,
          "onUpdate:modelValue": ($event) => unref(userForm).role = $event
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_UiSelectTrigger, null, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_UiSelectValue, { placeholder: "\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u0440\u043E\u043B\u044C" }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_UiSelectValue, { placeholder: "\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u0440\u043E\u043B\u044C" })
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_UiSelectContent, null, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_UiSelectGroup, null, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(_component_UiSelectItem, { value: "admin" }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`\u0410\u0434\u043C\u0438\u043D\u0438\u0441\u0442\u0440\u0430\u0442\u043E\u0440`);
                              } else {
                                return [
                                  createTextVNode("\u0410\u0434\u043C\u0438\u043D\u0438\u0441\u0442\u0440\u0430\u0442\u043E\u0440")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                          _push4(ssrRenderComponent(_component_UiSelectItem, { value: "user" }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`\u041F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044C`);
                              } else {
                                return [
                                  createTextVNode("\u041F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044C")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(_component_UiSelectItem, { value: "admin" }, {
                              default: withCtx(() => [
                                createTextVNode("\u0410\u0434\u043C\u0438\u043D\u0438\u0441\u0442\u0440\u0430\u0442\u043E\u0440")
                              ]),
                              _: 1
                            }),
                            createVNode(_component_UiSelectItem, { value: "user" }, {
                              default: withCtx(() => [
                                createTextVNode("\u041F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044C")
                              ]),
                              _: 1
                            })
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_UiSelectGroup, null, {
                        default: withCtx(() => [
                          createVNode(_component_UiSelectItem, { value: "admin" }, {
                            default: withCtx(() => [
                              createTextVNode("\u0410\u0434\u043C\u0438\u043D\u0438\u0441\u0442\u0440\u0430\u0442\u043E\u0440")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_UiSelectItem, { value: "user" }, {
                            default: withCtx(() => [
                              createTextVNode("\u041F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044C")
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_UiSelectTrigger, null, {
                  default: withCtx(() => [
                    createVNode(_component_UiSelectValue, { placeholder: "\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u0440\u043E\u043B\u044C" })
                  ]),
                  _: 1
                }),
                createVNode(_component_UiSelectContent, null, {
                  default: withCtx(() => [
                    createVNode(_component_UiSelectGroup, null, {
                      default: withCtx(() => [
                        createVNode(_component_UiSelectItem, { value: "admin" }, {
                          default: withCtx(() => [
                            createTextVNode("\u0410\u0434\u043C\u0438\u043D\u0438\u0441\u0442\u0440\u0430\u0442\u043E\u0440")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_UiSelectItem, { value: "user" }, {
                          default: withCtx(() => [
                            createTextVNode("\u041F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044C")
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                })
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div><div>`);
        _push(ssrRenderComponent(_component_UiLabel, { for: "telegram_id" }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`TG ID`);
            } else {
              return [
                createTextVNode("TG ID")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(ssrRenderComponent(_component_UiInput, {
          class: "mt-2",
          id: "telegram_id",
          modelValue: unref(userForm).telegram_id,
          "onUpdate:modelValue": ($event) => unref(userForm).telegram_id = $event,
          placeholder: "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 TG ID"
        }, null, _parent));
        _push(`</div><div class="mt-4 flex justify-between">`);
        _push(ssrRenderComponent(_component_UiButton, {
          onClick: ($event) => deleteUser()
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`\u0423\u0434\u0430\u043B\u0438\u0442\u044C`);
            } else {
              return [
                createTextVNode("\u0423\u0434\u0430\u043B\u0438\u0442\u044C")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(ssrRenderComponent(_component_UiButton, { onClick: saveUser }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C`);
            } else {
              return [
                createTextVNode("\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div>`);
        if (unref(successMessage)) {
          _push(`<p class="text-green-500 mt-4">${ssrInterpolate(unref(successMessage))}</p>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/users/[id].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined;
};

export { _sfc_main as default };
//# sourceMappingURL=_id_-BMODdSIA.mjs.map
