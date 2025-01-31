import { _ as _sfc_main$1$1, a as _sfc_main$3 } from './Input-BHo_TP6t.mjs';
import { _ as _sfc_main$2 } from './Combobox-DOwrg-P2.mjs';
import { _ as _sfc_main$4 } from './ComboboxModels-D6B6rKrJ.mjs';
import { _ as _sfc_main$6, a as _sfc_main$1$2, b as _sfc_main$5, c as _sfc_main$5$1, d as _sfc_main$4$1 } from './SelectValue-D5HYJzCo.mjs';
import { _ as _sfc_main$7 } from './index-BB7KKil7.mjs';
import { useSSRContext, defineComponent, ref, withCtx, createTextVNode, createVNode, unref, toDisplayString, openBlock, createBlock, Fragment, renderList } from 'vue';
import { ssrRenderComponent, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';
import { b as useNuxtApp, u as useRouter } from './server.mjs';
import { g as _sfc_main$6$1, h as _sfc_main$4$2, i as _sfc_main$8, j as _sfc_main$2$1, k as _sfc_main$1$3, l as _sfc_main$5$2, m as _sfc_main$3$1 } from './TableHeader-Dh09Z8PQ.mjs';

const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "OrderForm",
  __ssrInlineRender: true,
  props: {
    client: {
      type: Object,
      default: null
      // Необязательный пропс
    },
    client_addresses: {
      type: Array,
      default: () => []
      // Необязательный пропс
    }
  },
  emits: ["order-created"],
  setup(__props, { emit: __emit }) {
    var _a, _b, _c;
    const { $useApi } = useNuxtApp();
    const props = __props;
    const orderTypes = ref([]);
    const contractors = ref([]);
    const vehicleTypes = ref([]);
    const clientAddresses = ref([]);
    const newOrder = ref({
      order_type: "",
      order_date: "",
      client: ((_a = props.client) == null ? undefined : _a.id) || 0,
      client_address: ((_c = (_b = props.client_addresses) == null ? undefined : _b[0]) == null ? undefined : _c.id) || 0,
      supplier: 0,
      vehicle_type: "",
      unit: "m3",
      total_handled_volume: 0,
      material_volume: 0
    });
    const isDialogOpen = ref(false);
    const fetchClientAddresses = async (contractorId) => {
      try {
        const { data: addressesData } = await $useApi.get(`/contractor-addresses/?contractor=${contractorId}`);
        clientAddresses.value = addressesData;
      } catch (err) {
        console.error("\u041E\u0448\u0438\u0431\u043A\u0430 \u0437\u0430\u0433\u0440\u0443\u0437\u043A\u0438 \u0430\u0434\u0440\u0435\u0441\u043E\u0432 \u043A\u043E\u043D\u0442\u0440\u0430\u0433\u0435\u043D\u0442\u0430:", err);
      }
    };
    const createOrder = async () => {
      try {
        const { data: createdOrder } = await $useApi.post("/orders/", newOrder.value);
        console.log("\u0417\u0430\u043A\u0430\u0437 \u0443\u0441\u043F\u0435\u0448\u043D\u043E \u0441\u043E\u0437\u0434\u0430\u043D:", createdOrder);
        resetForm();
        isDialogOpen.value = false;
        emit("order-created");
      } catch (err) {
        console.error("\u041E\u0448\u0438\u0431\u043A\u0430 \u0441\u043E\u0437\u0434\u0430\u043D\u0438\u044F \u0437\u0430\u043A\u0430\u0437\u0430:", err);
      }
    };
    const resetForm = () => {
      var _a2, _b2, _c2;
      newOrder.value = {
        order_type: "",
        order_date: "",
        client: ((_a2 = props.client) == null ? undefined : _a2.id) || 0,
        client_address: ((_c2 = (_b2 = props.client_addresses) == null ? undefined : _b2[0]) == null ? undefined : _c2.id) || 0,
        supplier: 0,
        vehicle_type: "",
        unit: "m3",
        total_handled_volume: 0,
        material_volume: 0
      };
    };
    const emit = __emit;
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UiLabel = _sfc_main$1$1;
      const _component_MyCombobox = _sfc_main$2;
      const _component_UiInput = _sfc_main$3;
      const _component_MyComboboxModels = _sfc_main$4;
      const _component_UiSelect = _sfc_main$6;
      const _component_UiSelectTrigger = _sfc_main$1$2;
      const _component_UiSelectValue = _sfc_main$5;
      const _component_UiSelectContent = _sfc_main$5$1;
      const _component_UiSelectItem = _sfc_main$4$1;
      const _component_UiButton = _sfc_main$7;
      _push(`<!--[--><div class="flex flex-col gap-3"><div>`);
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
        items: orderTypes.value.map((type) => type.name),
        label: "\u0422\u0438\u043F \u0437\u0430\u043A\u0430\u0437\u0430",
        onSelectedItem: (value) => newOrder.value.order_type = value
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
        modelValue: newOrder.value.order_date,
        "onUpdate:modelValue": ($event) => newOrder.value.order_date = $event,
        placeholder: "\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u0434\u0430\u0442\u0443"
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
        items: __props.client ? [{ value: __props.client.id, label: __props.client.name }] : contractors.value.map((contractor) => ({ value: contractor.id, label: contractor.name })),
        label: __props.client ? __props.client.name : "\u0412\u044B\u0431\u0440\u0430\u0442\u044C \u043A\u043B\u0438\u0435\u043D\u0442\u0430",
        onSelectedItem: async (value) => {
          newOrder.value.client = value;
          await fetchClientAddresses(value);
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
      _push(ssrRenderComponent(_component_MyComboboxModels, {
        items: clientAddresses.value.map((address) => ({ value: address.id, label: address.address })),
        label: "\u0412\u044B\u0431\u0440\u0430\u0442\u044C \u0430\u0434\u0440\u0435\u0441",
        onSelectedItem: (value) => newOrder.value.client_address = value
      }, null, _parent));
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
        items: contractors.value.map((contractor) => ({ value: contractor.id, label: contractor.name })),
        label: "\u0412\u044B\u0431\u0440\u0430\u0442\u044C \u043F\u043E\u0441\u0442\u0430\u0432\u0449\u0438\u043A\u0430",
        onSelectedItem: (value) => newOrder.value.supplier = value
      }, null, _parent));
      _push(`</div><div>`);
      _push(ssrRenderComponent(_component_UiLabel, { for: "vehicle_type" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`\u0422\u0438\u043F \u0442\u0440\u0430\u043D\u0441\u043F\u043E\u0440\u0442\u0430`);
          } else {
            return [
              createTextVNode("\u0422\u0438\u043F \u0442\u0440\u0430\u043D\u0441\u043F\u043E\u0440\u0442\u0430")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_MyCombobox, {
        class: "mt-2",
        items: vehicleTypes.value.map((vehicle) => vehicle.name),
        label: "\u0422\u0438\u043F \u0442\u0440\u0430\u043D\u0441\u043F\u043E\u0440\u0442\u0430",
        onSelectedItem: (value) => newOrder.value.vehicle_type = value
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
        modelValue: newOrder.value.unit,
        "onUpdate:modelValue": ($event) => newOrder.value.unit = $event
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
      _push(ssrRenderComponent(_component_UiLabel, { for: "total_handled_volume" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`\u041E\u0431\u0449\u0438\u0439 \u043E\u0431\u044A\u0435\u043C`);
          } else {
            return [
              createTextVNode("\u041E\u0431\u0449\u0438\u0439 \u043E\u0431\u044A\u0435\u043C")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_UiInput, {
        class: "mt-2",
        id: "total_handled_volume",
        type: "number",
        modelValue: newOrder.value.total_handled_volume,
        "onUpdate:modelValue": ($event) => newOrder.value.total_handled_volume = $event,
        placeholder: "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043E\u0431\u0449\u0438\u0439 \u043E\u0431\u044A\u0435\u043C"
      }, null, _parent));
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
        modelValue: newOrder.value.material_volume,
        "onUpdate:modelValue": ($event) => newOrder.value.material_volume = $event,
        placeholder: "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043E\u0431\u044A\u0435\u043C \u043C\u0430\u0442\u0435\u0440\u0438\u0430\u043B\u0430"
      }, null, _parent));
      _push(`</div></div>`);
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
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/my/orders/OrderForm.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : undefined;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Table",
  __ssrInlineRender: true,
  props: {
    orders: {
      type: Array,
      required: true
    }
  },
  setup(__props) {
    const router = useRouter();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UiTable = _sfc_main$6$1;
      const _component_UiTableCaption = _sfc_main$4$2;
      const _component_UiTableHeader = _sfc_main$8;
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
                              _push5(`\u0414\u0430\u0442\u0430`);
                            } else {
                              return [
                                createTextVNode("\u0414\u0430\u0442\u0430")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_UiTableHead, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`\u041A\u043B\u0438\u0435\u043D\u0442`);
                            } else {
                              return [
                                createTextVNode("\u041A\u043B\u0438\u0435\u043D\u0442")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_UiTableHead, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`\u0410\u0434\u0440\u0435\u0441`);
                            } else {
                              return [
                                createTextVNode("\u0410\u0434\u0440\u0435\u0441")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_UiTableHead, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`\u041F\u043E\u0441\u0442\u0430\u0432\u0449\u0438\u043A`);
                            } else {
                              return [
                                createTextVNode("\u041F\u043E\u0441\u0442\u0430\u0432\u0449\u0438\u043A")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_UiTableHead, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`\u0422\u0438\u043F \u0442\u0440\u0430\u043D\u0441\u043F\u043E\u0440\u0442\u0430`);
                            } else {
                              return [
                                createTextVNode("\u0422\u0438\u043F \u0442\u0440\u0430\u043D\u0441\u043F\u043E\u0440\u0442\u0430")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_UiTableHead, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`\u041E\u0431\u0449\u0438\u0439 \u043E\u0431\u044A\u0435\u043C`);
                            } else {
                              return [
                                createTextVNode("\u041E\u0431\u0449\u0438\u0439 \u043E\u0431\u044A\u0435\u043C")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_UiTableHead, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`\u041E\u0431\u044A\u0435\u043C \u043C\u0430\u0442\u0435\u0440\u0438\u0430\u043B\u0430`);
                            } else {
                              return [
                                createTextVNode("\u041E\u0431\u044A\u0435\u043C \u043C\u0430\u0442\u0435\u0440\u0438\u0430\u043B\u0430")
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
                              createTextVNode("\u0414\u0430\u0442\u0430")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_UiTableHead, null, {
                            default: withCtx(() => [
                              createTextVNode("\u041A\u043B\u0438\u0435\u043D\u0442")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_UiTableHead, null, {
                            default: withCtx(() => [
                              createTextVNode("\u0410\u0434\u0440\u0435\u0441")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_UiTableHead, null, {
                            default: withCtx(() => [
                              createTextVNode("\u041F\u043E\u0441\u0442\u0430\u0432\u0449\u0438\u043A")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_UiTableHead, null, {
                            default: withCtx(() => [
                              createTextVNode("\u0422\u0438\u043F \u0442\u0440\u0430\u043D\u0441\u043F\u043E\u0440\u0442\u0430")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_UiTableHead, null, {
                            default: withCtx(() => [
                              createTextVNode("\u041E\u0431\u0449\u0438\u0439 \u043E\u0431\u044A\u0435\u043C")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_UiTableHead, null, {
                            default: withCtx(() => [
                              createTextVNode("\u041E\u0431\u044A\u0435\u043C \u043C\u0430\u0442\u0435\u0440\u0438\u0430\u043B\u0430")
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
                            createTextVNode("\u0414\u0430\u0442\u0430")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_UiTableHead, null, {
                          default: withCtx(() => [
                            createTextVNode("\u041A\u043B\u0438\u0435\u043D\u0442")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_UiTableHead, null, {
                          default: withCtx(() => [
                            createTextVNode("\u0410\u0434\u0440\u0435\u0441")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_UiTableHead, null, {
                          default: withCtx(() => [
                            createTextVNode("\u041F\u043E\u0441\u0442\u0430\u0432\u0449\u0438\u043A")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_UiTableHead, null, {
                          default: withCtx(() => [
                            createTextVNode("\u0422\u0438\u043F \u0442\u0440\u0430\u043D\u0441\u043F\u043E\u0440\u0442\u0430")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_UiTableHead, null, {
                          default: withCtx(() => [
                            createTextVNode("\u041E\u0431\u0449\u0438\u0439 \u043E\u0431\u044A\u0435\u043C")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_UiTableHead, null, {
                          default: withCtx(() => [
                            createTextVNode("\u041E\u0431\u044A\u0435\u043C \u043C\u0430\u0442\u0435\u0440\u0438\u0430\u043B\u0430")
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
                              var _a, _b;
                              if (_push5) {
                                _push5(`${ssrInterpolate(((_a = order == null ? undefined : order.client_address_info) == null ? undefined : _a.address) || "")}`);
                              } else {
                                return [
                                  createTextVNode(toDisplayString(((_b = order == null ? undefined : order.client_address_info) == null ? undefined : _b.address) || ""), 1)
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                          _push4(ssrRenderComponent(_component_UiTableCell, null, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`${ssrInterpolate(order.supplier)}`);
                              } else {
                                return [
                                  createTextVNode(toDisplayString(order.supplier), 1)
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
                                _push5(`${ssrInterpolate(order.total_handled_volume)}`);
                              } else {
                                return [
                                  createTextVNode(toDisplayString(order.total_handled_volume), 1)
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
                              default: withCtx(() => {
                                var _a;
                                return [
                                  createTextVNode(toDisplayString(((_a = order == null ? undefined : order.client_address_info) == null ? undefined : _a.address) || ""), 1)
                                ];
                              }),
                              _: 2
                            }, 1024),
                            createVNode(_component_UiTableCell, null, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(order.supplier), 1)
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
                                createTextVNode(toDisplayString(order.total_handled_volume), 1)
                              ]),
                              _: 2
                            }, 1024),
                            createVNode(_component_UiTableCell, null, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(order.material_volume), 1)
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
                            default: withCtx(() => {
                              var _a;
                              return [
                                createTextVNode(toDisplayString(((_a = order == null ? undefined : order.client_address_info) == null ? undefined : _a.address) || ""), 1)
                              ];
                            }),
                            _: 2
                          }, 1024),
                          createVNode(_component_UiTableCell, null, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(order.supplier), 1)
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
                              createTextVNode(toDisplayString(order.total_handled_volume), 1)
                            ]),
                            _: 2
                          }, 1024),
                          createVNode(_component_UiTableCell, null, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(order.material_volume), 1)
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
                          createTextVNode("\u0422\u0438\u043F")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_UiTableHead, null, {
                        default: withCtx(() => [
                          createTextVNode("\u0414\u0430\u0442\u0430")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_UiTableHead, null, {
                        default: withCtx(() => [
                          createTextVNode("\u041A\u043B\u0438\u0435\u043D\u0442")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_UiTableHead, null, {
                        default: withCtx(() => [
                          createTextVNode("\u0410\u0434\u0440\u0435\u0441")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_UiTableHead, null, {
                        default: withCtx(() => [
                          createTextVNode("\u041F\u043E\u0441\u0442\u0430\u0432\u0449\u0438\u043A")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_UiTableHead, null, {
                        default: withCtx(() => [
                          createTextVNode("\u0422\u0438\u043F \u0442\u0440\u0430\u043D\u0441\u043F\u043E\u0440\u0442\u0430")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_UiTableHead, null, {
                        default: withCtx(() => [
                          createTextVNode("\u041E\u0431\u0449\u0438\u0439 \u043E\u0431\u044A\u0435\u043C")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_UiTableHead, null, {
                        default: withCtx(() => [
                          createTextVNode("\u041E\u0431\u044A\u0435\u043C \u043C\u0430\u0442\u0435\u0440\u0438\u0430\u043B\u0430")
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
                          default: withCtx(() => {
                            var _a;
                            return [
                              createTextVNode(toDisplayString(((_a = order == null ? undefined : order.client_address_info) == null ? undefined : _a.address) || ""), 1)
                            ];
                          }),
                          _: 2
                        }, 1024),
                        createVNode(_component_UiTableCell, null, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(order.supplier), 1)
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
                            createTextVNode(toDisplayString(order.total_handled_volume), 1)
                          ]),
                          _: 2
                        }, 1024),
                        createVNode(_component_UiTableCell, null, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(order.material_volume), 1)
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
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/my/orders/Table.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined;
};

export { _sfc_main$1 as _, _sfc_main as a };
//# sourceMappingURL=Table-iWjwqvA3.mjs.map
