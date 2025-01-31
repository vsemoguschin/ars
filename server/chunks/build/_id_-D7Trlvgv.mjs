import { _ as _sfc_main$1 } from './index-BB7KKil7.mjs';
import { _ as _sfc_main$1$1, a as _sfc_main$7 } from './Input-BHo_TP6t.mjs';
import { _ as _sfc_main$2 } from './ComboboxModels-D6B6rKrJ.mjs';
import { _ as _sfc_main$3 } from './Combobox-DOwrg-P2.mjs';
import { _ as _sfc_main$6, a as _sfc_main$1$2, b as _sfc_main$4, c as _sfc_main$5, d as _sfc_main$4$1 } from './SelectValue-D5HYJzCo.mjs';
import { _ as _sfc_main$8 } from './Separator-DmQQBfST.mjs';
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
    const route = useRoute();
    useHead({
      title: "\u041F\u0440\u0435\u0434\u043E\u043F\u043B\u0430\u0442\u0430"
    });
    const prepaymentId = route.params.id;
    const prepaymentForm = ref({
      prepayment_type: "",
      unit: "m3",
      total_volume: 0,
      remaining_volume: 0,
      price_per_unit: 0,
      total_price: 0,
      contractor: 0
    });
    const prepaymentTypes = ref([]);
    const contractors = ref([]);
    const loading = ref(true);
    const error = ref(null);
    const successMessage = ref("");
    const savePrepayment = async () => {
      try {
        console.log(prepaymentForm.value.contractor);
        const { data: updatedPrepayment } = await $useApi.patch(`/prepayments/${prepaymentId}/`, prepaymentForm.value);
        prepaymentForm.value = updatedPrepayment;
        successMessage.value = "\u0410\u0432\u0430\u043D\u0441\u043E\u0432\u044B\u0439 \u043F\u043B\u0430\u0442\u0435\u0436 \u0443\u0441\u043F\u0435\u0448\u043D\u043E \u043E\u0431\u043D\u043E\u0432\u043B\u0451\u043D!";
        setTimeout(() => successMessage.value = "", 3e3);
      } catch (err) {
        error.value = err.message;
      }
    };
    const deletePrepayment = async () => {
      try {
        await $useApi.delete(`/prepayments/${prepaymentId}/`);
        console.log("\u0410\u0432\u0430\u043D\u0441\u043E\u0432\u044B\u0439 \u043F\u043B\u0430\u0442\u0435\u0436 \u0443\u0434\u0430\u043B\u0451\u043D!");
        router.push("/prepayments");
      } catch (err) {
        console.error("\u041E\u0448\u0438\u0431\u043A\u0430 \u0443\u0434\u0430\u043B\u0435\u043D\u0438\u044F \u0430\u0432\u0430\u043D\u0441\u043E\u0432\u043E\u0433\u043E \u043F\u043B\u0430\u0442\u0435\u0436\u0430:", err);
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UiButton = _sfc_main$1;
      const _component_UiLabel = _sfc_main$1$1;
      const _component_MyComboboxModels = _sfc_main$2;
      const _component_MyCombobox = _sfc_main$3;
      const _component_UiSelect = _sfc_main$6;
      const _component_UiSelectTrigger = _sfc_main$1$2;
      const _component_UiSelectValue = _sfc_main$4;
      const _component_UiSelectContent = _sfc_main$5;
      const _component_UiSelectItem = _sfc_main$4$1;
      const _component_UiInput = _sfc_main$7;
      const _component_UiSeparator = _sfc_main$8;
      _push(`<div${ssrRenderAttrs(_attrs)}><div class="p-6"><div class="flex gap-3">`);
      _push(ssrRenderComponent(_component_UiButton, {
        onClick: ($event) => unref(router).push("/prepayments"),
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
      _push(`<h1 class="text-2xl font-bold mb-4">\u041F\u0440\u0435\u0434\u043E\u043F\u043B\u0430\u0442\u0430</h1></div>`);
      if (unref(loading)) {
        _push(`<div class="text-center"><p>\u0417\u0430\u0433\u0440\u0443\u0437\u043A\u0430...</p></div>`);
      } else if (unref(error)) {
        _push(`<div class="text-red-500 text-center"><p>\u041E\u0448\u0438\u0431\u043A\u0430 \u0437\u0430\u0433\u0440\u0443\u0437\u043A\u0438: ${ssrInterpolate(unref(error))}</p></div>`);
      } else {
        _push(`<div class="flex flex-col gap-3"><div class="flex flex-col gap-3">`);
        _push(ssrRenderComponent(_component_UiLabel, { for: "contractor" }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`\u041A\u043E\u043D\u0442\u0440\u0430\u0433\u0435\u043D\u0442`);
            } else {
              return [
                createTextVNode("\u041A\u043E\u043D\u0442\u0440\u0430\u0433\u0435\u043D\u0442")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(ssrRenderComponent(_component_MyComboboxModels, {
          items: unref(contractors).map((contractor) => ({ value: contractor.id, label: contractor.name })),
          label: unref(contractors).find((c) => c.id === unref(prepaymentForm).contractor).name,
          onSelectedItem: (value) => unref(prepaymentForm).contractor = value
        }, null, _parent));
        _push(`</div><div>`);
        _push(ssrRenderComponent(_component_UiLabel, { for: "prepayment_type" }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`\u0422\u0438\u043F \u0430\u0432\u0430\u043D\u0441\u043E\u0432\u043E\u0433\u043E \u043F\u043B\u0430\u0442\u0435\u0436\u0430`);
            } else {
              return [
                createTextVNode("\u0422\u0438\u043F \u0430\u0432\u0430\u043D\u0441\u043E\u0432\u043E\u0433\u043E \u043F\u043B\u0430\u0442\u0435\u0436\u0430")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(ssrRenderComponent(_component_MyCombobox, {
          class: "mt-2",
          items: unref(prepaymentTypes).map((type) => type.name),
          label: unref(prepaymentForm).prepayment_type,
          onSelectedItem: (value) => unref(prepaymentForm).prepayment_type = value
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
          modelValue: unref(prepaymentForm).unit,
          "onUpdate:modelValue": ($event) => unref(prepaymentForm).unit = $event
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
        _push(ssrRenderComponent(_component_UiLabel, { for: "total_volume" }, {
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
          id: "total_volume",
          type: "number",
          modelValue: unref(prepaymentForm).total_volume,
          "onUpdate:modelValue": ($event) => unref(prepaymentForm).total_volume = $event,
          placeholder: "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043E\u0431\u0449\u0438\u0439 \u043E\u0431\u044A\u0435\u043C"
        }, null, _parent));
        _push(`</div><div>`);
        _push(ssrRenderComponent(_component_UiLabel, { for: "remaining_volume" }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`\u041E\u0441\u0442\u0430\u0432\u0448\u0438\u0439\u0441\u044F \u043E\u0431\u044A\u0435\u043C`);
            } else {
              return [
                createTextVNode("\u041E\u0441\u0442\u0430\u0432\u0448\u0438\u0439\u0441\u044F \u043E\u0431\u044A\u0435\u043C")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(ssrRenderComponent(_component_UiInput, {
          class: "mt-2",
          id: "remaining_volume",
          type: "number",
          modelValue: unref(prepaymentForm).remaining_volume,
          "onUpdate:modelValue": ($event) => unref(prepaymentForm).remaining_volume = $event,
          placeholder: "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043E\u0441\u0442\u0430\u0432\u0448\u0438\u0439\u0441\u044F \u043E\u0431\u044A\u0435\u043C"
        }, null, _parent));
        _push(`</div><div>`);
        _push(ssrRenderComponent(_component_UiLabel, { for: "price_per_unit" }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`\u0426\u0435\u043D\u0430 \u0437\u0430 \u0435\u0434\u0438\u043D\u0438\u0446\u0443`);
            } else {
              return [
                createTextVNode("\u0426\u0435\u043D\u0430 \u0437\u0430 \u0435\u0434\u0438\u043D\u0438\u0446\u0443")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(ssrRenderComponent(_component_UiInput, {
          class: "mt-2",
          id: "price_per_unit",
          type: "number",
          modelValue: unref(prepaymentForm).price_per_unit,
          "onUpdate:modelValue": ($event) => unref(prepaymentForm).price_per_unit = $event,
          placeholder: "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0446\u0435\u043D\u0443 \u0437\u0430 \u0435\u0434\u0438\u043D\u0438\u0446\u0443"
        }, null, _parent));
        _push(`</div><div>`);
        _push(ssrRenderComponent(_component_UiLabel, { for: "total_price" }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`\u041E\u0431\u0449\u0430\u044F \u0441\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C`);
            } else {
              return [
                createTextVNode("\u041E\u0431\u0449\u0430\u044F \u0441\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(ssrRenderComponent(_component_UiInput, {
          class: "mt-2",
          id: "total_price",
          type: "number",
          modelValue: unref(prepaymentForm).total_price,
          "onUpdate:modelValue": ($event) => unref(prepaymentForm).total_price = $event,
          placeholder: "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043E\u0431\u0449\u0443\u044E \u0441\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C"
        }, null, _parent));
        _push(`</div><div class="mt-4 flex justify-between">`);
        _push(ssrRenderComponent(_component_UiButton, { onClick: deletePrepayment }, {
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
        _push(ssrRenderComponent(_component_UiButton, { onClick: savePrepayment }, {
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/prepayments/[id].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined;
};

export { _sfc_main as default };
//# sourceMappingURL=_id_-D7Trlvgv.mjs.map
