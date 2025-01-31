import { _ as _sfc_main$1 } from './index-BB7KKil7.mjs';
import { _ as _sfc_main$d, a as _sfc_main$7, b as _sfc_main$c, c as _sfc_main$9, d as _sfc_main$8, e as _sfc_main$b, f as _sfc_main$a, g as _sfc_main$6, h as _sfc_main$4, i as _sfc_main$5, j as _sfc_main$2$1, k as _sfc_main$1$2, l as _sfc_main$5$1, m as _sfc_main$3$1 } from './TableHeader-Dh09Z8PQ.mjs';
import { _ as _sfc_main$1$1, a as _sfc_main$3 } from './Input-BHo_TP6t.mjs';
import { _ as _sfc_main$2 } from './Combobox-DOwrg-P2.mjs';
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
      title: "\u0422\u0440\u0430\u043D\u0441\u043F\u043E\u0440\u0442\u043D\u044B\u0435 \u0441\u0440\u0435\u0434\u0441\u0442\u0432\u0430"
    });
    const vehicles = ref([]);
    const vehicleTypes = ref([]);
    const loading = ref(true);
    const error = ref(null);
    const isDialogOpen = ref(false);
    const newVehicle = ref({
      vehicle_type: "",
      registration_number: "",
      volume: 0,
      insurance_expiry: "",
      mkad_pass_expiry: "",
      status: ""
    });
    const createVehicle = async () => {
      try {
        const { data: createdVehicle } = await $useApi.post("/vehicles/", newVehicle.value);
        vehicles.value.push(createdVehicle);
        isDialogOpen.value = false;
        newVehicle.value = {
          vehicle_type: "",
          registration_number: "",
          volume: 0,
          insurance_expiry: "",
          mkad_pass_expiry: "",
          status: ""
        };
      } catch (err) {
        console.error("\u041E\u0448\u0438\u0431\u043A\u0430 \u0441\u043E\u0437\u0434\u0430\u043D\u0438\u044F \u0442\u0440\u0430\u043D\u0441\u043F\u043E\u0440\u0442\u043D\u043E\u0433\u043E \u0441\u0440\u0435\u0434\u0441\u0442\u0432\u0430:", err);
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
      const _component_MyCombobox = _sfc_main$2;
      const _component_UiInput = _sfc_main$3;
      const _component_UiDialogFooter = _sfc_main$a;
      const _component_UiTable = _sfc_main$6;
      const _component_UiTableCaption = _sfc_main$4;
      const _component_UiTableHeader = _sfc_main$5;
      const _component_UiTableRow = _sfc_main$2$1;
      const _component_UiTableHead = _sfc_main$1$2;
      const _component_UiTableBody = _sfc_main$5$1;
      const _component_UiTableCell = _sfc_main$3$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "p-6" }, _attrs))}><h1 class="text-2xl font-bold mb-4">\u0421\u043F\u0438\u0441\u043E\u043A \u0442\u0440\u0430\u043D\u0441\u043F\u043E\u0440\u0442\u043D\u044B\u0445 \u0441\u0440\u0435\u0434\u0441\u0442\u0432</h1><div class="flex gap-2 mb-4">`);
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
                              _push5(`\u0421\u043E\u0437\u0434\u0430\u0442\u044C \u0442\u0440\u0430\u043D\u0441\u043F\u043E\u0440\u0442\u043D\u043E\u0435 \u0441\u0440\u0435\u0434\u0441\u0442\u0432\u043E`);
                            } else {
                              return [
                                createTextVNode("\u0421\u043E\u0437\u0434\u0430\u0442\u044C \u0442\u0440\u0430\u043D\u0441\u043F\u043E\u0440\u0442\u043D\u043E\u0435 \u0441\u0440\u0435\u0434\u0441\u0442\u0432\u043E")
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
                              createTextVNode("\u0421\u043E\u0437\u0434\u0430\u0442\u044C \u0442\u0440\u0430\u043D\u0441\u043F\u043E\u0440\u0442\u043D\u043E\u0435 \u0441\u0440\u0435\u0434\u0441\u0442\u0432\u043E")
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
                  _push3(ssrRenderComponent(_component_UiLabel, { for: "vehicle_type" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`\u0422\u0438\u043F \u0422\u0421`);
                      } else {
                        return [
                          createTextVNode("\u0422\u0438\u043F \u0422\u0421")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_MyCombobox, {
                    class: "mt-2",
                    items: unref(vehicleTypes).map((type) => type.name),
                    label: "\u0422\u0438\u043F \u0422\u0421",
                    onSelectedItem: (value) => unref(newVehicle).vehicle_type = value
                  }, null, _parent3, _scopeId2));
                  _push3(`</div><div${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_UiLabel, { for: "registration_number" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`\u041D\u043E\u043C\u0435\u0440 \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u0438`);
                      } else {
                        return [
                          createTextVNode("\u041D\u043E\u043C\u0435\u0440 \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u0438")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_UiInput, {
                    class: "mt-2",
                    id: "registration_number",
                    modelValue: unref(newVehicle).registration_number,
                    "onUpdate:modelValue": ($event) => unref(newVehicle).registration_number = $event,
                    placeholder: "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043D\u043E\u043C\u0435\u0440 \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u0438"
                  }, null, _parent3, _scopeId2));
                  _push3(`</div><div${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_UiLabel, { for: "volume" }, {
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
                    id: "volume",
                    type: "number",
                    modelValue: unref(newVehicle).volume,
                    "onUpdate:modelValue": ($event) => unref(newVehicle).volume = $event,
                    placeholder: "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043E\u0431\u044A\u0435\u043C"
                  }, null, _parent3, _scopeId2));
                  _push3(`</div><div${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_UiLabel, { for: "insurance_expiry" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`\u0414\u0430\u0442\u0430 \u043E\u043A\u043E\u043D\u0447\u0430\u043D\u0438\u044F \u0441\u0442\u0440\u0430\u0445\u043E\u0432\u043A\u0438`);
                      } else {
                        return [
                          createTextVNode("\u0414\u0430\u0442\u0430 \u043E\u043A\u043E\u043D\u0447\u0430\u043D\u0438\u044F \u0441\u0442\u0440\u0430\u0445\u043E\u0432\u043A\u0438")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_UiInput, {
                    class: "mt-2",
                    id: "insurance_expiry",
                    type: "date",
                    modelValue: unref(newVehicle).insurance_expiry,
                    "onUpdate:modelValue": ($event) => unref(newVehicle).insurance_expiry = $event
                  }, null, _parent3, _scopeId2));
                  _push3(`</div><div${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_UiLabel, { for: "mkad_pass_expiry" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`\u0414\u0430\u0442\u0430 \u043E\u043A\u043E\u043D\u0447\u0430\u043D\u0438\u044F \u043F\u0440\u043E\u043F\u0443\u0441\u043A\u0430 \u041C\u041A\u0410\u0414`);
                      } else {
                        return [
                          createTextVNode("\u0414\u0430\u0442\u0430 \u043E\u043A\u043E\u043D\u0447\u0430\u043D\u0438\u044F \u043F\u0440\u043E\u043F\u0443\u0441\u043A\u0430 \u041C\u041A\u0410\u0414")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_UiInput, {
                    class: "mt-2",
                    id: "mkad_pass_expiry",
                    type: "date",
                    modelValue: unref(newVehicle).mkad_pass_expiry,
                    "onUpdate:modelValue": ($event) => unref(newVehicle).mkad_pass_expiry = $event
                  }, null, _parent3, _scopeId2));
                  _push3(`</div><div${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_UiLabel, { for: "status" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`\u0421\u0442\u0430\u0442\u0443\u0441`);
                      } else {
                        return [
                          createTextVNode("\u0421\u0442\u0430\u0442\u0443\u0441")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_UiInput, {
                    class: "mt-2",
                    id: "status",
                    modelValue: unref(newVehicle).status,
                    "onUpdate:modelValue": ($event) => unref(newVehicle).status = $event,
                    placeholder: "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0441\u0442\u0430\u0442\u0443\u0441"
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
                        _push4(ssrRenderComponent(_component_UiButton, { onClick: createVehicle }, {
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
                            createVNode(_component_UiButton, { onClick: createVehicle }, {
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
                            createTextVNode("\u0421\u043E\u0437\u0434\u0430\u0442\u044C \u0442\u0440\u0430\u043D\u0441\u043F\u043E\u0440\u0442\u043D\u043E\u0435 \u0441\u0440\u0435\u0434\u0441\u0442\u0432\u043E")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_UiDialogDescription)
                      ]),
                      _: 1
                    }),
                    createVNode("div", { class: "flex flex-col gap-3" }, [
                      createVNode("div", null, [
                        createVNode(_component_UiLabel, { for: "vehicle_type" }, {
                          default: withCtx(() => [
                            createTextVNode("\u0422\u0438\u043F \u0422\u0421")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_MyCombobox, {
                          class: "mt-2",
                          items: unref(vehicleTypes).map((type) => type.name),
                          label: "\u0422\u0438\u043F \u0422\u0421",
                          onSelectedItem: (value) => unref(newVehicle).vehicle_type = value
                        }, null, 8, ["items", "onSelectedItem"])
                      ]),
                      createVNode("div", null, [
                        createVNode(_component_UiLabel, { for: "registration_number" }, {
                          default: withCtx(() => [
                            createTextVNode("\u041D\u043E\u043C\u0435\u0440 \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u0438")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_UiInput, {
                          class: "mt-2",
                          id: "registration_number",
                          modelValue: unref(newVehicle).registration_number,
                          "onUpdate:modelValue": ($event) => unref(newVehicle).registration_number = $event,
                          placeholder: "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043D\u043E\u043C\u0435\u0440 \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u0438"
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      createVNode("div", null, [
                        createVNode(_component_UiLabel, { for: "volume" }, {
                          default: withCtx(() => [
                            createTextVNode("\u041E\u0431\u044A\u0435\u043C")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_UiInput, {
                          class: "mt-2",
                          id: "volume",
                          type: "number",
                          modelValue: unref(newVehicle).volume,
                          "onUpdate:modelValue": ($event) => unref(newVehicle).volume = $event,
                          placeholder: "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043E\u0431\u044A\u0435\u043C"
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      createVNode("div", null, [
                        createVNode(_component_UiLabel, { for: "insurance_expiry" }, {
                          default: withCtx(() => [
                            createTextVNode("\u0414\u0430\u0442\u0430 \u043E\u043A\u043E\u043D\u0447\u0430\u043D\u0438\u044F \u0441\u0442\u0440\u0430\u0445\u043E\u0432\u043A\u0438")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_UiInput, {
                          class: "mt-2",
                          id: "insurance_expiry",
                          type: "date",
                          modelValue: unref(newVehicle).insurance_expiry,
                          "onUpdate:modelValue": ($event) => unref(newVehicle).insurance_expiry = $event
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      createVNode("div", null, [
                        createVNode(_component_UiLabel, { for: "mkad_pass_expiry" }, {
                          default: withCtx(() => [
                            createTextVNode("\u0414\u0430\u0442\u0430 \u043E\u043A\u043E\u043D\u0447\u0430\u043D\u0438\u044F \u043F\u0440\u043E\u043F\u0443\u0441\u043A\u0430 \u041C\u041A\u0410\u0414")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_UiInput, {
                          class: "mt-2",
                          id: "mkad_pass_expiry",
                          type: "date",
                          modelValue: unref(newVehicle).mkad_pass_expiry,
                          "onUpdate:modelValue": ($event) => unref(newVehicle).mkad_pass_expiry = $event
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      createVNode("div", null, [
                        createVNode(_component_UiLabel, { for: "status" }, {
                          default: withCtx(() => [
                            createTextVNode("\u0421\u0442\u0430\u0442\u0443\u0441")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_UiInput, {
                          class: "mt-2",
                          id: "status",
                          modelValue: unref(newVehicle).status,
                          "onUpdate:modelValue": ($event) => unref(newVehicle).status = $event,
                          placeholder: "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0441\u0442\u0430\u0442\u0443\u0441"
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
                          createVNode(_component_UiButton, { onClick: createVehicle }, {
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
                          createTextVNode("\u0421\u043E\u0437\u0434\u0430\u0442\u044C \u0442\u0440\u0430\u043D\u0441\u043F\u043E\u0440\u0442\u043D\u043E\u0435 \u0441\u0440\u0435\u0434\u0441\u0442\u0432\u043E")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_UiDialogDescription)
                    ]),
                    _: 1
                  }),
                  createVNode("div", { class: "flex flex-col gap-3" }, [
                    createVNode("div", null, [
                      createVNode(_component_UiLabel, { for: "vehicle_type" }, {
                        default: withCtx(() => [
                          createTextVNode("\u0422\u0438\u043F \u0422\u0421")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_MyCombobox, {
                        class: "mt-2",
                        items: unref(vehicleTypes).map((type) => type.name),
                        label: "\u0422\u0438\u043F \u0422\u0421",
                        onSelectedItem: (value) => unref(newVehicle).vehicle_type = value
                      }, null, 8, ["items", "onSelectedItem"])
                    ]),
                    createVNode("div", null, [
                      createVNode(_component_UiLabel, { for: "registration_number" }, {
                        default: withCtx(() => [
                          createTextVNode("\u041D\u043E\u043C\u0435\u0440 \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u0438")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_UiInput, {
                        class: "mt-2",
                        id: "registration_number",
                        modelValue: unref(newVehicle).registration_number,
                        "onUpdate:modelValue": ($event) => unref(newVehicle).registration_number = $event,
                        placeholder: "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043D\u043E\u043C\u0435\u0440 \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u0438"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    createVNode("div", null, [
                      createVNode(_component_UiLabel, { for: "volume" }, {
                        default: withCtx(() => [
                          createTextVNode("\u041E\u0431\u044A\u0435\u043C")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_UiInput, {
                        class: "mt-2",
                        id: "volume",
                        type: "number",
                        modelValue: unref(newVehicle).volume,
                        "onUpdate:modelValue": ($event) => unref(newVehicle).volume = $event,
                        placeholder: "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043E\u0431\u044A\u0435\u043C"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    createVNode("div", null, [
                      createVNode(_component_UiLabel, { for: "insurance_expiry" }, {
                        default: withCtx(() => [
                          createTextVNode("\u0414\u0430\u0442\u0430 \u043E\u043A\u043E\u043D\u0447\u0430\u043D\u0438\u044F \u0441\u0442\u0440\u0430\u0445\u043E\u0432\u043A\u0438")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_UiInput, {
                        class: "mt-2",
                        id: "insurance_expiry",
                        type: "date",
                        modelValue: unref(newVehicle).insurance_expiry,
                        "onUpdate:modelValue": ($event) => unref(newVehicle).insurance_expiry = $event
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    createVNode("div", null, [
                      createVNode(_component_UiLabel, { for: "mkad_pass_expiry" }, {
                        default: withCtx(() => [
                          createTextVNode("\u0414\u0430\u0442\u0430 \u043E\u043A\u043E\u043D\u0447\u0430\u043D\u0438\u044F \u043F\u0440\u043E\u043F\u0443\u0441\u043A\u0430 \u041C\u041A\u0410\u0414")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_UiInput, {
                        class: "mt-2",
                        id: "mkad_pass_expiry",
                        type: "date",
                        modelValue: unref(newVehicle).mkad_pass_expiry,
                        "onUpdate:modelValue": ($event) => unref(newVehicle).mkad_pass_expiry = $event
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    createVNode("div", null, [
                      createVNode(_component_UiLabel, { for: "status" }, {
                        default: withCtx(() => [
                          createTextVNode("\u0421\u0442\u0430\u0442\u0443\u0441")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_UiInput, {
                        class: "mt-2",
                        id: "status",
                        modelValue: unref(newVehicle).status,
                        "onUpdate:modelValue": ($event) => unref(newVehicle).status = $event,
                        placeholder: "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0441\u0442\u0430\u0442\u0443\u0441"
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
                        createVNode(_component_UiButton, { onClick: createVehicle }, {
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
                    _push3(`\u0421\u043F\u0438\u0441\u043E\u043A \u0442\u0440\u0430\u043D\u0441\u043F\u043E\u0440\u0442\u043D\u044B\u0445 \u0441\u0440\u0435\u0434\u0441\u0442\u0432.`);
                  } else {
                    return [
                      createTextVNode("\u0421\u043F\u0438\u0441\u043E\u043A \u0442\u0440\u0430\u043D\u0441\u043F\u043E\u0440\u0442\u043D\u044B\u0445 \u0441\u0440\u0435\u0434\u0441\u0442\u0432.")
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
                                _push5(`\u041D\u043E\u043C\u0435\u0440 \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u0438`);
                              } else {
                                return [
                                  createTextVNode("\u041D\u043E\u043C\u0435\u0440 \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u0438")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                          _push4(ssrRenderComponent(_component_UiTableHead, null, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`\u0422\u0438\u043F \u0422\u0421`);
                              } else {
                                return [
                                  createTextVNode("\u0422\u0438\u043F \u0422\u0421")
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
                                createTextVNode("\u041D\u043E\u043C\u0435\u0440 \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u0438")
                              ]),
                              _: 1
                            }),
                            createVNode(_component_UiTableHead, null, {
                              default: withCtx(() => [
                                createTextVNode("\u0422\u0438\u043F \u0422\u0421")
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
                              createTextVNode("\u041D\u043E\u043C\u0435\u0440 \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u0438")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_UiTableHead, null, {
                            default: withCtx(() => [
                              createTextVNode("\u0422\u0438\u043F \u0422\u0421")
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
                    ssrRenderList(unref(vehicles), (vehicle) => {
                      _push3(ssrRenderComponent(_component_UiTableRow, {
                        key: vehicle.id,
                        onClick: ($event) => unref(router).push(`/vehicles/${vehicle.id}`),
                        class: "cursor-pointer hover:bg-gray-100"
                      }, {
                        default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(ssrRenderComponent(_component_UiTableCell, null, {
                              default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  _push5(`${ssrInterpolate(vehicle.registration_number)}`);
                                } else {
                                  return [
                                    createTextVNode(toDisplayString(vehicle.registration_number), 1)
                                  ];
                                }
                              }),
                              _: 2
                            }, _parent4, _scopeId3));
                            _push4(ssrRenderComponent(_component_UiTableCell, null, {
                              default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  _push5(`${ssrInterpolate(vehicle.vehicle_type)}`);
                                } else {
                                  return [
                                    createTextVNode(toDisplayString(vehicle.vehicle_type), 1)
                                  ];
                                }
                              }),
                              _: 2
                            }, _parent4, _scopeId3));
                            _push4(ssrRenderComponent(_component_UiTableCell, null, {
                              default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  _push5(`${ssrInterpolate(vehicle.status)}`);
                                } else {
                                  return [
                                    createTextVNode(toDisplayString(vehicle.status), 1)
                                  ];
                                }
                              }),
                              _: 2
                            }, _parent4, _scopeId3));
                          } else {
                            return [
                              createVNode(_component_UiTableCell, null, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(vehicle.registration_number), 1)
                                ]),
                                _: 2
                              }, 1024),
                              createVNode(_component_UiTableCell, null, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(vehicle.vehicle_type), 1)
                                ]),
                                _: 2
                              }, 1024),
                              createVNode(_component_UiTableCell, null, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(vehicle.status), 1)
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
                      (openBlock(true), createBlock(Fragment, null, renderList(unref(vehicles), (vehicle) => {
                        return openBlock(), createBlock(_component_UiTableRow, {
                          key: vehicle.id,
                          onClick: ($event) => unref(router).push(`/vehicles/${vehicle.id}`),
                          class: "cursor-pointer hover:bg-gray-100"
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_UiTableCell, null, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(vehicle.registration_number), 1)
                              ]),
                              _: 2
                            }, 1024),
                            createVNode(_component_UiTableCell, null, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(vehicle.vehicle_type), 1)
                              ]),
                              _: 2
                            }, 1024),
                            createVNode(_component_UiTableCell, null, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(vehicle.status), 1)
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
                    createTextVNode("\u0421\u043F\u0438\u0441\u043E\u043A \u0442\u0440\u0430\u043D\u0441\u043F\u043E\u0440\u0442\u043D\u044B\u0445 \u0441\u0440\u0435\u0434\u0441\u0442\u0432.")
                  ]),
                  _: 1
                }),
                createVNode(_component_UiTableHeader, { class: "bg-slate-100" }, {
                  default: withCtx(() => [
                    createVNode(_component_UiTableRow, null, {
                      default: withCtx(() => [
                        createVNode(_component_UiTableHead, null, {
                          default: withCtx(() => [
                            createTextVNode("\u041D\u043E\u043C\u0435\u0440 \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u0438")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_UiTableHead, null, {
                          default: withCtx(() => [
                            createTextVNode("\u0422\u0438\u043F \u0422\u0421")
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
                    (openBlock(true), createBlock(Fragment, null, renderList(unref(vehicles), (vehicle) => {
                      return openBlock(), createBlock(_component_UiTableRow, {
                        key: vehicle.id,
                        onClick: ($event) => unref(router).push(`/vehicles/${vehicle.id}`),
                        class: "cursor-pointer hover:bg-gray-100"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_UiTableCell, null, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(vehicle.registration_number), 1)
                            ]),
                            _: 2
                          }, 1024),
                          createVNode(_component_UiTableCell, null, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(vehicle.vehicle_type), 1)
                            ]),
                            _: 2
                          }, 1024),
                          createVNode(_component_UiTableCell, null, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(vehicle.status), 1)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/vehicles/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined;
};

export { _sfc_main as default };
//# sourceMappingURL=index-Blk_kl_Y.mjs.map
