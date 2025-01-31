import { _ as _sfc_main$1 } from './index-BB7KKil7.mjs';
import { _ as _sfc_main$d, a as _sfc_main$7, b as _sfc_main$c, c as _sfc_main$9, d as _sfc_main$8, e as _sfc_main$b, f as _sfc_main$a, g as _sfc_main$6, h as _sfc_main$4, i as _sfc_main$5, j as _sfc_main$2$1, k as _sfc_main$1$2, l as _sfc_main$5$1, m as _sfc_main$3$1 } from './TableHeader-Dh09Z8PQ.mjs';
import { _ as _sfc_main$1$1, a as _sfc_main$2 } from './Input-BHo_TP6t.mjs';
import { _ as _sfc_main$3 } from './Combobox-DOwrg-P2.mjs';
import { defineComponent, ref, mergeProps, unref, withCtx, createTextVNode, isRef, createVNode, toDisplayString, openBlock, createBlock, Fragment, renderList, useSSRContext } from 'vue';
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

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const { $useApi } = useNuxtApp();
    const router = useRouter();
    useHead({
      title: "\u041A\u043E\u043D\u0442\u0440\u0430\u0433\u0435\u043D\u0442\u044B"
    });
    const contractors = ref([]);
    const contractorsTypes = ref([]);
    const loading = ref(true);
    const error = ref(null);
    const isDialogOpen = ref(false);
    const newContractor = ref({ name: "", phone: "", inn: "", contractor_type: "" });
    const createContractor = async () => {
      try {
        const { data: createdContractor } = await $useApi.post("/contractors/", newContractor.value);
        contractors.value.push(createdContractor);
        isDialogOpen.value = false;
        newContractor.value = { name: "", phone: "", inn: "", contractor_type: "" };
      } catch (err) {
        console.error("\u041E\u0448\u0438\u0431\u043A\u0430 \u0441\u043E\u0437\u0434\u0430\u043D\u0438\u044F \u043A\u043E\u043D\u0442\u0440\u0430\u0433\u0435\u043D\u0442\u0430:", err);
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UiButton = _sfc_main$1;
      const _component_UiDialog = _sfc_main$d;
      const _component_UiDialogTrigger = _sfc_main$7;
      const _component_UiDialogContent = _sfc_main$c;
      const _component_UiDialogHeader = _sfc_main$9;
      const _component_UiDialogTitle = _sfc_main$8;
      const _component_UiDialogDescription = _sfc_main$b;
      const _component_UiLabel = _sfc_main$1$1;
      const _component_UiInput = _sfc_main$2;
      const _component_MyCombobox = _sfc_main$3;
      const _component_UiDialogFooter = _sfc_main$a;
      const _component_UiTable = _sfc_main$6;
      const _component_UiTableCaption = _sfc_main$4;
      const _component_UiTableHeader = _sfc_main$5;
      const _component_UiTableRow = _sfc_main$2$1;
      const _component_UiTableHead = _sfc_main$1$2;
      const _component_UiTableBody = _sfc_main$5$1;
      const _component_UiTableCell = _sfc_main$3$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "p-6" }, _attrs))}><h1 class="text-2xl font-bold mb-4">\u0421\u043F\u0438\u0441\u043E\u043A \u043A\u043E\u043D\u0442\u0440\u0430\u0433\u0435\u043D\u0442\u043E\u0432</h1><div class="flex gap-2 mb-4">`);
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
                              _push5(`\u0421\u043E\u0437\u0434\u0430\u0442\u044C \u043A\u043E\u043D\u0442\u0440\u0430\u0433\u0435\u043D\u0442\u0430`);
                            } else {
                              return [
                                createTextVNode("\u0421\u043E\u0437\u0434\u0430\u0442\u044C \u043A\u043E\u043D\u0442\u0440\u0430\u0433\u0435\u043D\u0442\u0430")
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
                              createTextVNode("\u0421\u043E\u0437\u0434\u0430\u0442\u044C \u043A\u043E\u043D\u0442\u0440\u0430\u0433\u0435\u043D\u0442\u0430")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_UiDialogDescription)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`<div class="flex flex-col gap-3"${_scopeId2}><div${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_UiLabel, { for: "name" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435`);
                      } else {
                        return [
                          createTextVNode("\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_UiInput, {
                    class: "mt-2",
                    id: "name",
                    modelValue: unref(newContractor).name,
                    "onUpdate:modelValue": ($event) => unref(newContractor).name = $event,
                    placeholder: "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u043A\u043E\u043D\u0442\u0440\u0430\u0433\u0435\u043D\u0442\u0430"
                  }, null, _parent3, _scopeId2));
                  _push3(`</div><div${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_UiLabel, { for: "phone" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`\u0422\u0435\u043B\u0435\u0444\u043E\u043D`);
                      } else {
                        return [
                          createTextVNode("\u0422\u0435\u043B\u0435\u0444\u043E\u043D")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_UiInput, {
                    class: "mt-2",
                    id: "phone",
                    modelValue: unref(newContractor).phone,
                    "onUpdate:modelValue": ($event) => unref(newContractor).phone = $event,
                    placeholder: "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043D\u043E\u043C\u0435\u0440 \u0442\u0435\u043B\u0435\u0444\u043E\u043D\u0430"
                  }, null, _parent3, _scopeId2));
                  _push3(`</div><div${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_UiLabel, { for: "inn" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`\u0418\u041D\u041D`);
                      } else {
                        return [
                          createTextVNode("\u0418\u041D\u041D")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_UiInput, {
                    class: "mt-2",
                    type: "number",
                    id: "inn",
                    modelValue: unref(newContractor).inn,
                    "onUpdate:modelValue": ($event) => unref(newContractor).inn = $event,
                    placeholder: "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0418\u041D\u041D"
                  }, null, _parent3, _scopeId2));
                  _push3(`</div><div${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_UiLabel, { for: "contractor_type" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`\u0422\u0438\u043F \u043A\u043E\u043D\u0442\u0440\u0430\u0433\u0435\u043D\u0442\u0430`);
                      } else {
                        return [
                          createTextVNode("\u0422\u0438\u043F \u043A\u043E\u043D\u0442\u0440\u0430\u0433\u0435\u043D\u0442\u0430")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_MyCombobox, {
                    class: "mt-2",
                    items: unref(contractorsTypes).map((type) => type.name),
                    label: "\u0422\u0438\u043F \u043A\u043E\u043D\u0442\u0440\u0430\u0433\u0435\u043D\u0442\u0430",
                    onSelectedItem: (value) => unref(newContractor).contractor_type = value
                  }, null, _parent3, _scopeId2));
                  _push3(`</div></div>`);
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
                        _push4(ssrRenderComponent(_component_UiButton, { onClick: createContractor }, {
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
                            createVNode(_component_UiButton, { onClick: createContractor }, {
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
                            createTextVNode("\u0421\u043E\u0437\u0434\u0430\u0442\u044C \u043A\u043E\u043D\u0442\u0440\u0430\u0433\u0435\u043D\u0442\u0430")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_UiDialogDescription)
                      ]),
                      _: 1
                    }),
                    createVNode("div", { class: "flex flex-col gap-3" }, [
                      createVNode("div", null, [
                        createVNode(_component_UiLabel, { for: "name" }, {
                          default: withCtx(() => [
                            createTextVNode("\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_UiInput, {
                          class: "mt-2",
                          id: "name",
                          modelValue: unref(newContractor).name,
                          "onUpdate:modelValue": ($event) => unref(newContractor).name = $event,
                          placeholder: "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u043A\u043E\u043D\u0442\u0440\u0430\u0433\u0435\u043D\u0442\u0430"
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      createVNode("div", null, [
                        createVNode(_component_UiLabel, { for: "phone" }, {
                          default: withCtx(() => [
                            createTextVNode("\u0422\u0435\u043B\u0435\u0444\u043E\u043D")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_UiInput, {
                          class: "mt-2",
                          id: "phone",
                          modelValue: unref(newContractor).phone,
                          "onUpdate:modelValue": ($event) => unref(newContractor).phone = $event,
                          placeholder: "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043D\u043E\u043C\u0435\u0440 \u0442\u0435\u043B\u0435\u0444\u043E\u043D\u0430"
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      createVNode("div", null, [
                        createVNode(_component_UiLabel, { for: "inn" }, {
                          default: withCtx(() => [
                            createTextVNode("\u0418\u041D\u041D")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_UiInput, {
                          class: "mt-2",
                          type: "number",
                          id: "inn",
                          modelValue: unref(newContractor).inn,
                          "onUpdate:modelValue": ($event) => unref(newContractor).inn = $event,
                          placeholder: "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0418\u041D\u041D"
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      createVNode("div", null, [
                        createVNode(_component_UiLabel, { for: "contractor_type" }, {
                          default: withCtx(() => [
                            createTextVNode("\u0422\u0438\u043F \u043A\u043E\u043D\u0442\u0440\u0430\u0433\u0435\u043D\u0442\u0430")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_MyCombobox, {
                          class: "mt-2",
                          items: unref(contractorsTypes).map((type) => type.name),
                          label: "\u0422\u0438\u043F \u043A\u043E\u043D\u0442\u0440\u0430\u0433\u0435\u043D\u0442\u0430",
                          onSelectedItem: (value) => unref(newContractor).contractor_type = value
                        }, null, 8, ["items", "onSelectedItem"])
                      ])
                    ]),
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
                          createVNode(_component_UiButton, { onClick: createContractor }, {
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
                          createTextVNode("\u0421\u043E\u0437\u0434\u0430\u0442\u044C \u043A\u043E\u043D\u0442\u0440\u0430\u0433\u0435\u043D\u0442\u0430")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_UiDialogDescription)
                    ]),
                    _: 1
                  }),
                  createVNode("div", { class: "flex flex-col gap-3" }, [
                    createVNode("div", null, [
                      createVNode(_component_UiLabel, { for: "name" }, {
                        default: withCtx(() => [
                          createTextVNode("\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_UiInput, {
                        class: "mt-2",
                        id: "name",
                        modelValue: unref(newContractor).name,
                        "onUpdate:modelValue": ($event) => unref(newContractor).name = $event,
                        placeholder: "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u043A\u043E\u043D\u0442\u0440\u0430\u0433\u0435\u043D\u0442\u0430"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    createVNode("div", null, [
                      createVNode(_component_UiLabel, { for: "phone" }, {
                        default: withCtx(() => [
                          createTextVNode("\u0422\u0435\u043B\u0435\u0444\u043E\u043D")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_UiInput, {
                        class: "mt-2",
                        id: "phone",
                        modelValue: unref(newContractor).phone,
                        "onUpdate:modelValue": ($event) => unref(newContractor).phone = $event,
                        placeholder: "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043D\u043E\u043C\u0435\u0440 \u0442\u0435\u043B\u0435\u0444\u043E\u043D\u0430"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    createVNode("div", null, [
                      createVNode(_component_UiLabel, { for: "inn" }, {
                        default: withCtx(() => [
                          createTextVNode("\u0418\u041D\u041D")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_UiInput, {
                        class: "mt-2",
                        type: "number",
                        id: "inn",
                        modelValue: unref(newContractor).inn,
                        "onUpdate:modelValue": ($event) => unref(newContractor).inn = $event,
                        placeholder: "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0418\u041D\u041D"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    createVNode("div", null, [
                      createVNode(_component_UiLabel, { for: "contractor_type" }, {
                        default: withCtx(() => [
                          createTextVNode("\u0422\u0438\u043F \u043A\u043E\u043D\u0442\u0440\u0430\u0433\u0435\u043D\u0442\u0430")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_MyCombobox, {
                        class: "mt-2",
                        items: unref(contractorsTypes).map((type) => type.name),
                        label: "\u0422\u0438\u043F \u043A\u043E\u043D\u0442\u0440\u0430\u0433\u0435\u043D\u0442\u0430",
                        onSelectedItem: (value) => unref(newContractor).contractor_type = value
                      }, null, 8, ["items", "onSelectedItem"])
                    ])
                  ]),
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
                        createVNode(_component_UiButton, { onClick: createContractor }, {
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
                    _push3(`\u0421\u043F\u0438\u0441\u043E\u043A \u043A\u043E\u043D\u0442\u0440\u0430\u0433\u0435\u043D\u0442\u043E\u0432.`);
                  } else {
                    return [
                      createTextVNode("\u0421\u043F\u0438\u0441\u043E\u043A \u043A\u043E\u043D\u0442\u0440\u0430\u0433\u0435\u043D\u0442\u043E\u0432.")
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
                                _push5(`\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435`);
                              } else {
                                return [
                                  createTextVNode("\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                          _push4(ssrRenderComponent(_component_UiTableHead, null, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`\u0422\u0435\u043B\u0435\u0444\u043E\u043D`);
                              } else {
                                return [
                                  createTextVNode("\u0422\u0435\u043B\u0435\u0444\u043E\u043D")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                          _push4(ssrRenderComponent(_component_UiTableHead, null, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`\u0418\u041D\u041D`);
                              } else {
                                return [
                                  createTextVNode("\u0418\u041D\u041D")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                          _push4(ssrRenderComponent(_component_UiTableHead, null, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`\u0422\u0438\u043F`);
                              } else {
                                return [
                                  createTextVNode("\u0422\u0438\u043F")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(_component_UiTableHead, null, {
                              default: withCtx(() => [
                                createTextVNode("\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435")
                              ]),
                              _: 1
                            }),
                            createVNode(_component_UiTableHead, null, {
                              default: withCtx(() => [
                                createTextVNode("\u0422\u0435\u043B\u0435\u0444\u043E\u043D")
                              ]),
                              _: 1
                            }),
                            createVNode(_component_UiTableHead, null, {
                              default: withCtx(() => [
                                createTextVNode("\u0418\u041D\u041D")
                              ]),
                              _: 1
                            }),
                            createVNode(_component_UiTableHead, null, {
                              default: withCtx(() => [
                                createTextVNode("\u0422\u0438\u043F")
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
                              createTextVNode("\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_UiTableHead, null, {
                            default: withCtx(() => [
                              createTextVNode("\u0422\u0435\u043B\u0435\u0444\u043E\u043D")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_UiTableHead, null, {
                            default: withCtx(() => [
                              createTextVNode("\u0418\u041D\u041D")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_UiTableHead, null, {
                            default: withCtx(() => [
                              createTextVNode("\u0422\u0438\u043F")
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
                    ssrRenderList(unref(contractors), (contractor) => {
                      _push3(ssrRenderComponent(_component_UiTableRow, {
                        key: contractor.id,
                        onClick: ($event) => unref(router).push(`/contractors/${contractor.id}`),
                        class: "cursor-pointer hover:bg-gray-100"
                      }, {
                        default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(ssrRenderComponent(_component_UiTableCell, null, {
                              default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  _push5(`${ssrInterpolate(contractor.name)}`);
                                } else {
                                  return [
                                    createTextVNode(toDisplayString(contractor.name), 1)
                                  ];
                                }
                              }),
                              _: 2
                            }, _parent4, _scopeId3));
                            _push4(ssrRenderComponent(_component_UiTableCell, null, {
                              default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  _push5(`${ssrInterpolate(contractor.phone)}`);
                                } else {
                                  return [
                                    createTextVNode(toDisplayString(contractor.phone), 1)
                                  ];
                                }
                              }),
                              _: 2
                            }, _parent4, _scopeId3));
                            _push4(ssrRenderComponent(_component_UiTableCell, null, {
                              default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  _push5(`${ssrInterpolate(contractor.inn)}`);
                                } else {
                                  return [
                                    createTextVNode(toDisplayString(contractor.inn), 1)
                                  ];
                                }
                              }),
                              _: 2
                            }, _parent4, _scopeId3));
                            _push4(ssrRenderComponent(_component_UiTableCell, null, {
                              default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  _push5(`${ssrInterpolate(contractor.contractor_type)}`);
                                } else {
                                  return [
                                    createTextVNode(toDisplayString(contractor.contractor_type), 1)
                                  ];
                                }
                              }),
                              _: 2
                            }, _parent4, _scopeId3));
                          } else {
                            return [
                              createVNode(_component_UiTableCell, null, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(contractor.name), 1)
                                ]),
                                _: 2
                              }, 1024),
                              createVNode(_component_UiTableCell, null, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(contractor.phone), 1)
                                ]),
                                _: 2
                              }, 1024),
                              createVNode(_component_UiTableCell, null, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(contractor.inn), 1)
                                ]),
                                _: 2
                              }, 1024),
                              createVNode(_component_UiTableCell, null, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(contractor.contractor_type), 1)
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
                      (openBlock(true), createBlock(Fragment, null, renderList(unref(contractors), (contractor) => {
                        return openBlock(), createBlock(_component_UiTableRow, {
                          key: contractor.id,
                          onClick: ($event) => unref(router).push(`/contractors/${contractor.id}`),
                          class: "cursor-pointer hover:bg-gray-100"
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_UiTableCell, null, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(contractor.name), 1)
                              ]),
                              _: 2
                            }, 1024),
                            createVNode(_component_UiTableCell, null, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(contractor.phone), 1)
                              ]),
                              _: 2
                            }, 1024),
                            createVNode(_component_UiTableCell, null, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(contractor.inn), 1)
                              ]),
                              _: 2
                            }, 1024),
                            createVNode(_component_UiTableCell, null, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(contractor.contractor_type), 1)
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
                    createTextVNode("\u0421\u043F\u0438\u0441\u043E\u043A \u043A\u043E\u043D\u0442\u0440\u0430\u0433\u0435\u043D\u0442\u043E\u0432.")
                  ]),
                  _: 1
                }),
                createVNode(_component_UiTableHeader, { class: "bg-slate-100" }, {
                  default: withCtx(() => [
                    createVNode(_component_UiTableRow, null, {
                      default: withCtx(() => [
                        createVNode(_component_UiTableHead, null, {
                          default: withCtx(() => [
                            createTextVNode("\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_UiTableHead, null, {
                          default: withCtx(() => [
                            createTextVNode("\u0422\u0435\u043B\u0435\u0444\u043E\u043D")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_UiTableHead, null, {
                          default: withCtx(() => [
                            createTextVNode("\u0418\u041D\u041D")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_UiTableHead, null, {
                          default: withCtx(() => [
                            createTextVNode("\u0422\u0438\u043F")
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
                    (openBlock(true), createBlock(Fragment, null, renderList(unref(contractors), (contractor) => {
                      return openBlock(), createBlock(_component_UiTableRow, {
                        key: contractor.id,
                        onClick: ($event) => unref(router).push(`/contractors/${contractor.id}`),
                        class: "cursor-pointer hover:bg-gray-100"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_UiTableCell, null, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(contractor.name), 1)
                            ]),
                            _: 2
                          }, 1024),
                          createVNode(_component_UiTableCell, null, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(contractor.phone), 1)
                            ]),
                            _: 2
                          }, 1024),
                          createVNode(_component_UiTableCell, null, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(contractor.inn), 1)
                            ]),
                            _: 2
                          }, 1024),
                          createVNode(_component_UiTableCell, null, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(contractor.contractor_type), 1)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/contractors/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined;
};

export { _sfc_main as default };
//# sourceMappingURL=index-BA9vrS3_.mjs.map
