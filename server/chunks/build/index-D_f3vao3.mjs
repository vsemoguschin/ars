import { _ as _sfc_main$3 } from './index-BB7KKil7.mjs';
import { _ as _sfc_main$d, a as _sfc_main$7, b as _sfc_main$c, c as _sfc_main$9, d as _sfc_main$8, e as _sfc_main$b, f as _sfc_main$a, g as _sfc_main$6$2, h as _sfc_main$4$2, i as _sfc_main$f, j as _sfc_main$2$1, k as _sfc_main$1$3, l as _sfc_main$5$2, m as _sfc_main$3$1 } from './TableHeader-Dh09Z8PQ.mjs';
import { _ as _sfc_main$1$1, a as _sfc_main$5 } from './Input-BHo_TP6t.mjs';
import { _ as _sfc_main$4 } from './Combobox-DOwrg-P2.mjs';
import { _ as _sfc_main$6 } from './ComboboxModels-D6B6rKrJ.mjs';
import { _ as _sfc_main$6$1, a as _sfc_main$1$2, b as _sfc_main$e, c as _sfc_main$5$1, d as _sfc_main$4$1 } from './SelectValue-D5HYJzCo.mjs';
import { useSSRContext, defineComponent, ref, mergeProps, unref, withCtx, createTextVNode, isRef, createVNode, toDisplayString, openBlock, createBlock, Fragment, renderList } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderList } from 'vue/server-renderer';
import { u as useRouter, d as useHead } from './server.mjs';
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

const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "CreateForm",
  __ssrInlineRender: true,
  emits: ["order-created"],
  setup(__props, { emit: __emit }) {
    const orderTypes = ref([]);
    const contractors = ref([]);
    const clientAddresses = ref([]);
    const vehicleTypes = ref([]);
    ref([]);
    const orderBlank = {
      order_type: "",
      order_date: "",
      client: 0,
      client_address: 0,
      supplier: 0,
      vehicle_type: "",
      unit: "ton",
      material_volume: 0
    };
    const newOrder = ref({ ...orderBlank });
    const fetchAddresses = async (contractorId) => {
      try {
        const response = await fetch(`https://faunaplus24.ru/api/contractor-addresses/?contractor=${contractorId}`);
        if (!response.ok) throw new Error(`HTTP Error: ${response.status}`);
        clientAddresses.value = await response.json();
        console.log("addresses", contractorId, clientAddresses.value);
      } catch (err) {
        console.error("\u041E\u0448\u0438\u0431\u043A\u0430 \u0437\u0430\u0433\u0440\u0443\u0437\u043A\u0438 \u0430\u0434\u0440\u0435\u0441\u043E\u0432 \u043A\u043B\u0438\u0435\u043D\u0442\u0430:", err);
      }
    };
    const emit = __emit;
    const createOrder = async () => {
      try {
        const response = await fetch("https://faunaplus24.ru/api/orders/", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(newOrder.value)
        });
        if (!response.ok) throw new Error(`HTTP Error: ${response.status}`);
        emit("order-created");
        newOrder.value = { ...orderBlank };
      } catch (err) {
        console.error("\u041E\u0448\u0438\u0431\u043A\u0430 \u0441\u043E\u0437\u0434\u0430\u043D\u0438\u044F \u0437\u0430\u043A\u0430\u0437\u0430:", err);
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UiLabel = _sfc_main$1$1;
      const _component_MyCombobox = _sfc_main$4;
      const _component_UiInput = _sfc_main$5;
      const _component_MyComboboxModels = _sfc_main$6;
      const _component_UiSelect = _sfc_main$6$1;
      const _component_UiSelectTrigger = _sfc_main$1$2;
      const _component_UiSelectValue = _sfc_main$e;
      const _component_UiSelectContent = _sfc_main$5$1;
      const _component_UiSelectItem = _sfc_main$4$1;
      const _component_UiButton = _sfc_main$3;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-col gap-3" }, _attrs))}><div>`);
      _push(ssrRenderComponent(_component_UiLabel, { for: "order_type" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`\u0422\u0438\u043F \u0437\u0430\u043A\u0430\u0437\u0430`);
          } else {
            return [
              createTextVNode("\u0422\u0438\u043F \u0437\u0430\u043A\u0430\u0437\u0430")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_MyCombobox, {
        class: "mt-2",
        items: unref(orderTypes).map((type) => type.name),
        label: "\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u0442\u0438\u043F \u0437\u0430\u043A\u0430\u0437\u0430",
        onSelectedItem: (value) => unref(newOrder).order_type = value
      }, null, _parent));
      _push(`</div><div>`);
      _push(ssrRenderComponent(_component_UiLabel, { for: "order_date" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`\u0414\u0430\u0442\u0430 \u0437\u0430\u043A\u0430\u0437\u0430`);
          } else {
            return [
              createTextVNode("\u0414\u0430\u0442\u0430 \u0437\u0430\u043A\u0430\u0437\u0430")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_UiInput, {
        class: "mt-2",
        id: "order_date",
        type: "date",
        modelValue: unref(newOrder).order_date,
        "onUpdate:modelValue": ($event) => unref(newOrder).order_date = $event
      }, null, _parent));
      _push(`</div><div class="flex flex-col gap-2">`);
      _push(ssrRenderComponent(_component_UiLabel, { for: "client" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`\u041A\u043B\u0438\u0435\u043D\u0442`);
          } else {
            return [
              createTextVNode("\u041A\u043B\u0438\u0435\u043D\u0442")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_MyComboboxModels, {
        items: unref(contractors).map((contractor) => ({ value: contractor.id, label: contractor.name })),
        label: "\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u043A\u043B\u0438\u0435\u043D\u0442\u0430",
        onSelectedItem: async (value) => {
          unref(newOrder).client = value;
          await fetchAddresses(unref(newOrder).client);
        }
      }, null, _parent));
      _push(`</div><div class="flex flex-col gap-2">`);
      _push(ssrRenderComponent(_component_UiLabel, { for: "client_address" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`\u0410\u0434\u0440\u0435\u0441 \u043A\u043B\u0438\u0435\u043D\u0442\u0430`);
          } else {
            return [
              createTextVNode("\u0410\u0434\u0440\u0435\u0441 \u043A\u043B\u0438\u0435\u043D\u0442\u0430")
            ];
          }
        }),
        _: 1
      }, _parent));
      if (unref(newOrder).client !== 0) {
        _push(ssrRenderComponent(_component_MyComboboxModels, {
          items: unref(clientAddresses).map((address) => ({ value: address.id, label: address.address })),
          label: "\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u0430\u0434\u0440\u0435\u0441 \u043A\u043B\u0438\u0435\u043D\u0442\u0430",
          onSelectedItem: (value) => unref(newOrder).client_address = value
        }, null, _parent));
      } else {
        _push(ssrRenderComponent(_component_UiInput, {
          class: "mt-2",
          placeholder: "\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u0430\u0434\u0440\u0435\u0441 \u043A\u043B\u0438\u0435\u043D\u0442\u0430",
          disabled: ""
        }, null, _parent));
      }
      _push(`</div><div class="flex flex-col gap-2">`);
      _push(ssrRenderComponent(_component_UiLabel, { for: "supplier" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`\u041F\u043E\u0441\u0442\u0430\u0432\u0449\u0438\u043A`);
          } else {
            return [
              createTextVNode("\u041F\u043E\u0441\u0442\u0430\u0432\u0449\u0438\u043A")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_MyComboboxModels, {
        items: unref(contractors).map((contractor) => ({ value: contractor.id, label: contractor.name })),
        label: "\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u043F\u043E\u0441\u0442\u0430\u0432\u0449\u0438\u043A\u0430",
        onSelectedItem: (value) => unref(newOrder).supplier = value
      }, null, _parent));
      _push(`</div><div>`);
      _push(ssrRenderComponent(_component_UiLabel, { for: "vehicle_type" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`\u0422\u0438\u043F \u0422\u0421`);
          } else {
            return [
              createTextVNode("\u0422\u0438\u043F \u0422\u0421")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_MyCombobox, {
        class: "mt-2",
        items: unref(vehicleTypes).map((type) => type.name),
        label: "\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u0442\u0438\u043F \u0422\u0421",
        onSelectedItem: (value) => unref(newOrder).vehicle_type = value
      }, null, _parent));
      _push(`</div><div>`);
      _push(ssrRenderComponent(_component_UiLabel, { for: "unit" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`\u0415\u0434\u0438\u043D\u0438\u0446\u0430 \u0438\u0437\u043C\u0435\u0440\u0435\u043D\u0438\u044F`);
          } else {
            return [
              createTextVNode("\u0415\u0434\u0438\u043D\u0438\u0446\u0430 \u0438\u0437\u043C\u0435\u0440\u0435\u043D\u0438\u044F")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_UiSelect, {
        modelValue: unref(newOrder).unit,
        "onUpdate:modelValue": ($event) => unref(newOrder).unit = $event
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UiSelectTrigger, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UiSelectValue, { placeholder: "\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u0435\u0434\u0438\u043D\u0438\u0446\u0443" }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_UiSelectValue, { placeholder: "\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u0435\u0434\u0438\u043D\u0438\u0446\u0443" })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UiSelectContent, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UiSelectItem, { value: "m3" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`\u043C\xB3`);
                      } else {
                        return [
                          createTextVNode("\u043C\xB3")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_UiSelectItem, { value: "ton" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`\u0422\u043E\u043D\u043D\u044B`);
                      } else {
                        return [
                          createTextVNode("\u0422\u043E\u043D\u043D\u044B")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
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
            }, _parent2, _scopeId));
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
      }, _parent));
      _push(`</div><div>`);
      _push(ssrRenderComponent(_component_UiLabel, { for: "material_volume" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`\u041E\u0431\u044A\u0435\u043C \u043C\u0430\u0442\u0435\u0440\u0438\u0430\u043B\u0430`);
          } else {
            return [
              createTextVNode("\u041E\u0431\u044A\u0435\u043C \u043C\u0430\u0442\u0435\u0440\u0438\u0430\u043B\u0430")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_UiInput, {
        class: "mt-2",
        id: "material_volume",
        type: "number",
        modelValue: unref(newOrder).material_volume,
        "onUpdate:modelValue": ($event) => unref(newOrder).material_volume = $event,
        placeholder: "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043E\u0431\u044A\u0435\u043C \u043C\u0430\u0442\u0435\u0440\u0438\u0430\u043B\u0430"
      }, null, _parent));
      _push(`</div><div class="flex justify-between w-full">`);
      _push(ssrRenderComponent(_component_UiButton, { class: "mb-2" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`\u041E\u0442\u043C\u0435\u043D\u0430`);
          } else {
            return [
              createTextVNode("\u041E\u0442\u043C\u0435\u043D\u0430")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_UiButton, { onClick: createOrder }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`\u0421\u043E\u0437\u0434\u0430\u0442\u044C`);
          } else {
            return [
              createTextVNode("\u0421\u043E\u0437\u0434\u0430\u0442\u044C")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/my/orders/CreateForm.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : undefined;
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "Table",
  __ssrInlineRender: true,
  props: {
    orders: {
      type: Object,
      requared: true
    }
  },
  setup(__props) {
    const router = useRouter();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UiTable = _sfc_main$6$2;
      const _component_UiTableCaption = _sfc_main$4$2;
      const _component_UiTableHeader = _sfc_main$f;
      const _component_UiTableRow = _sfc_main$2$1;
      const _component_UiTableHead = _sfc_main$1$3;
      const _component_UiTableBody = _sfc_main$5$2;
      const _component_UiTableCell = _sfc_main$3$1;
      _push(ssrRenderComponent(_component_UiTable, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UiTableCaption, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`\u0421\u043F\u0438\u0441\u043E\u043A \u0437\u0430\u043A\u0430\u0437\u043E\u0432.`);
                } else {
                  return [
                    createTextVNode("\u0421\u043F\u0438\u0441\u043E\u043A \u0437\u0430\u043A\u0430\u0437\u043E\u0432.")
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
                              _push5(`\u0422\u0438\u043F \u0437\u0430\u043A\u0430\u0437\u0430`);
                            } else {
                              return [
                                createTextVNode("\u0422\u0438\u043F \u0437\u0430\u043A\u0430\u0437\u0430")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_UiTableHead, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`\u0414\u0430\u0442\u0430 \u0437\u0430\u043A\u0430\u0437\u0430`);
                            } else {
                              return [
                                createTextVNode("\u0414\u0430\u0442\u0430 \u0437\u0430\u043A\u0430\u0437\u0430")
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
                              _push5(`\u041F\u043E\u0434\u0440\u044F\u0434\u0447\u0438\u043A`);
                            } else {
                              return [
                                createTextVNode("\u041F\u043E\u0434\u0440\u044F\u0434\u0447\u0438\u043A")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_UiTableHead, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`\u0422\u0421`);
                            } else {
                              return [
                                createTextVNode("\u0422\u0421")
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
                              _push5(`\u0421\u0442\u0430\u0442\u0443\u0441`);
                            } else {
                              return [
                                createTextVNode("\u0421\u0442\u0430\u0442\u0443\u0441")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_UiTableHead, null, {
                            default: withCtx(() => [
                              createTextVNode("\u0422\u0438\u043F \u0437\u0430\u043A\u0430\u0437\u0430")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_UiTableHead, null, {
                            default: withCtx(() => [
                              createTextVNode("\u0414\u0430\u0442\u0430 \u0437\u0430\u043A\u0430\u0437\u0430")
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
                              createTextVNode("\u041F\u043E\u0434\u0440\u044F\u0434\u0447\u0438\u043A")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_UiTableHead, null, {
                            default: withCtx(() => [
                              createTextVNode("\u0422\u0421")
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
                              createTextVNode("\u0421\u0442\u0430\u0442\u0443\u0441")
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
                            createTextVNode("\u0422\u0438\u043F \u0437\u0430\u043A\u0430\u0437\u0430")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_UiTableHead, null, {
                          default: withCtx(() => [
                            createTextVNode("\u0414\u0430\u0442\u0430 \u0437\u0430\u043A\u0430\u0437\u0430")
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
                            createTextVNode("\u041F\u043E\u0434\u0440\u044F\u0434\u0447\u0438\u043A")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_UiTableHead, null, {
                          default: withCtx(() => [
                            createTextVNode("\u0422\u0421")
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
                            createTextVNode("\u0421\u0442\u0430\u0442\u0443\u0441")
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
                  ssrRenderList(__props.orders, (order) => {
                    _push3(ssrRenderComponent(_component_UiTableRow, {
                      key: order.id,
                      onClick: ($event) => unref(router).push(`/orders/${order.id}`),
                      class: "cursor-pointer hover:bg-gray-100"
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(_component_UiTableCell, null, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`${ssrInterpolate(order.order_type)}`);
                              } else {
                                return [
                                  createTextVNode(toDisplayString(order.order_type), 1)
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                          _push4(ssrRenderComponent(_component_UiTableCell, null, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`${ssrInterpolate(order.order_date)}`);
                              } else {
                                return [
                                  createTextVNode(toDisplayString(order.order_date), 1)
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                          _push4(ssrRenderComponent(_component_UiTableCell, null, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`${ssrInterpolate(order.client_info.name)}`);
                              } else {
                                return [
                                  createTextVNode(toDisplayString(order.client_info.name), 1)
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                          _push4(ssrRenderComponent(_component_UiTableCell, null, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`${ssrInterpolate(order.supplier_info.name)}`);
                              } else {
                                return [
                                  createTextVNode(toDisplayString(order.supplier_info.name), 1)
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                          _push4(ssrRenderComponent(_component_UiTableCell, null, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`${ssrInterpolate(order.vehicle_type)}`);
                              } else {
                                return [
                                  createTextVNode(toDisplayString(order.vehicle_type), 1)
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                          _push4(ssrRenderComponent(_component_UiTableCell, null, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`${ssrInterpolate(order.material_volume)}`);
                              } else {
                                return [
                                  createTextVNode(toDisplayString(order.material_volume), 1)
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                          _push4(ssrRenderComponent(_component_UiTableCell, null, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`${ssrInterpolate(order.status)}`);
                              } else {
                                return [
                                  createTextVNode(toDisplayString(order.status), 1)
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(_component_UiTableCell, null, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(order.order_type), 1)
                              ]),
                              _: 2
                            }, 1024),
                            createVNode(_component_UiTableCell, null, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(order.order_date), 1)
                              ]),
                              _: 2
                            }, 1024),
                            createVNode(_component_UiTableCell, null, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(order.client_info.name), 1)
                              ]),
                              _: 2
                            }, 1024),
                            createVNode(_component_UiTableCell, null, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(order.supplier_info.name), 1)
                              ]),
                              _: 2
                            }, 1024),
                            createVNode(_component_UiTableCell, null, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(order.vehicle_type), 1)
                              ]),
                              _: 2
                            }, 1024),
                            createVNode(_component_UiTableCell, null, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(order.material_volume), 1)
                              ]),
                              _: 2
                            }, 1024),
                            createVNode(_component_UiTableCell, null, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(order.status), 1)
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
                    (openBlock(true), createBlock(Fragment, null, renderList(__props.orders, (order) => {
                      return openBlock(), createBlock(_component_UiTableRow, {
                        key: order.id,
                        onClick: ($event) => unref(router).push(`/orders/${order.id}`),
                        class: "cursor-pointer hover:bg-gray-100"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_UiTableCell, null, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(order.order_type), 1)
                            ]),
                            _: 2
                          }, 1024),
                          createVNode(_component_UiTableCell, null, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(order.order_date), 1)
                            ]),
                            _: 2
                          }, 1024),
                          createVNode(_component_UiTableCell, null, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(order.client_info.name), 1)
                            ]),
                            _: 2
                          }, 1024),
                          createVNode(_component_UiTableCell, null, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(order.supplier_info.name), 1)
                            ]),
                            _: 2
                          }, 1024),
                          createVNode(_component_UiTableCell, null, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(order.vehicle_type), 1)
                            ]),
                            _: 2
                          }, 1024),
                          createVNode(_component_UiTableCell, null, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(order.material_volume), 1)
                            ]),
                            _: 2
                          }, 1024),
                          createVNode(_component_UiTableCell, null, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(order.status), 1)
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
                  createTextVNode("\u0421\u043F\u0438\u0441\u043E\u043A \u0437\u0430\u043A\u0430\u0437\u043E\u0432.")
                ]),
                _: 1
              }),
              createVNode(_component_UiTableHeader, { class: "bg-slate-100" }, {
                default: withCtx(() => [
                  createVNode(_component_UiTableRow, null, {
                    default: withCtx(() => [
                      createVNode(_component_UiTableHead, null, {
                        default: withCtx(() => [
                          createTextVNode("\u0422\u0438\u043F \u0437\u0430\u043A\u0430\u0437\u0430")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_UiTableHead, null, {
                        default: withCtx(() => [
                          createTextVNode("\u0414\u0430\u0442\u0430 \u0437\u0430\u043A\u0430\u0437\u0430")
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
                          createTextVNode("\u041F\u043E\u0434\u0440\u044F\u0434\u0447\u0438\u043A")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_UiTableHead, null, {
                        default: withCtx(() => [
                          createTextVNode("\u0422\u0421")
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
                          createTextVNode("\u0421\u0442\u0430\u0442\u0443\u0441")
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
                  (openBlock(true), createBlock(Fragment, null, renderList(__props.orders, (order) => {
                    return openBlock(), createBlock(_component_UiTableRow, {
                      key: order.id,
                      onClick: ($event) => unref(router).push(`/orders/${order.id}`),
                      class: "cursor-pointer hover:bg-gray-100"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_UiTableCell, null, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(order.order_type), 1)
                          ]),
                          _: 2
                        }, 1024),
                        createVNode(_component_UiTableCell, null, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(order.order_date), 1)
                          ]),
                          _: 2
                        }, 1024),
                        createVNode(_component_UiTableCell, null, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(order.client_info.name), 1)
                          ]),
                          _: 2
                        }, 1024),
                        createVNode(_component_UiTableCell, null, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(order.supplier_info.name), 1)
                          ]),
                          _: 2
                        }, 1024),
                        createVNode(_component_UiTableCell, null, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(order.vehicle_type), 1)
                          ]),
                          _: 2
                        }, 1024),
                        createVNode(_component_UiTableCell, null, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(order.material_volume), 1)
                          ]),
                          _: 2
                        }, 1024),
                        createVNode(_component_UiTableCell, null, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(order.status), 1)
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
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/my/orders/Table.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : undefined;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const router = useRouter();
    useHead({
      title: "\u0417\u0430\u043A\u0430\u0437\u044B"
    });
    const orders = ref([]);
    const loading = ref(true);
    const error = ref(null);
    const isDialogOpen = ref(false);
    const fetchOrders = async () => {
      try {
        const response = await fetch("https://faunaplus24.ru/api/orders/");
        if (!response.ok) throw new Error(`HTTP Error: ${response.status}`);
        orders.value = await response.json();
        console.log(orders.value[0]);
      } catch (err) {
        error.value = err.message;
      } finally {
        loading.value = false;
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UiButton = _sfc_main$3;
      const _component_UiDialog = _sfc_main$d;
      const _component_UiDialogTrigger = _sfc_main$7;
      const _component_UiDialogContent = _sfc_main$c;
      const _component_UiDialogHeader = _sfc_main$9;
      const _component_UiDialogTitle = _sfc_main$8;
      const _component_UiDialogDescription = _sfc_main$b;
      const _component_MyOrdersCreateForm = _sfc_main$2;
      const _component_UiDialogFooter = _sfc_main$a;
      const _component_MyOrdersTable = _sfc_main$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "p-6" }, _attrs))}><h1 class="text-2xl font-bold mb-4">\u0421\u043F\u0438\u0441\u043E\u043A \u0437\u0430\u043A\u0430\u0437\u043E\u0432</h1><div class="flex gap-2 mb-4">`);
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
                              _push5(`\u0421\u043E\u0437\u0434\u0430\u0442\u044C \u0437\u0430\u043A\u0430\u0437`);
                            } else {
                              return [
                                createTextVNode("\u0421\u043E\u0437\u0434\u0430\u0442\u044C \u0437\u0430\u043A\u0430\u0437")
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
                              createTextVNode("\u0421\u043E\u0437\u0434\u0430\u0442\u044C \u0437\u0430\u043A\u0430\u0437")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_UiDialogDescription)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_MyOrdersCreateForm, {
                    onOrderCreated: async () => {
                      await fetchOrders();
                      isDialogOpen.value = false;
                    }
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_UiDialogFooter, null, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_UiDialogHeader, null, {
                      default: withCtx(() => [
                        createVNode(_component_UiDialogTitle, null, {
                          default: withCtx(() => [
                            createTextVNode("\u0421\u043E\u0437\u0434\u0430\u0442\u044C \u0437\u0430\u043A\u0430\u0437")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_UiDialogDescription)
                      ]),
                      _: 1
                    }),
                    createVNode(_component_MyOrdersCreateForm, {
                      onOrderCreated: async () => {
                        await fetchOrders();
                        isDialogOpen.value = false;
                      }
                    }, null, 8, ["onOrderCreated"]),
                    createVNode(_component_UiDialogFooter)
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
                          createTextVNode("\u0421\u043E\u0437\u0434\u0430\u0442\u044C \u0437\u0430\u043A\u0430\u0437")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_UiDialogDescription)
                    ]),
                    _: 1
                  }),
                  createVNode(_component_MyOrdersCreateForm, {
                    onOrderCreated: async () => {
                      await fetchOrders();
                      isDialogOpen.value = false;
                    }
                  }, null, 8, ["onOrderCreated"]),
                  createVNode(_component_UiDialogFooter)
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
        _push(ssrRenderComponent(_component_MyOrdersTable, { orders: unref(orders) }, null, _parent));
        _push(`</div>`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/orders/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined;
};

export { _sfc_main as default };
//# sourceMappingURL=index-D_f3vao3.mjs.map
