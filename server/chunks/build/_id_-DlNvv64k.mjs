import { _ as _sfc_main$1 } from './index-BB7KKil7.mjs';
import { _ as _sfc_main$1$1, a as _sfc_main$3 } from './Input-BHo_TP6t.mjs';
import { _ as _sfc_main$2 } from './Combobox-DOwrg-P2.mjs';
import { _ as _sfc_main$4 } from './ComboboxModels-D6B6rKrJ.mjs';
import { _ as _sfc_main$6, a as _sfc_main$1$2, b as _sfc_main$5, c as _sfc_main$5$1, d as _sfc_main$4$1 } from './SelectValue-D5HYJzCo.mjs';
import { _ as _sfc_main$7 } from './Separator-DmQQBfST.mjs';
import { defineComponent, ref, unref, withCtx, createTextVNode, createVNode, useSSRContext } from 'vue';
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
    console.log(router);
    const route = useRoute();
    useHead({
      title: "\u0417\u0430\u043A\u0430\u0437"
    });
    const orderId = route.params.id;
    const orderForm = ref({
      order_type: "",
      order_date: "",
      client: 0,
      client_address: 0,
      supplier: 0,
      vehicle_type: "",
      unit: "m3",
      total_handled_volume: 0,
      material_volume: 0
    });
    const orderTypes = ref([]);
    const contractors = ref([]);
    const vehicleTypes = ref([]);
    const clientAddresses = ref([]);
    const loading = ref(true);
    const error = ref(null);
    const successMessage = ref("");
    const saveOrder = async () => {
      try {
        const { data: updatedOrder } = await $useApi.patch(`/orders/${orderId}/`, orderForm.value);
        orderForm.value = updatedOrder;
        successMessage.value = "\u0417\u0430\u043A\u0430\u0437 \u0443\u0441\u043F\u0435\u0448\u043D\u043E \u043E\u0431\u043D\u043E\u0432\u043B\u0451\u043D!";
        setTimeout(() => successMessage.value = "", 3e3);
      } catch (err) {
        error.value = err.message;
      }
    };
    const deleteOrder = async () => {
      try {
        await $useApi.delete(`/orders/${orderId}/`);
        console.log("\u0417\u0430\u043A\u0430\u0437 \u0443\u0434\u0430\u043B\u0451\u043D!");
        router.push("/orders");
      } catch (err) {
        console.error("\u041E\u0448\u0438\u0431\u043A\u0430 \u0443\u0434\u0430\u043B\u0435\u043D\u0438\u044F \u0437\u0430\u043A\u0430\u0437\u0430:", err);
      }
    };
    const getClientAddresses = async (contractorId) => {
      try {
        const { data: addressesResponse } = await $useApi.get(`/contractor-addresses/?contractor=${contractorId}`);
        clientAddresses.value = addressesResponse;
      } catch (err) {
        console.error("\u041E\u0448\u0438\u0431\u043A\u0430 \u0437\u0430\u0433\u0440\u0443\u0437\u043A\u0438 \u0430\u0434\u0440\u0435\u0441\u043E\u0432 \u043A\u043E\u043D\u0442\u0440\u0430\u0433\u0435\u043D\u0442\u0430:", err);
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b, _c;
      const _component_UiButton = _sfc_main$1;
      const _component_UiLabel = _sfc_main$1$1;
      const _component_MyCombobox = _sfc_main$2;
      const _component_UiInput = _sfc_main$3;
      const _component_MyComboboxModels = _sfc_main$4;
      const _component_UiSelect = _sfc_main$6;
      const _component_UiSelectTrigger = _sfc_main$1$2;
      const _component_UiSelectValue = _sfc_main$5;
      const _component_UiSelectContent = _sfc_main$5$1;
      const _component_UiSelectItem = _sfc_main$4$1;
      const _component_UiSeparator = _sfc_main$7;
      _push(`<div${ssrRenderAttrs(_attrs)}><div class="p-6"><div class="flex gap-3">`);
      _push(ssrRenderComponent(_component_UiButton, {
        onClick: ($event) => unref(router).back(),
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
      _push(`<h1 class="text-2xl font-bold mb-4">\u0417\u0430\u043A\u0430\u0437</h1></div>`);
      if (unref(loading)) {
        _push(`<div class="text-center"><p>\u0417\u0430\u0433\u0440\u0443\u0437\u043A\u0430...</p></div>`);
      } else if (unref(error)) {
        _push(`<div class="text-red-500 text-center"><p>\u041E\u0448\u0438\u0431\u043A\u0430 \u0437\u0430\u0433\u0440\u0443\u0437\u043A\u0438: ${ssrInterpolate(unref(error))}</p></div>`);
      } else {
        _push(`<div class="flex flex-col gap-3"><div>`);
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
          label: unref(orderForm).order_type,
          onSelectedItem: (value) => unref(orderForm).order_type = value
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
          modelValue: unref(orderForm).order_date,
          "onUpdate:modelValue": ($event) => unref(orderForm).order_date = $event,
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
          items: unref(contractors).map((contractor) => ({ value: contractor.id, label: contractor.name })),
          label: ((_a = unref(contractors).find((c) => c.id === unref(orderForm).client)) == null ? undefined : _a.name) || "\u0412\u044B\u0431\u0440\u0430\u0442\u044C \u043A\u043B\u0438\u0435\u043D\u0442\u0430",
          onSelectedItem: async (value) => {
            unref(orderForm).client = value;
            await getClientAddresses(value);
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
          items: unref(clientAddresses).map((address) => ({ value: address.id, label: address.address })),
          label: ((_b = unref(clientAddresses).find((addr) => addr.id === unref(orderForm).client_address)) == null ? undefined : _b.address) || "\u0412\u044B\u0431\u0440\u0430\u0442\u044C \u0430\u0434\u0440\u0435\u0441",
          onSelectedItem: (value) => unref(orderForm).client_address = value
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
          items: unref(contractors).map((contractor) => ({ value: contractor.id, label: contractor.name })),
          label: ((_c = unref(contractors).find((c) => c.id === unref(orderForm).supplier)) == null ? undefined : _c.name) || "\u0412\u044B\u0431\u0440\u0430\u0442\u044C \u043F\u043E\u0441\u0442\u0430\u0432\u0449\u0438\u043A\u0430",
          onSelectedItem: (value) => unref(orderForm).supplier = value
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
          items: unref(vehicleTypes).map((vehicle) => vehicle.name),
          label: unref(orderForm).vehicle_type,
          onSelectedItem: (value) => unref(orderForm).vehicle_type = value
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
          modelValue: unref(orderForm).unit,
          "onUpdate:modelValue": ($event) => unref(orderForm).unit = $event
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
          modelValue: unref(orderForm).total_handled_volume,
          "onUpdate:modelValue": ($event) => unref(orderForm).total_handled_volume = $event,
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
          modelValue: unref(orderForm).material_volume,
          "onUpdate:modelValue": ($event) => unref(orderForm).material_volume = $event,
          placeholder: "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043E\u0431\u044A\u0435\u043C \u043C\u0430\u0442\u0435\u0440\u0438\u0430\u043B\u0430"
        }, null, _parent));
        _push(`</div><div class="mt-4 flex justify-between">`);
        _push(ssrRenderComponent(_component_UiButton, { onClick: deleteOrder }, {
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
        _push(ssrRenderComponent(_component_UiButton, { onClick: saveOrder }, {
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
      _push(ssrRenderComponent(_component_UiSeparator, null, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/orders/[id].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined;
};

export { _sfc_main as default };
//# sourceMappingURL=_id_-DlNvv64k.mjs.map
