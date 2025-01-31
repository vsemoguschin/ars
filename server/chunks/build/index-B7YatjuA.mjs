import { _ as _sfc_main$2 } from './index-BB7KKil7.mjs';
import { _ as _sfc_main$d, a as _sfc_main$7, b as _sfc_main$c, c as _sfc_main$9, d as _sfc_main$8, e as _sfc_main$b, f as _sfc_main$a, g as _sfc_main$6, h as _sfc_main$4, i as _sfc_main$3, j as _sfc_main$2$1, k as _sfc_main$1$1, l as _sfc_main$5, m as _sfc_main$3$1 } from './TableHeader-Dh09Z8PQ.mjs';
import { _ as _sfc_main$1$2, a as _sfc_main$e } from './Input-BHo_TP6t.mjs';
import { _ as _sfc_main$6$1, a as _sfc_main$1$3, b as _sfc_main$f, c as _sfc_main$5$1, d as _sfc_main$4$1 } from './SelectValue-D5HYJzCo.mjs';
import { _ as _sfc_main$g } from './SelectGroup-uOS6RgQJ.mjs';
import { useSSRContext, defineComponent, ref, mergeProps, unref, withCtx, createTextVNode, isRef, createVNode, toDisplayString, openBlock, createBlock, Fragment, renderList, watch } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderList } from 'vue/server-renderer';
import { b as useNuxtApp, u as useRouter, d as useHead } from './server.mjs';
import 'clsx';
import 'tailwind-merge';
import 'radix-vue';
import 'class-variance-authority';
import '@radix-icons/vue';
import '@vueuse/core';
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

const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "UserForm",
  __ssrInlineRender: true,
  props: {
    modelValue: {
      type: Object,
      required: true
    }
  },
  emits: ["update:modelValue"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const userForm = ref({
      username: props.modelValue.username || "",
      user_full_name: props.modelValue.user_full_name || "",
      role: props.modelValue.role || "user",
      // Default role set to 'user'
      telegram_id: props.modelValue.telegram_id || ""
    });
    watch(userForm, (newValue) => {
      emit("update:modelValue", newValue);
    }, { deep: true });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UiLabel = _sfc_main$1$2;
      const _component_UiInput = _sfc_main$e;
      const _component_UiSelect = _sfc_main$6$1;
      const _component_UiSelectTrigger = _sfc_main$1$3;
      const _component_UiSelectValue = _sfc_main$f;
      const _component_UiSelectContent = _sfc_main$5$1;
      const _component_UiSelectGroup = _sfc_main$g;
      const _component_UiSelectItem = _sfc_main$4$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-col gap-3" }, _attrs))}><div>`);
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
                        _push4(ssrRenderComponent(_component_UiSelectItem, { value: "subcontracter" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`\u041F\u043E\u0434\u0440\u044F\u0434\u0447\u0438\u043A`);
                            } else {
                              return [
                                createTextVNode("\u041F\u043E\u0434\u0440\u044F\u0434\u0447\u0438\u043A")
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
                          }),
                          createVNode(_component_UiSelectItem, { value: "subcontracter" }, {
                            default: withCtx(() => [
                              createTextVNode("\u041F\u043E\u0434\u0440\u044F\u0434\u0447\u0438\u043A")
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
                        }),
                        createVNode(_component_UiSelectItem, { value: "subcontracter" }, {
                          default: withCtx(() => [
                            createTextVNode("\u041F\u043E\u0434\u0440\u044F\u0434\u0447\u0438\u043A")
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
                      }),
                      createVNode(_component_UiSelectItem, { value: "subcontracter" }, {
                        default: withCtx(() => [
                          createTextVNode("\u041F\u043E\u0434\u0440\u044F\u0434\u0447\u0438\u043A")
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
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/my/users/UserForm.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : undefined;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const { $useApi } = useNuxtApp();
    const router = useRouter();
    useHead({
      title: "\u041F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u0438"
    });
    const users = ref([]);
    const loading = ref(true);
    const error = ref(null);
    const isDialogOpen = ref(false);
    const newUser = ref({ user_full_name: "", username: "", role: "", telegram_id: "" });
    const createUser = async () => {
      try {
        const { data: createdUser } = await $useApi.post("/users/", newUser.value);
        users.value.push(createdUser);
        isDialogOpen.value = false;
        newUser.value = { user_full_name: "", username: "", role: "", telegram_id: "" };
      } catch (err) {
        console.error("\u041E\u0448\u0438\u0431\u043A\u0430 \u0441\u043E\u0437\u0434\u0430\u043D\u0438\u044F \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044F:", err);
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UiButton = _sfc_main$2;
      const _component_UiDialog = _sfc_main$d;
      const _component_UiDialogTrigger = _sfc_main$7;
      const _component_UiDialogContent = _sfc_main$c;
      const _component_UiDialogHeader = _sfc_main$9;
      const _component_UiDialogTitle = _sfc_main$8;
      const _component_UiDialogDescription = _sfc_main$b;
      const _component_MyUsersUserForm = _sfc_main$1;
      const _component_UiDialogFooter = _sfc_main$a;
      const _component_UiTable = _sfc_main$6;
      const _component_UiTableCaption = _sfc_main$4;
      const _component_UiTableHeader = _sfc_main$3;
      const _component_UiTableRow = _sfc_main$2$1;
      const _component_UiTableHead = _sfc_main$1$1;
      const _component_UiTableBody = _sfc_main$5;
      const _component_UiTableCell = _sfc_main$3$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "p-6" }, _attrs))}><h1 class="text-2xl font-bold mb-4">\u0421\u043F\u0438\u0441\u043E\u043A \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u0435\u0439</h1><div class="flex gap-2 mb-4">`);
      _push(ssrRenderComponent(_component_UiButton, {
        onClick: ($event) => unref(router).push("/"),
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
      _push(ssrRenderComponent(_component_UiDialog, {
        open: unref(isDialogOpen),
        "onUpdate:open": ($event) => isRef(isDialogOpen) ? isDialogOpen.value = $event : null
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UiDialogTrigger, { "as-child": "" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UiButton, {
                    onClick: ($event) => isDialogOpen.value = true,
                    class: "h-8 w-8"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` + `);
                      } else {
                        return [
                          createTextVNode(" + ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_UiButton, {
                      onClick: ($event) => isDialogOpen.value = true,
                      class: "h-8 w-8"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" + ")
                      ]),
                      _: 1
                    }, 8, ["onClick"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UiDialogContent, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UiDialogHeader, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_UiDialogTitle, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`\u0421\u043E\u0437\u0434\u0430\u0442\u044C \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044F`);
                            } else {
                              return [
                                createTextVNode("\u0421\u043E\u0437\u0434\u0430\u0442\u044C \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044F")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_UiDialogDescription, null, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_UiDialogTitle, null, {
                            default: withCtx(() => [
                              createTextVNode("\u0421\u043E\u0437\u0434\u0430\u0442\u044C \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044F")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_UiDialogDescription)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_MyUsersUserForm, {
                    "model-value": unref(newUser),
                    "onUpdate:modelValue": (value) => newUser.value = value
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_UiDialogFooter, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div class="flex justify-between w-full"${_scopeId3}>`);
                        _push4(ssrRenderComponent(_component_UiButton, {
                          class: "mb-2",
                          onClick: ($event) => isDialogOpen.value = false
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`\u041E\u0442\u043C\u0435\u043D\u0430`);
                            } else {
                              return [
                                createTextVNode("\u041E\u0442\u043C\u0435\u043D\u0430")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_UiButton, { onClick: createUser }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`\u0421\u043E\u0437\u0434\u0430\u0442\u044C`);
                            } else {
                              return [
                                createTextVNode("\u0421\u043E\u0437\u0434\u0430\u0442\u044C")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(`</div>`);
                      } else {
                        return [
                          createVNode("div", { class: "flex justify-between w-full" }, [
                            createVNode(_component_UiButton, {
                              class: "mb-2",
                              onClick: ($event) => isDialogOpen.value = false
                            }, {
                              default: withCtx(() => [
                                createTextVNode("\u041E\u0442\u043C\u0435\u043D\u0430")
                              ]),
                              _: 1
                            }, 8, ["onClick"]),
                            createVNode(_component_UiButton, { onClick: createUser }, {
                              default: withCtx(() => [
                                createTextVNode("\u0421\u043E\u0437\u0434\u0430\u0442\u044C")
                              ]),
                              _: 1
                            })
                          ])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_UiDialogHeader, null, {
                      default: withCtx(() => [
                        createVNode(_component_UiDialogTitle, null, {
                          default: withCtx(() => [
                            createTextVNode("\u0421\u043E\u0437\u0434\u0430\u0442\u044C \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044F")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_UiDialogDescription)
                      ]),
                      _: 1
                    }),
                    createVNode(_component_MyUsersUserForm, {
                      "model-value": unref(newUser),
                      "onUpdate:modelValue": (value) => newUser.value = value
                    }, null, 8, ["model-value", "onUpdate:modelValue"]),
                    createVNode(_component_UiDialogFooter, null, {
                      default: withCtx(() => [
                        createVNode("div", { class: "flex justify-between w-full" }, [
                          createVNode(_component_UiButton, {
                            class: "mb-2",
                            onClick: ($event) => isDialogOpen.value = false
                          }, {
                            default: withCtx(() => [
                              createTextVNode("\u041E\u0442\u043C\u0435\u043D\u0430")
                            ]),
                            _: 1
                          }, 8, ["onClick"]),
                          createVNode(_component_UiButton, { onClick: createUser }, {
                            default: withCtx(() => [
                              createTextVNode("\u0421\u043E\u0437\u0434\u0430\u0442\u044C")
                            ]),
                            _: 1
                          })
                        ])
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
              createVNode(_component_UiDialogTrigger, { "as-child": "" }, {
                default: withCtx(() => [
                  createVNode(_component_UiButton, {
                    onClick: ($event) => isDialogOpen.value = true,
                    class: "h-8 w-8"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" + ")
                    ]),
                    _: 1
                  }, 8, ["onClick"])
                ]),
                _: 1
              }),
              createVNode(_component_UiDialogContent, null, {
                default: withCtx(() => [
                  createVNode(_component_UiDialogHeader, null, {
                    default: withCtx(() => [
                      createVNode(_component_UiDialogTitle, null, {
                        default: withCtx(() => [
                          createTextVNode("\u0421\u043E\u0437\u0434\u0430\u0442\u044C \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044F")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_UiDialogDescription)
                    ]),
                    _: 1
                  }),
                  createVNode(_component_MyUsersUserForm, {
                    "model-value": unref(newUser),
                    "onUpdate:modelValue": (value) => newUser.value = value
                  }, null, 8, ["model-value", "onUpdate:modelValue"]),
                  createVNode(_component_UiDialogFooter, null, {
                    default: withCtx(() => [
                      createVNode("div", { class: "flex justify-between w-full" }, [
                        createVNode(_component_UiButton, {
                          class: "mb-2",
                          onClick: ($event) => isDialogOpen.value = false
                        }, {
                          default: withCtx(() => [
                            createTextVNode("\u041E\u0442\u043C\u0435\u043D\u0430")
                          ]),
                          _: 1
                        }, 8, ["onClick"]),
                        createVNode(_component_UiButton, { onClick: createUser }, {
                          default: withCtx(() => [
                            createTextVNode("\u0421\u043E\u0437\u0434\u0430\u0442\u044C")
                          ]),
                          _: 1
                        })
                      ])
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
      _push(`</div>`);
      if (unref(loading)) {
        _push(`<div class="text-center"><p>\u0417\u0430\u0433\u0440\u0443\u0437\u043A\u0430...</p></div>`);
      } else if (unref(error)) {
        _push(`<div class="text-red-500 text-center"><p>\u041E\u0448\u0438\u0431\u043A\u0430 \u0437\u0430\u0433\u0440\u0443\u0437\u043A\u0438: ${ssrInterpolate(unref(error))}</p></div>`);
      } else {
        _push(`<div>`);
        _push(ssrRenderComponent(_component_UiTable, null, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_UiTableCaption, null, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`\u0421\u043F\u0438\u0441\u043E\u043A \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u0435\u0439.`);
                  } else {
                    return [
                      createTextVNode("\u0421\u043F\u0438\u0441\u043E\u043A \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u0435\u0439.")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_UiTableHeader, { class: "bg-slate-100" }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_UiTableRow, null, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(_component_UiTableHead, null, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`\u0418\u043C\u044F`);
                              } else {
                                return [
                                  createTextVNode("\u0418\u043C\u044F")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                          _push4(ssrRenderComponent(_component_UiTableHead, null, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`\u0424\u0430\u043C\u0438\u043B\u0438\u044F`);
                              } else {
                                return [
                                  createTextVNode("\u0424\u0430\u043C\u0438\u043B\u0438\u044F")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                          _push4(ssrRenderComponent(_component_UiTableHead, null, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`\u0420\u043E\u043B\u044C`);
                              } else {
                                return [
                                  createTextVNode("\u0420\u043E\u043B\u044C")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                          _push4(ssrRenderComponent(_component_UiTableHead, null, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`TG ID`);
                              } else {
                                return [
                                  createTextVNode("TG ID")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(_component_UiTableHead, null, {
                              default: withCtx(() => [
                                createTextVNode("\u0418\u043C\u044F")
                              ]),
                              _: 1
                            }),
                            createVNode(_component_UiTableHead, null, {
                              default: withCtx(() => [
                                createTextVNode("\u0424\u0430\u043C\u0438\u043B\u0438\u044F")
                              ]),
                              _: 1
                            }),
                            createVNode(_component_UiTableHead, null, {
                              default: withCtx(() => [
                                createTextVNode("\u0420\u043E\u043B\u044C")
                              ]),
                              _: 1
                            }),
                            createVNode(_component_UiTableHead, null, {
                              default: withCtx(() => [
                                createTextVNode("TG ID")
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
                      createVNode(_component_UiTableRow, null, {
                        default: withCtx(() => [
                          createVNode(_component_UiTableHead, null, {
                            default: withCtx(() => [
                              createTextVNode("\u0418\u043C\u044F")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_UiTableHead, null, {
                            default: withCtx(() => [
                              createTextVNode("\u0424\u0430\u043C\u0438\u043B\u0438\u044F")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_UiTableHead, null, {
                            default: withCtx(() => [
                              createTextVNode("\u0420\u043E\u043B\u044C")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_UiTableHead, null, {
                            default: withCtx(() => [
                              createTextVNode("TG ID")
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
              _push2(ssrRenderComponent(_component_UiTableBody, null, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<!--[-->`);
                    ssrRenderList(unref(users), (user) => {
                      _push3(ssrRenderComponent(_component_UiTableRow, {
                        key: user.id,
                        onClick: ($event) => unref(router).push(`/users/${user.id}`),
                        class: "cursor-pointer hover:bg-gray-100"
                      }, {
                        default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(ssrRenderComponent(_component_UiTableCell, null, {
                              default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  _push5(`${ssrInterpolate(user.username)}`);
                                } else {
                                  return [
                                    createTextVNode(toDisplayString(user.username), 1)
                                  ];
                                }
                              }),
                              _: 2
                            }, _parent4, _scopeId3));
                            _push4(ssrRenderComponent(_component_UiTableCell, null, {
                              default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  _push5(`${ssrInterpolate(user.user_full_name)}`);
                                } else {
                                  return [
                                    createTextVNode(toDisplayString(user.user_full_name), 1)
                                  ];
                                }
                              }),
                              _: 2
                            }, _parent4, _scopeId3));
                            _push4(ssrRenderComponent(_component_UiTableCell, null, {
                              default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  _push5(`${ssrInterpolate(user.role)}`);
                                } else {
                                  return [
                                    createTextVNode(toDisplayString(user.role), 1)
                                  ];
                                }
                              }),
                              _: 2
                            }, _parent4, _scopeId3));
                            _push4(ssrRenderComponent(_component_UiTableCell, null, {
                              default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  _push5(`${ssrInterpolate(user.telegram_id)}`);
                                } else {
                                  return [
                                    createTextVNode(toDisplayString(user.telegram_id), 1)
                                  ];
                                }
                              }),
                              _: 2
                            }, _parent4, _scopeId3));
                          } else {
                            return [
                              createVNode(_component_UiTableCell, null, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(user.username), 1)
                                ]),
                                _: 2
                              }, 1024),
                              createVNode(_component_UiTableCell, null, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(user.user_full_name), 1)
                                ]),
                                _: 2
                              }, 1024),
                              createVNode(_component_UiTableCell, null, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(user.role), 1)
                                ]),
                                _: 2
                              }, 1024),
                              createVNode(_component_UiTableCell, null, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(user.telegram_id), 1)
                                ]),
                                _: 2
                              }, 1024)
                            ];
                          }
                        }),
                        _: 2
                      }, _parent3, _scopeId2));
                    });
                    _push3(`<!--]-->`);
                  } else {
                    return [
                      (openBlock(true), createBlock(Fragment, null, renderList(unref(users), (user) => {
                        return openBlock(), createBlock(_component_UiTableRow, {
                          key: user.id,
                          onClick: ($event) => unref(router).push(`/users/${user.id}`),
                          class: "cursor-pointer hover:bg-gray-100"
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_UiTableCell, null, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(user.username), 1)
                              ]),
                              _: 2
                            }, 1024),
                            createVNode(_component_UiTableCell, null, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(user.user_full_name), 1)
                              ]),
                              _: 2
                            }, 1024),
                            createVNode(_component_UiTableCell, null, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(user.role), 1)
                              ]),
                              _: 2
                            }, 1024),
                            createVNode(_component_UiTableCell, null, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(user.telegram_id), 1)
                              ]),
                              _: 2
                            }, 1024)
                          ]),
                          _: 2
                        }, 1032, ["onClick"]);
                      }), 128))
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_UiTableCaption, null, {
                  default: withCtx(() => [
                    createTextVNode("\u0421\u043F\u0438\u0441\u043E\u043A \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u0435\u0439.")
                  ]),
                  _: 1
                }),
                createVNode(_component_UiTableHeader, { class: "bg-slate-100" }, {
                  default: withCtx(() => [
                    createVNode(_component_UiTableRow, null, {
                      default: withCtx(() => [
                        createVNode(_component_UiTableHead, null, {
                          default: withCtx(() => [
                            createTextVNode("\u0418\u043C\u044F")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_UiTableHead, null, {
                          default: withCtx(() => [
                            createTextVNode("\u0424\u0430\u043C\u0438\u043B\u0438\u044F")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_UiTableHead, null, {
                          default: withCtx(() => [
                            createTextVNode("\u0420\u043E\u043B\u044C")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_UiTableHead, null, {
                          default: withCtx(() => [
                            createTextVNode("TG ID")
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }),
                createVNode(_component_UiTableBody, null, {
                  default: withCtx(() => [
                    (openBlock(true), createBlock(Fragment, null, renderList(unref(users), (user) => {
                      return openBlock(), createBlock(_component_UiTableRow, {
                        key: user.id,
                        onClick: ($event) => unref(router).push(`/users/${user.id}`),
                        class: "cursor-pointer hover:bg-gray-100"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_UiTableCell, null, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(user.username), 1)
                            ]),
                            _: 2
                          }, 1024),
                          createVNode(_component_UiTableCell, null, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(user.user_full_name), 1)
                            ]),
                            _: 2
                          }, 1024),
                          createVNode(_component_UiTableCell, null, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(user.role), 1)
                            ]),
                            _: 2
                          }, 1024),
                          createVNode(_component_UiTableCell, null, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(user.telegram_id), 1)
                            ]),
                            _: 2
                          }, 1024)
                        ]),
                        _: 2
                      }, 1032, ["onClick"]);
                    }), 128))
                  ]),
                  _: 1
                })
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div>`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/users/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined;
};

export { _sfc_main as default };
//# sourceMappingURL=index-B7YatjuA.mjs.map
