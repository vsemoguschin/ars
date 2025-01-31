import { _ as _sfc_main$1 } from './index-BB7KKil7.mjs';
import { _ as _sfc_main$d, a as _sfc_main$7, b as _sfc_main$c, c as _sfc_main$9, d as _sfc_main$8, e as _sfc_main$b, f as _sfc_main$a$1, g as _sfc_main$6$1, h as _sfc_main$4$2, i as _sfc_main$e, j as _sfc_main$2$1, k as _sfc_main$1$3, l as _sfc_main$5$1, m as _sfc_main$3$1 } from './TableHeader-Dh09Z8PQ.mjs';
import { _ as _sfc_main$1$1, a as _sfc_main$a } from './Input-BHo_TP6t.mjs';
import { _ as _sfc_main$2 } from './ComboboxModels-D6B6rKrJ.mjs';
import { _ as _sfc_main$3 } from './Combobox-DOwrg-P2.mjs';
import { _ as _sfc_main$6, a as _sfc_main$1$2, b as _sfc_main$4, c as _sfc_main$5, d as _sfc_main$4$1 } from './SelectValue-D5HYJzCo.mjs';
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
      title: "\u041F\u0440\u0435\u0434\u043E\u043F\u043B\u0430\u0442\u044B"
    });
    const prepayments = ref([]);
    const prepaymentTypes = ref([]);
    const contractors = ref([]);
    const loading = ref(true);
    const error = ref(null);
    const isDialogOpen = ref(false);
    const newPrepayment = ref({
      prepayment_type: "",
      unit: "m3",
      total_volume: 0,
      remaining_volume: 0,
      price_per_unit: 0,
      total_price: 0,
      contractor: 0,
      contractor_name: ""
    });
    const getPrepaymetTypes = async () => {
      const { data: prepaymentTypesData } = await $useApi.get("/prepayment-types/");
      prepaymentTypes.value = prepaymentTypesData;
      return;
    };
    const getContractors = async () => {
      const { data: contractorsData } = await $useApi.get("/contractors/");
      contractors.value = contractorsData;
    };
    const createPrepayment = async () => {
      try {
        const { data: createdPrepayment } = await $useApi.post("/prepayments/", newPrepayment.value);
        prepayments.value.push(createdPrepayment);
        isDialogOpen.value = false;
        newPrepayment.value = {
          prepayment_type: "",
          unit: "m3",
          total_volume: 0,
          remaining_volume: 0,
          price_per_unit: 0,
          total_price: 0,
          contractor: 0,
          contractor_name: ""
        };
      } catch (err) {
        console.error("\u041E\u0448\u0438\u0431\u043A\u0430 \u0441\u043E\u0437\u0434\u0430\u043D\u0438\u044F \u0430\u0432\u0430\u043D\u0441\u043E\u0432\u043E\u0433\u043E \u043F\u043B\u0430\u0442\u0435\u0436\u0430:", err);
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
      const _component_MyComboboxModels = _sfc_main$2;
      const _component_MyCombobox = _sfc_main$3;
      const _component_UiSelect = _sfc_main$6;
      const _component_UiSelectTrigger = _sfc_main$1$2;
      const _component_UiSelectValue = _sfc_main$4;
      const _component_UiSelectContent = _sfc_main$5;
      const _component_UiSelectItem = _sfc_main$4$1;
      const _component_UiInput = _sfc_main$a;
      const _component_UiDialogFooter = _sfc_main$a$1;
      const _component_UiTable = _sfc_main$6$1;
      const _component_UiTableCaption = _sfc_main$4$2;
      const _component_UiTableHeader = _sfc_main$e;
      const _component_UiTableRow = _sfc_main$2$1;
      const _component_UiTableHead = _sfc_main$1$3;
      const _component_UiTableBody = _sfc_main$5$1;
      const _component_UiTableCell = _sfc_main$3$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "p-6" }, _attrs))}><h1 class="text-2xl font-bold mb-4">\u041F\u0440\u0435\u0434\u043E\u043F\u043B\u0430\u0442\u044B</h1><div class="flex gap-2 mb-4">`);
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
                    onClick: async () => {
                      await getPrepaymetTypes();
                      await getContractors();
                      isDialogOpen.value = true;
                    },
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
                      onClick: async () => {
                        await getPrepaymetTypes();
                        await getContractors();
                        isDialogOpen.value = true;
                      },
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
                              _push5(`\u0421\u043E\u0437\u0434\u0430\u0442\u044C \u043F\u0440\u0435\u0434\u043E\u043F\u043B\u0430\u0442\u0443`);
                            } else {
                              return [
                                createTextVNode("\u0421\u043E\u0437\u0434\u0430\u0442\u044C \u043F\u0440\u0435\u0434\u043E\u043F\u043B\u0430\u0442\u0443")
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
                              createTextVNode("\u0421\u043E\u0437\u0434\u0430\u0442\u044C \u043F\u0440\u0435\u0434\u043E\u043F\u043B\u0430\u0442\u0443")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_UiDialogDescription)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`<div class="flex flex-col gap-3"${_scopeId2}><div class="flex flex-col gap-2"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_UiLabel, { for: "contractor" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`\u041A\u043E\u043D\u0442\u0440\u0430\u0433\u0435\u043D\u0442`);
                      } else {
                        return [
                          createTextVNode("\u041A\u043E\u043D\u0442\u0440\u0430\u0433\u0435\u043D\u0442")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_MyComboboxModels, {
                    items: unref(contractors).map((contractor) => ({ value: contractor.id, label: contractor.name })),
                    label: "\u0412\u044B\u0431\u0440\u0430\u0442\u044C",
                    onSelectedItem: (value) => unref(newPrepayment).contractor = value
                  }, null, _parent3, _scopeId2));
                  _push3(`</div><div${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_UiLabel, { for: "prepayment_type" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`\u0422\u0438\u043F \u043F\u0440\u0435\u0434\u043E\u043F\u043B\u0430\u0442\u044B`);
                      } else {
                        return [
                          createTextVNode("\u0422\u0438\u043F \u043F\u0440\u0435\u0434\u043E\u043F\u043B\u0430\u0442\u044B")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_MyCombobox, {
                    class: "mt-2",
                    items: unref(prepaymentTypes).map((type) => type.name),
                    label: "\u0422\u0438\u043F \u0430\u0432\u0430\u043D\u0441\u0430",
                    onSelectedItem: (value) => unref(newPrepayment).prepayment_type = value
                  }, null, _parent3, _scopeId2));
                  _push3(`</div><div${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_UiLabel, { for: "unit" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`\u0415\u0434\u0438\u043D\u0438\u0446\u0430 \u0438\u0437\u043C\u0435\u0440\u0435\u043D\u0438\u044F`);
                      } else {
                        return [
                          createTextVNode("\u0415\u0434\u0438\u043D\u0438\u0446\u0430 \u0438\u0437\u043C\u0435\u0440\u0435\u043D\u0438\u044F")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_UiSelect, {
                    modelValue: unref(newPrepayment).unit,
                    "onUpdate:modelValue": ($event) => unref(newPrepayment).unit = $event
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_UiSelectTrigger, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_UiSelectValue, { placeholder: "\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u0435\u0434\u0438\u043D\u0438\u0446\u0443" }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_UiSelectValue, { placeholder: "\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u0435\u0434\u0438\u043D\u0438\u0446\u0443" })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_UiSelectContent, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_UiSelectItem, { value: "m3" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`\u043C\xB3`);
                                  } else {
                                    return [
                                      createTextVNode("\u043C\xB3")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_UiSelectItem, { value: "ton" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`\u0422\u043E\u043D\u043D\u044B`);
                                  } else {
                                    return [
                                      createTextVNode("\u0422\u043E\u043D\u043D\u044B")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_UiSelectItem, { value: "m3" }, {
                                  default: withCtx(() => [
                                    createTextVNode("\u043C\xB3")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_UiSelectItem, { value: "ton" }, {
                                  default: withCtx(() => [
                                    createTextVNode("\u0422\u043E\u043D\u043D\u044B")
                                  ]),
                                  _: 1
                                })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_UiSelectTrigger, null, {
                            default: withCtx(() => [
                              createVNode(_component_UiSelectValue, { placeholder: "\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u0435\u0434\u0438\u043D\u0438\u0446\u0443" })
                            ]),
                            _: 1
                          }),
                          createVNode(_component_UiSelectContent, null, {
                            default: withCtx(() => [
                              createVNode(_component_UiSelectItem, { value: "m3" }, {
                                default: withCtx(() => [
                                  createTextVNode("\u043C\xB3")
                                ]),
                                _: 1
                              }),
                              createVNode(_component_UiSelectItem, { value: "ton" }, {
                                default: withCtx(() => [
                                  createTextVNode("\u0422\u043E\u043D\u043D\u044B")
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
                  }, _parent3, _scopeId2));
                  _push3(`</div><div${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_UiLabel, { for: "total_volume" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`\u041E\u0431\u044A\u0435\u043C`);
                      } else {
                        return [
                          createTextVNode("\u041E\u0431\u044A\u0435\u043C")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_UiInput, {
                    class: "mt-2",
                    id: "total_volume",
                    type: "number",
                    modelValue: unref(newPrepayment).total_volume,
                    "onUpdate:modelValue": ($event) => unref(newPrepayment).total_volume = $event,
                    placeholder: "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043E\u0431\u044A\u0435\u043C"
                  }, null, _parent3, _scopeId2));
                  _push3(`</div><div${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_UiLabel, { for: "remaining_volume" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`\u041E\u0441\u0442\u0430\u0432\u0448\u0438\u0439\u0441\u044F \u043E\u0431\u044A\u0435\u043C`);
                      } else {
                        return [
                          createTextVNode("\u041E\u0441\u0442\u0430\u0432\u0448\u0438\u0439\u0441\u044F \u043E\u0431\u044A\u0435\u043C")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_UiInput, {
                    class: "mt-2",
                    id: "remaining_volume",
                    type: "number",
                    modelValue: unref(newPrepayment).remaining_volume,
                    "onUpdate:modelValue": ($event) => unref(newPrepayment).remaining_volume = $event,
                    placeholder: "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043E\u0441\u0442\u0430\u0432\u0448\u0438\u0439\u0441\u044F \u043E\u0431\u044A\u0435\u043C"
                  }, null, _parent3, _scopeId2));
                  _push3(`</div><div${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_UiLabel, { for: "price_per_unit" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`\u0426\u0435\u043D\u0430 \u0437\u0430 \u0435\u0434\u0438\u043D\u0438\u0446\u0443`);
                      } else {
                        return [
                          createTextVNode("\u0426\u0435\u043D\u0430 \u0437\u0430 \u0435\u0434\u0438\u043D\u0438\u0446\u0443")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_UiInput, {
                    class: "mt-2",
                    id: "price_per_unit",
                    type: "number",
                    modelValue: unref(newPrepayment).price_per_unit,
                    "onUpdate:modelValue": ($event) => unref(newPrepayment).price_per_unit = $event,
                    placeholder: "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0446\u0435\u043D\u0443 \u0437\u0430 \u0435\u0434\u0438\u043D\u0438\u0446\u0443"
                  }, null, _parent3, _scopeId2));
                  _push3(`</div><div${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_UiLabel, { for: "total_price" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`\u0421\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C`);
                      } else {
                        return [
                          createTextVNode("\u0421\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_UiInput, {
                    class: "mt-2",
                    id: "total_price",
                    type: "number",
                    modelValue: unref(newPrepayment).total_price,
                    "onUpdate:modelValue": ($event) => unref(newPrepayment).total_price = $event,
                    placeholder: "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043E\u0431\u0449\u0443\u044E \u0441\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C"
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
                        _push4(ssrRenderComponent(_component_UiButton, { onClick: createPrepayment }, {
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
                            createVNode(_component_UiButton, { onClick: createPrepayment }, {
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
                            createTextVNode("\u0421\u043E\u0437\u0434\u0430\u0442\u044C \u043F\u0440\u0435\u0434\u043E\u043F\u043B\u0430\u0442\u0443")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_UiDialogDescription)
                      ]),
                      _: 1
                    }),
                    createVNode("div", { class: "flex flex-col gap-3" }, [
                      createVNode("div", { class: "flex flex-col gap-2" }, [
                        createVNode(_component_UiLabel, { for: "contractor" }, {
                          default: withCtx(() => [
                            createTextVNode("\u041A\u043E\u043D\u0442\u0440\u0430\u0433\u0435\u043D\u0442")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_MyComboboxModels, {
                          items: unref(contractors).map((contractor) => ({ value: contractor.id, label: contractor.name })),
                          label: "\u0412\u044B\u0431\u0440\u0430\u0442\u044C",
                          onSelectedItem: (value) => unref(newPrepayment).contractor = value
                        }, null, 8, ["items", "onSelectedItem"])
                      ]),
                      createVNode("div", null, [
                        createVNode(_component_UiLabel, { for: "prepayment_type" }, {
                          default: withCtx(() => [
                            createTextVNode("\u0422\u0438\u043F \u043F\u0440\u0435\u0434\u043E\u043F\u043B\u0430\u0442\u044B")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_MyCombobox, {
                          class: "mt-2",
                          items: unref(prepaymentTypes).map((type) => type.name),
                          label: "\u0422\u0438\u043F \u0430\u0432\u0430\u043D\u0441\u0430",
                          onSelectedItem: (value) => unref(newPrepayment).prepayment_type = value
                        }, null, 8, ["items", "onSelectedItem"])
                      ]),
                      createVNode("div", null, [
                        createVNode(_component_UiLabel, { for: "unit" }, {
                          default: withCtx(() => [
                            createTextVNode("\u0415\u0434\u0438\u043D\u0438\u0446\u0430 \u0438\u0437\u043C\u0435\u0440\u0435\u043D\u0438\u044F")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_UiSelect, {
                          modelValue: unref(newPrepayment).unit,
                          "onUpdate:modelValue": ($event) => unref(newPrepayment).unit = $event
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_UiSelectTrigger, null, {
                              default: withCtx(() => [
                                createVNode(_component_UiSelectValue, { placeholder: "\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u0435\u0434\u0438\u043D\u0438\u0446\u0443" })
                              ]),
                              _: 1
                            }),
                            createVNode(_component_UiSelectContent, null, {
                              default: withCtx(() => [
                                createVNode(_component_UiSelectItem, { value: "m3" }, {
                                  default: withCtx(() => [
                                    createTextVNode("\u043C\xB3")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_UiSelectItem, { value: "ton" }, {
                                  default: withCtx(() => [
                                    createTextVNode("\u0422\u043E\u043D\u043D\u044B")
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      createVNode("div", null, [
                        createVNode(_component_UiLabel, { for: "total_volume" }, {
                          default: withCtx(() => [
                            createTextVNode("\u041E\u0431\u044A\u0435\u043C")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_UiInput, {
                          class: "mt-2",
                          id: "total_volume",
                          type: "number",
                          modelValue: unref(newPrepayment).total_volume,
                          "onUpdate:modelValue": ($event) => unref(newPrepayment).total_volume = $event,
                          placeholder: "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043E\u0431\u044A\u0435\u043C"
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      createVNode("div", null, [
                        createVNode(_component_UiLabel, { for: "remaining_volume" }, {
                          default: withCtx(() => [
                            createTextVNode("\u041E\u0441\u0442\u0430\u0432\u0448\u0438\u0439\u0441\u044F \u043E\u0431\u044A\u0435\u043C")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_UiInput, {
                          class: "mt-2",
                          id: "remaining_volume",
                          type: "number",
                          modelValue: unref(newPrepayment).remaining_volume,
                          "onUpdate:modelValue": ($event) => unref(newPrepayment).remaining_volume = $event,
                          placeholder: "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043E\u0441\u0442\u0430\u0432\u0448\u0438\u0439\u0441\u044F \u043E\u0431\u044A\u0435\u043C"
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      createVNode("div", null, [
                        createVNode(_component_UiLabel, { for: "price_per_unit" }, {
                          default: withCtx(() => [
                            createTextVNode("\u0426\u0435\u043D\u0430 \u0437\u0430 \u0435\u0434\u0438\u043D\u0438\u0446\u0443")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_UiInput, {
                          class: "mt-2",
                          id: "price_per_unit",
                          type: "number",
                          modelValue: unref(newPrepayment).price_per_unit,
                          "onUpdate:modelValue": ($event) => unref(newPrepayment).price_per_unit = $event,
                          placeholder: "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0446\u0435\u043D\u0443 \u0437\u0430 \u0435\u0434\u0438\u043D\u0438\u0446\u0443"
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      createVNode("div", null, [
                        createVNode(_component_UiLabel, { for: "total_price" }, {
                          default: withCtx(() => [
                            createTextVNode("\u0421\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_UiInput, {
                          class: "mt-2",
                          id: "total_price",
                          type: "number",
                          modelValue: unref(newPrepayment).total_price,
                          "onUpdate:modelValue": ($event) => unref(newPrepayment).total_price = $event,
                          placeholder: "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043E\u0431\u0449\u0443\u044E \u0441\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C"
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
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
                          createVNode(_component_UiButton, { onClick: createPrepayment }, {
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
                    onClick: async () => {
                      await getPrepaymetTypes();
                      await getContractors();
                      isDialogOpen.value = true;
                    },
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
                          createTextVNode("\u0421\u043E\u0437\u0434\u0430\u0442\u044C \u043F\u0440\u0435\u0434\u043E\u043F\u043B\u0430\u0442\u0443")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_UiDialogDescription)
                    ]),
                    _: 1
                  }),
                  createVNode("div", { class: "flex flex-col gap-3" }, [
                    createVNode("div", { class: "flex flex-col gap-2" }, [
                      createVNode(_component_UiLabel, { for: "contractor" }, {
                        default: withCtx(() => [
                          createTextVNode("\u041A\u043E\u043D\u0442\u0440\u0430\u0433\u0435\u043D\u0442")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_MyComboboxModels, {
                        items: unref(contractors).map((contractor) => ({ value: contractor.id, label: contractor.name })),
                        label: "\u0412\u044B\u0431\u0440\u0430\u0442\u044C",
                        onSelectedItem: (value) => unref(newPrepayment).contractor = value
                      }, null, 8, ["items", "onSelectedItem"])
                    ]),
                    createVNode("div", null, [
                      createVNode(_component_UiLabel, { for: "prepayment_type" }, {
                        default: withCtx(() => [
                          createTextVNode("\u0422\u0438\u043F \u043F\u0440\u0435\u0434\u043E\u043F\u043B\u0430\u0442\u044B")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_MyCombobox, {
                        class: "mt-2",
                        items: unref(prepaymentTypes).map((type) => type.name),
                        label: "\u0422\u0438\u043F \u0430\u0432\u0430\u043D\u0441\u0430",
                        onSelectedItem: (value) => unref(newPrepayment).prepayment_type = value
                      }, null, 8, ["items", "onSelectedItem"])
                    ]),
                    createVNode("div", null, [
                      createVNode(_component_UiLabel, { for: "unit" }, {
                        default: withCtx(() => [
                          createTextVNode("\u0415\u0434\u0438\u043D\u0438\u0446\u0430 \u0438\u0437\u043C\u0435\u0440\u0435\u043D\u0438\u044F")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_UiSelect, {
                        modelValue: unref(newPrepayment).unit,
                        "onUpdate:modelValue": ($event) => unref(newPrepayment).unit = $event
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_UiSelectTrigger, null, {
                            default: withCtx(() => [
                              createVNode(_component_UiSelectValue, { placeholder: "\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u0435\u0434\u0438\u043D\u0438\u0446\u0443" })
                            ]),
                            _: 1
                          }),
                          createVNode(_component_UiSelectContent, null, {
                            default: withCtx(() => [
                              createVNode(_component_UiSelectItem, { value: "m3" }, {
                                default: withCtx(() => [
                                  createTextVNode("\u043C\xB3")
                                ]),
                                _: 1
                              }),
                              createVNode(_component_UiSelectItem, { value: "ton" }, {
                                default: withCtx(() => [
                                  createTextVNode("\u0422\u043E\u043D\u043D\u044B")
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    createVNode("div", null, [
                      createVNode(_component_UiLabel, { for: "total_volume" }, {
                        default: withCtx(() => [
                          createTextVNode("\u041E\u0431\u044A\u0435\u043C")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_UiInput, {
                        class: "mt-2",
                        id: "total_volume",
                        type: "number",
                        modelValue: unref(newPrepayment).total_volume,
                        "onUpdate:modelValue": ($event) => unref(newPrepayment).total_volume = $event,
                        placeholder: "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043E\u0431\u044A\u0435\u043C"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    createVNode("div", null, [
                      createVNode(_component_UiLabel, { for: "remaining_volume" }, {
                        default: withCtx(() => [
                          createTextVNode("\u041E\u0441\u0442\u0430\u0432\u0448\u0438\u0439\u0441\u044F \u043E\u0431\u044A\u0435\u043C")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_UiInput, {
                        class: "mt-2",
                        id: "remaining_volume",
                        type: "number",
                        modelValue: unref(newPrepayment).remaining_volume,
                        "onUpdate:modelValue": ($event) => unref(newPrepayment).remaining_volume = $event,
                        placeholder: "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043E\u0441\u0442\u0430\u0432\u0448\u0438\u0439\u0441\u044F \u043E\u0431\u044A\u0435\u043C"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    createVNode("div", null, [
                      createVNode(_component_UiLabel, { for: "price_per_unit" }, {
                        default: withCtx(() => [
                          createTextVNode("\u0426\u0435\u043D\u0430 \u0437\u0430 \u0435\u0434\u0438\u043D\u0438\u0446\u0443")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_UiInput, {
                        class: "mt-2",
                        id: "price_per_unit",
                        type: "number",
                        modelValue: unref(newPrepayment).price_per_unit,
                        "onUpdate:modelValue": ($event) => unref(newPrepayment).price_per_unit = $event,
                        placeholder: "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0446\u0435\u043D\u0443 \u0437\u0430 \u0435\u0434\u0438\u043D\u0438\u0446\u0443"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    createVNode("div", null, [
                      createVNode(_component_UiLabel, { for: "total_price" }, {
                        default: withCtx(() => [
                          createTextVNode("\u0421\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_UiInput, {
                        class: "mt-2",
                        id: "total_price",
                        type: "number",
                        modelValue: unref(newPrepayment).total_price,
                        "onUpdate:modelValue": ($event) => unref(newPrepayment).total_price = $event,
                        placeholder: "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043E\u0431\u0449\u0443\u044E \u0441\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
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
                        createVNode(_component_UiButton, { onClick: createPrepayment }, {
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
                    _push3(`\u0421\u043F\u0438\u0441\u043E\u043A \u043F\u0440\u0435\u0434\u043E\u043F\u043B\u0430\u0442.`);
                  } else {
                    return [
                      createTextVNode("\u0421\u043F\u0438\u0441\u043E\u043A \u043F\u0440\u0435\u0434\u043E\u043F\u043B\u0430\u0442.")
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
                                _push5(`\u0422\u0438\u043F`);
                              } else {
                                return [
                                  createTextVNode("\u0422\u0438\u043F")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                          _push4(ssrRenderComponent(_component_UiTableHead, null, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`\u041A\u043E\u043D\u0442\u0440\u0430\u0433\u0435\u043D\u0442`);
                              } else {
                                return [
                                  createTextVNode("\u041A\u043E\u043D\u0442\u0440\u0430\u0433\u0435\u043D\u0442")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                          _push4(ssrRenderComponent(_component_UiTableHead, null, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`\u041E\u0431\u044A\u0435\u043C \u043E\u0431\u0449\u0438\u0439`);
                              } else {
                                return [
                                  createTextVNode("\u041E\u0431\u044A\u0435\u043C \u043E\u0431\u0449\u0438\u0439")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                          _push4(ssrRenderComponent(_component_UiTableHead, null, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`\u041E\u0431\u044A\u0435\u043C`);
                              } else {
                                return [
                                  createTextVNode("\u041E\u0431\u044A\u0435\u043C")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                          _push4(ssrRenderComponent(_component_UiTableHead, null, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`\u0426\u0435\u043D\u0430 \u0437\u0430 \u0435\u0434.`);
                              } else {
                                return [
                                  createTextVNode("\u0426\u0435\u043D\u0430 \u0437\u0430 \u0435\u0434.")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                          _push4(ssrRenderComponent(_component_UiTableHead, null, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`\u0421\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C`);
                              } else {
                                return [
                                  createTextVNode("\u0421\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(_component_UiTableHead, null, {
                              default: withCtx(() => [
                                createTextVNode("\u0422\u0438\u043F")
                              ]),
                              _: 1
                            }),
                            createVNode(_component_UiTableHead, null, {
                              default: withCtx(() => [
                                createTextVNode("\u041A\u043E\u043D\u0442\u0440\u0430\u0433\u0435\u043D\u0442")
                              ]),
                              _: 1
                            }),
                            createVNode(_component_UiTableHead, null, {
                              default: withCtx(() => [
                                createTextVNode("\u041E\u0431\u044A\u0435\u043C \u043E\u0431\u0449\u0438\u0439")
                              ]),
                              _: 1
                            }),
                            createVNode(_component_UiTableHead, null, {
                              default: withCtx(() => [
                                createTextVNode("\u041E\u0431\u044A\u0435\u043C")
                              ]),
                              _: 1
                            }),
                            createVNode(_component_UiTableHead, null, {
                              default: withCtx(() => [
                                createTextVNode("\u0426\u0435\u043D\u0430 \u0437\u0430 \u0435\u0434.")
                              ]),
                              _: 1
                            }),
                            createVNode(_component_UiTableHead, null, {
                              default: withCtx(() => [
                                createTextVNode("\u0421\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C")
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
                              createTextVNode("\u0422\u0438\u043F")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_UiTableHead, null, {
                            default: withCtx(() => [
                              createTextVNode("\u041A\u043E\u043D\u0442\u0440\u0430\u0433\u0435\u043D\u0442")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_UiTableHead, null, {
                            default: withCtx(() => [
                              createTextVNode("\u041E\u0431\u044A\u0435\u043C \u043E\u0431\u0449\u0438\u0439")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_UiTableHead, null, {
                            default: withCtx(() => [
                              createTextVNode("\u041E\u0431\u044A\u0435\u043C")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_UiTableHead, null, {
                            default: withCtx(() => [
                              createTextVNode("\u0426\u0435\u043D\u0430 \u0437\u0430 \u0435\u0434.")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_UiTableHead, null, {
                            default: withCtx(() => [
                              createTextVNode("\u0421\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C")
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
                    ssrRenderList(unref(prepayments), (prepayment) => {
                      _push3(ssrRenderComponent(_component_UiTableRow, {
                        key: prepayment.id,
                        onClick: ($event) => unref(router).push(`/prepayments/${prepayment.id}`),
                        class: "cursor-pointer hover:bg-gray-100"
                      }, {
                        default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(ssrRenderComponent(_component_UiTableCell, null, {
                              default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  _push5(`${ssrInterpolate(prepayment.prepayment_type)}`);
                                } else {
                                  return [
                                    createTextVNode(toDisplayString(prepayment.prepayment_type), 1)
                                  ];
                                }
                              }),
                              _: 2
                            }, _parent4, _scopeId3));
                            _push4(ssrRenderComponent(_component_UiTableCell, null, {
                              default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  _push5(`${ssrInterpolate(prepayment.contractor_name)}`);
                                } else {
                                  return [
                                    createTextVNode(toDisplayString(prepayment.contractor_name), 1)
                                  ];
                                }
                              }),
                              _: 2
                            }, _parent4, _scopeId3));
                            _push4(ssrRenderComponent(_component_UiTableCell, null, {
                              default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  _push5(`${ssrInterpolate(prepayment.total_volume)}`);
                                } else {
                                  return [
                                    createTextVNode(toDisplayString(prepayment.total_volume), 1)
                                  ];
                                }
                              }),
                              _: 2
                            }, _parent4, _scopeId3));
                            _push4(ssrRenderComponent(_component_UiTableCell, null, {
                              default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  _push5(`${ssrInterpolate(prepayment.remaining_volume)}`);
                                } else {
                                  return [
                                    createTextVNode(toDisplayString(prepayment.remaining_volume), 1)
                                  ];
                                }
                              }),
                              _: 2
                            }, _parent4, _scopeId3));
                            _push4(ssrRenderComponent(_component_UiTableCell, null, {
                              default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  _push5(`${ssrInterpolate(prepayment.price_per_unit)}`);
                                } else {
                                  return [
                                    createTextVNode(toDisplayString(prepayment.price_per_unit), 1)
                                  ];
                                }
                              }),
                              _: 2
                            }, _parent4, _scopeId3));
                            _push4(ssrRenderComponent(_component_UiTableCell, null, {
                              default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  _push5(`${ssrInterpolate(prepayment.total_price)}`);
                                } else {
                                  return [
                                    createTextVNode(toDisplayString(prepayment.total_price), 1)
                                  ];
                                }
                              }),
                              _: 2
                            }, _parent4, _scopeId3));
                          } else {
                            return [
                              createVNode(_component_UiTableCell, null, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(prepayment.prepayment_type), 1)
                                ]),
                                _: 2
                              }, 1024),
                              createVNode(_component_UiTableCell, null, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(prepayment.contractor_name), 1)
                                ]),
                                _: 2
                              }, 1024),
                              createVNode(_component_UiTableCell, null, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(prepayment.total_volume), 1)
                                ]),
                                _: 2
                              }, 1024),
                              createVNode(_component_UiTableCell, null, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(prepayment.remaining_volume), 1)
                                ]),
                                _: 2
                              }, 1024),
                              createVNode(_component_UiTableCell, null, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(prepayment.price_per_unit), 1)
                                ]),
                                _: 2
                              }, 1024),
                              createVNode(_component_UiTableCell, null, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(prepayment.total_price), 1)
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
                      (openBlock(true), createBlock(Fragment, null, renderList(unref(prepayments), (prepayment) => {
                        return openBlock(), createBlock(_component_UiTableRow, {
                          key: prepayment.id,
                          onClick: ($event) => unref(router).push(`/prepayments/${prepayment.id}`),
                          class: "cursor-pointer hover:bg-gray-100"
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_UiTableCell, null, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(prepayment.prepayment_type), 1)
                              ]),
                              _: 2
                            }, 1024),
                            createVNode(_component_UiTableCell, null, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(prepayment.contractor_name), 1)
                              ]),
                              _: 2
                            }, 1024),
                            createVNode(_component_UiTableCell, null, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(prepayment.total_volume), 1)
                              ]),
                              _: 2
                            }, 1024),
                            createVNode(_component_UiTableCell, null, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(prepayment.remaining_volume), 1)
                              ]),
                              _: 2
                            }, 1024),
                            createVNode(_component_UiTableCell, null, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(prepayment.price_per_unit), 1)
                              ]),
                              _: 2
                            }, 1024),
                            createVNode(_component_UiTableCell, null, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(prepayment.total_price), 1)
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
                    createTextVNode("\u0421\u043F\u0438\u0441\u043E\u043A \u043F\u0440\u0435\u0434\u043E\u043F\u043B\u0430\u0442.")
                  ]),
                  _: 1
                }),
                createVNode(_component_UiTableHeader, { class: "bg-slate-100" }, {
                  default: withCtx(() => [
                    createVNode(_component_UiTableRow, null, {
                      default: withCtx(() => [
                        createVNode(_component_UiTableHead, null, {
                          default: withCtx(() => [
                            createTextVNode("\u0422\u0438\u043F")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_UiTableHead, null, {
                          default: withCtx(() => [
                            createTextVNode("\u041A\u043E\u043D\u0442\u0440\u0430\u0433\u0435\u043D\u0442")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_UiTableHead, null, {
                          default: withCtx(() => [
                            createTextVNode("\u041E\u0431\u044A\u0435\u043C \u043E\u0431\u0449\u0438\u0439")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_UiTableHead, null, {
                          default: withCtx(() => [
                            createTextVNode("\u041E\u0431\u044A\u0435\u043C")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_UiTableHead, null, {
                          default: withCtx(() => [
                            createTextVNode("\u0426\u0435\u043D\u0430 \u0437\u0430 \u0435\u0434.")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_UiTableHead, null, {
                          default: withCtx(() => [
                            createTextVNode("\u0421\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C")
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
                    (openBlock(true), createBlock(Fragment, null, renderList(unref(prepayments), (prepayment) => {
                      return openBlock(), createBlock(_component_UiTableRow, {
                        key: prepayment.id,
                        onClick: ($event) => unref(router).push(`/prepayments/${prepayment.id}`),
                        class: "cursor-pointer hover:bg-gray-100"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_UiTableCell, null, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(prepayment.prepayment_type), 1)
                            ]),
                            _: 2
                          }, 1024),
                          createVNode(_component_UiTableCell, null, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(prepayment.contractor_name), 1)
                            ]),
                            _: 2
                          }, 1024),
                          createVNode(_component_UiTableCell, null, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(prepayment.total_volume), 1)
                            ]),
                            _: 2
                          }, 1024),
                          createVNode(_component_UiTableCell, null, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(prepayment.remaining_volume), 1)
                            ]),
                            _: 2
                          }, 1024),
                          createVNode(_component_UiTableCell, null, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(prepayment.price_per_unit), 1)
                            ]),
                            _: 2
                          }, 1024),
                          createVNode(_component_UiTableCell, null, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(prepayment.total_price), 1)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/prepayments/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined;
};

export { _sfc_main as default };
//# sourceMappingURL=index-BYCb7Eff.mjs.map
