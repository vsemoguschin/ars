import { a as _sfc_main$8, b as _sfc_main$6, c as _sfc_main$7, d as _sfc_main$5, e as _sfc_main$3, f as _sfc_main$1$1, g as _sfc_main$4, h as _sfc_main$2$1 } from './Combobox-DOwrg-P2.mjs';
import { c as cn, _ as _sfc_main$2 } from './index-BB7KKil7.mjs';
import { useSSRContext, defineComponent, computed, unref, mergeProps, withCtx, renderSlot, ref, isRef, createTextVNode, toDisplayString, createVNode, openBlock, createBlock, Fragment, renderList } from 'vue';
import { ssrRenderComponent, ssrRenderSlot, ssrInterpolate, ssrRenderList } from 'vue/server-renderer';
import { ComboboxEmpty } from 'radix-vue';

const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "CommandEmpty",
  __ssrInlineRender: true,
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(__props) {
    const props = __props;
    const delegatedProps = computed(() => {
      const { class: _, ...delegated } = props;
      return delegated;
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(ComboboxEmpty), mergeProps(delegatedProps.value, {
        class: unref(cn)("py-6 text-center text-sm", props.class)
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "default")
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/command/CommandEmpty.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : undefined;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "ComboboxModels",
  __ssrInlineRender: true,
  props: {
    items: {},
    label: {}
  },
  emits: ["selectedItem"],
  setup(__props, { emit: __emit }) {
    const open = ref(false);
    const value = ref("");
    const emit = __emit;
    const selectedItem = (value2) => {
      emit("selectedItem", value2);
      return;
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UiPopover = _sfc_main$8;
      const _component_UiPopoverTrigger = _sfc_main$6;
      const _component_UiButton = _sfc_main$2;
      const _component_UiPopoverContent = _sfc_main$7;
      const _component_UiCommand = _sfc_main$5;
      const _component_UiCommandInput = _sfc_main$3;
      const _component_UiCommandEmpty = _sfc_main$1;
      const _component_UiCommandList = _sfc_main$1$1;
      const _component_UiCommandGroup = _sfc_main$4;
      const _component_UiCommandItem = _sfc_main$2$1;
      _push(ssrRenderComponent(_component_UiPopover, mergeProps({
        open: unref(open),
        "onUpdate:open": ($event) => isRef(open) ? open.value = $event : null
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UiPopoverTrigger, { "as-child": "" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UiButton, {
                    variant: "outline",
                    role: "combobox",
                    "aria-expanded": unref(open),
                    class: "justify-between"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`${ssrInterpolate(unref(value) ? unref(value) : `${_ctx.label}...`)}`);
                      } else {
                        return [
                          createTextVNode(toDisplayString(unref(value) ? unref(value) : `${_ctx.label}...`), 1)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_UiButton, {
                      variant: "outline",
                      role: "combobox",
                      "aria-expanded": unref(open),
                      class: "justify-between"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(unref(value) ? unref(value) : `${_ctx.label}...`), 1)
                      ]),
                      _: 1
                    }, 8, ["aria-expanded"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UiPopoverContent, { class: "p-0" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UiCommand, {
                    modelValue: unref(value),
                    "onUpdate:modelValue": ($event) => isRef(value) ? value.value = $event : null
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_UiCommandInput, { placeholder: "Search item..." }, null, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_UiCommandEmpty, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`No item found.`);
                            } else {
                              return [
                                createTextVNode("No item found.")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_UiCommandList, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_UiCommandGroup, null, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`<!--[-->`);
                                    ssrRenderList(_ctx.items, (item) => {
                                      _push6(ssrRenderComponent(_component_UiCommandItem, {
                                        key: item.value,
                                        value: item.label,
                                        onSelect: ($event) => {
                                          selectedItem(item.value);
                                          open.value = false;
                                        }
                                      }, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(`${ssrInterpolate(item.label)}`);
                                          } else {
                                            return [
                                              createTextVNode(toDisplayString(item.label), 1)
                                            ];
                                          }
                                        }),
                                        _: 2
                                      }, _parent6, _scopeId5));
                                    });
                                    _push6(`<!--]-->`);
                                  } else {
                                    return [
                                      (openBlock(true), createBlock(Fragment, null, renderList(_ctx.items, (item) => {
                                        return openBlock(), createBlock(_component_UiCommandItem, {
                                          key: item.value,
                                          value: item.label,
                                          onSelect: ($event) => {
                                            selectedItem(item.value);
                                            open.value = false;
                                          }
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString(item.label), 1)
                                          ]),
                                          _: 2
                                        }, 1032, ["value", "onSelect"]);
                                      }), 128))
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_UiCommandGroup, null, {
                                  default: withCtx(() => [
                                    (openBlock(true), createBlock(Fragment, null, renderList(_ctx.items, (item) => {
                                      return openBlock(), createBlock(_component_UiCommandItem, {
                                        key: item.value,
                                        value: item.label,
                                        onSelect: ($event) => {
                                          selectedItem(item.value);
                                          open.value = false;
                                        }
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString(item.label), 1)
                                        ]),
                                        _: 2
                                      }, 1032, ["value", "onSelect"]);
                                    }), 128))
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
                          createVNode(_component_UiCommandInput, { placeholder: "Search item..." }),
                          createVNode(_component_UiCommandEmpty, null, {
                            default: withCtx(() => [
                              createTextVNode("No item found.")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_UiCommandList, null, {
                            default: withCtx(() => [
                              createVNode(_component_UiCommandGroup, null, {
                                default: withCtx(() => [
                                  (openBlock(true), createBlock(Fragment, null, renderList(_ctx.items, (item) => {
                                    return openBlock(), createBlock(_component_UiCommandItem, {
                                      key: item.value,
                                      value: item.label,
                                      onSelect: ($event) => {
                                        selectedItem(item.value);
                                        open.value = false;
                                      }
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(item.label), 1)
                                      ]),
                                      _: 2
                                    }, 1032, ["value", "onSelect"]);
                                  }), 128))
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
                } else {
                  return [
                    createVNode(_component_UiCommand, {
                      modelValue: unref(value),
                      "onUpdate:modelValue": ($event) => isRef(value) ? value.value = $event : null
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_UiCommandInput, { placeholder: "Search item..." }),
                        createVNode(_component_UiCommandEmpty, null, {
                          default: withCtx(() => [
                            createTextVNode("No item found.")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_UiCommandList, null, {
                          default: withCtx(() => [
                            createVNode(_component_UiCommandGroup, null, {
                              default: withCtx(() => [
                                (openBlock(true), createBlock(Fragment, null, renderList(_ctx.items, (item) => {
                                  return openBlock(), createBlock(_component_UiCommandItem, {
                                    key: item.value,
                                    value: item.label,
                                    onSelect: ($event) => {
                                      selectedItem(item.value);
                                      open.value = false;
                                    }
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(item.label), 1)
                                    ]),
                                    _: 2
                                  }, 1032, ["value", "onSelect"]);
                                }), 128))
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }, 8, ["modelValue", "onUpdate:modelValue"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_UiPopoverTrigger, { "as-child": "" }, {
                default: withCtx(() => [
                  createVNode(_component_UiButton, {
                    variant: "outline",
                    role: "combobox",
                    "aria-expanded": unref(open),
                    class: "justify-between"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(unref(value) ? unref(value) : `${_ctx.label}...`), 1)
                    ]),
                    _: 1
                  }, 8, ["aria-expanded"])
                ]),
                _: 1
              }),
              createVNode(_component_UiPopoverContent, { class: "p-0" }, {
                default: withCtx(() => [
                  createVNode(_component_UiCommand, {
                    modelValue: unref(value),
                    "onUpdate:modelValue": ($event) => isRef(value) ? value.value = $event : null
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_UiCommandInput, { placeholder: "Search item..." }),
                      createVNode(_component_UiCommandEmpty, null, {
                        default: withCtx(() => [
                          createTextVNode("No item found.")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_UiCommandList, null, {
                        default: withCtx(() => [
                          createVNode(_component_UiCommandGroup, null, {
                            default: withCtx(() => [
                              (openBlock(true), createBlock(Fragment, null, renderList(_ctx.items, (item) => {
                                return openBlock(), createBlock(_component_UiCommandItem, {
                                  key: item.value,
                                  value: item.label,
                                  onSelect: ($event) => {
                                    selectedItem(item.value);
                                    open.value = false;
                                  }
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(item.label), 1)
                                  ]),
                                  _: 2
                                }, 1032, ["value", "onSelect"]);
                              }), 128))
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/my/ComboboxModels.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined;
};

export { _sfc_main as _ };
//# sourceMappingURL=ComboboxModels-D6B6rKrJ.mjs.map
