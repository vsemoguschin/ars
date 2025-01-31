import { useSSRContext, defineComponent, unref, mergeProps, withCtx, renderSlot, computed, createVNode, createTextVNode, toDisplayString, openBlock, createBlock, createCommentVNode, ref, isRef, Fragment, renderList } from 'vue';
import { ssrRenderComponent, ssrRenderSlot, ssrInterpolate, ssrRenderAttrs, ssrRenderList } from 'vue/server-renderer';
import { useForwardPropsEmits, PopoverRoot, PopoverPortal, PopoverContent, PopoverTrigger, ComboboxRoot, ComboboxGroup, ComboboxLabel, useForwardProps, ComboboxInput, ComboboxItem, ComboboxContent } from 'radix-vue';
import { c as cn, _ as _sfc_main$9 } from './index-BB7KKil7.mjs';
import { MagnifyingGlassIcon } from '@radix-icons/vue';

const _sfc_main$8 = /* @__PURE__ */ defineComponent({
  __name: "Popover",
  __ssrInlineRender: true,
  props: {
    defaultOpen: { type: Boolean },
    open: { type: Boolean },
    modal: { type: Boolean }
  },
  emits: ["update:open"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const forwarded = useForwardPropsEmits(props, emits);
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(PopoverRoot), mergeProps(unref(forwarded), _attrs), {
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
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/popover/Popover.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : undefined;
};
const _sfc_main$7 = /* @__PURE__ */ defineComponent({
  ...{
    inheritAttrs: false
  },
  __name: "PopoverContent",
  __ssrInlineRender: true,
  props: {
    forceMount: { type: Boolean },
    trapFocus: { type: Boolean },
    side: {},
    sideOffset: { default: 4 },
    align: { default: "center" },
    alignOffset: {},
    avoidCollisions: { type: Boolean },
    collisionBoundary: {},
    collisionPadding: {},
    arrowPadding: {},
    sticky: {},
    hideWhenDetached: { type: Boolean },
    updatePositionStrategy: {},
    prioritizePosition: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    disableOutsidePointerEvents: { type: Boolean },
    class: {}
  },
  emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside", "openAutoFocus", "closeAutoFocus"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const delegatedProps = computed(() => {
      const { class: _, ...delegated } = props;
      return delegated;
    });
    const forwarded = useForwardPropsEmits(delegatedProps, emits);
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(PopoverPortal), _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(PopoverContent), mergeProps({ ...unref(forwarded), ..._ctx.$attrs }, {
              class: unref(cn)(
                "z-50 w-72 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
                props.class
              )
            }), {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push3, _parent3, _scopeId2);
                } else {
                  return [
                    renderSlot(_ctx.$slots, "default")
                  ];
                }
              }),
              _: 3
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(PopoverContent), mergeProps({ ...unref(forwarded), ..._ctx.$attrs }, {
                class: unref(cn)(
                  "z-50 w-72 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
                  props.class
                )
              }), {
                default: withCtx(() => [
                  renderSlot(_ctx.$slots, "default")
                ]),
                _: 3
              }, 16, ["class"])
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
});
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/popover/PopoverContent.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : undefined;
};
const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  __name: "PopoverTrigger",
  __ssrInlineRender: true,
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(PopoverTrigger), mergeProps(props, _attrs), {
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
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/popover/PopoverTrigger.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : undefined;
};
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "Command",
  __ssrInlineRender: true,
  props: {
    modelValue: { default: "" },
    defaultValue: {},
    open: { type: Boolean, default: true },
    defaultOpen: { type: Boolean },
    searchTerm: {},
    selectedValue: {},
    multiple: { type: Boolean },
    disabled: { type: Boolean },
    name: {},
    dir: {},
    filterFunction: {},
    displayValue: {},
    resetSearchTermOnBlur: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  emits: ["update:modelValue", "update:open", "update:searchTerm", "update:selectedValue"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const delegatedProps = computed(() => {
      const { class: _, ...delegated } = props;
      return delegated;
    });
    const forwarded = useForwardPropsEmits(delegatedProps, emits);
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(ComboboxRoot), mergeProps(unref(forwarded), {
        class: unref(cn)("flex h-full w-full flex-col overflow-hidden rounded-md bg-popover text-popover-foreground", props.class)
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
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/command/Command.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : undefined;
};
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "CommandGroup",
  __ssrInlineRender: true,
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {},
    heading: {}
  },
  setup(__props) {
    const props = __props;
    const delegatedProps = computed(() => {
      const { class: _, ...delegated } = props;
      return delegated;
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(ComboboxGroup), mergeProps(delegatedProps.value, {
        class: unref(cn)("overflow-hidden p-1 text-foreground [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground", props.class)
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (_ctx.heading) {
              _push2(ssrRenderComponent(unref(ComboboxLabel), { class: "px-2 py-1.5 text-xs font-medium text-muted-foreground" }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(_ctx.heading)}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(_ctx.heading), 1)
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              _ctx.heading ? (openBlock(), createBlock(unref(ComboboxLabel), {
                key: 0,
                class: "px-2 py-1.5 text-xs font-medium text-muted-foreground"
              }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(_ctx.heading), 1)
                ]),
                _: 1
              })) : createCommentVNode("", true),
              renderSlot(_ctx.$slots, "default")
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
});
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/command/CommandGroup.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : undefined;
};
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  ...{
    inheritAttrs: false
  },
  __name: "CommandInput",
  __ssrInlineRender: true,
  props: {
    type: {},
    disabled: { type: Boolean },
    autoFocus: { type: Boolean },
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
    const forwardedProps = useForwardProps(delegatedProps);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: "flex items-center border-b px-3",
        "cmdk-input-wrapper": ""
      }, _attrs))}>`);
      _push(ssrRenderComponent(unref(MagnifyingGlassIcon), { class: "mr-2 h-4 w-4 shrink-0 opacity-50" }, null, _parent));
      _push(ssrRenderComponent(unref(ComboboxInput), mergeProps({ ...unref(forwardedProps), ..._ctx.$attrs }, {
        "auto-focus": "",
        class: unref(cn)("flex h-10 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50", props.class)
      }), null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/command/CommandInput.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : undefined;
};
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "CommandItem",
  __ssrInlineRender: true,
  props: {
    value: {},
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  emits: ["select"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const delegatedProps = computed(() => {
      const { class: _, ...delegated } = props;
      return delegated;
    });
    const forwarded = useForwardPropsEmits(delegatedProps, emits);
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(ComboboxItem), mergeProps(unref(forwarded), {
        class: unref(cn)("relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none data-[highlighted]:bg-accent data-[highlighted]:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50", props.class)
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
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/command/CommandItem.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : undefined;
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "CommandList",
  __ssrInlineRender: true,
  props: {
    forceMount: { type: Boolean },
    position: {},
    bodyLock: { type: Boolean },
    dismissable: { type: Boolean, default: false },
    side: {},
    sideOffset: {},
    align: {},
    alignOffset: {},
    avoidCollisions: { type: Boolean },
    collisionBoundary: {},
    collisionPadding: {},
    arrowPadding: {},
    sticky: {},
    hideWhenDetached: { type: Boolean },
    updatePositionStrategy: {},
    prioritizePosition: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    disableOutsidePointerEvents: { type: Boolean },
    class: {}
  },
  emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const delegatedProps = computed(() => {
      const { class: _, ...delegated } = props;
      return delegated;
    });
    const forwarded = useForwardPropsEmits(delegatedProps, emits);
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(ComboboxContent), mergeProps(unref(forwarded), {
        class: unref(cn)("max-h-[300px] overflow-y-auto overflow-x-hidden", props.class)
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div role="presentation"${_scopeId}>`);
            ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { role: "presentation" }, [
                renderSlot(_ctx.$slots, "default")
              ])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/command/CommandList.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : undefined;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Combobox",
  __ssrInlineRender: true,
  props: {
    items: {},
    label: {}
  },
  emits: ["selectedItem"],
  setup(__props, { emit: __emit }) {
    const open = ref(false);
    const value = ref("");
    const newItem = ref("");
    const check = (e) => {
      newItem.value = e.target.value;
      return;
    };
    const emit = __emit;
    const selectedItem = (value2) => {
      emit("selectedItem", value2);
      return;
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UiPopover = _sfc_main$8;
      const _component_UiPopoverTrigger = _sfc_main$6;
      const _component_UiButton = _sfc_main$9;
      const _component_UiPopoverContent = _sfc_main$7;
      const _component_UiCommand = _sfc_main$5;
      const _component_UiCommandInput = _sfc_main$3;
      const _component_UiCommandList = _sfc_main$1;
      const _component_UiCommandGroup = _sfc_main$4;
      const _component_UiCommandItem = _sfc_main$2;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_UiPopover, {
        open: unref(open),
        "onUpdate:open": ($event) => isRef(open) ? open.value = $event : null
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UiPopoverTrigger, { "as-child": "" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_UiButton, {
                    variant: "outline",
                    role: "combobox",
                    "aria-expanded": unref(open),
                    class: "w-full justify-between"
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
                  _push3(`</div>`);
                } else {
                  return [
                    createVNode("div", null, [
                      createVNode(_component_UiButton, {
                        variant: "outline",
                        role: "combobox",
                        "aria-expanded": unref(open),
                        class: "w-full justify-between"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(unref(value) ? unref(value) : `${_ctx.label}...`), 1)
                        ]),
                        _: 1
                      }, 8, ["aria-expanded"])
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UiPopoverContent, { class: "p-0" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UiCommand, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_UiCommandInput, {
                          onInput: check,
                          class: "h-9",
                          placeholder: "\u041D\u0430\u0439\u0442\u0438 \u0438\u043B\u0438 \u0432\u0432\u0435\u0441\u0442\u0438..."
                        }, null, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_UiCommandList, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_UiCommandGroup, null, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`<!--[-->`);
                                    ssrRenderList(_ctx.items, (item) => {
                                      _push6(ssrRenderComponent(_component_UiCommandItem, {
                                        key: item,
                                        value: item,
                                        onSelect: (ev) => {
                                          if (typeof ev.detail.value === "string") {
                                            value.value = ev.detail.value;
                                          }
                                          open.value = false;
                                          selectedItem(unref(value));
                                        }
                                      }, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(`${ssrInterpolate(item)}`);
                                          } else {
                                            return [
                                              createTextVNode(toDisplayString(item), 1)
                                            ];
                                          }
                                        }),
                                        _: 2
                                      }, _parent6, _scopeId5));
                                    });
                                    _push6(`<!--]-->`);
                                    if (unref(newItem) !== "") {
                                      _push6(ssrRenderComponent(_component_UiCommandItem, {
                                        key: unref(newItem),
                                        value: unref(newItem),
                                        onSelect: (ev) => {
                                          if (typeof ev.detail.value === "string") {
                                            value.value = ev.detail.value;
                                          }
                                          open.value = false;
                                          selectedItem(unref(value));
                                        }
                                      }, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(`${ssrInterpolate(unref(newItem))}`);
                                          } else {
                                            return [
                                              createTextVNode(toDisplayString(unref(newItem)), 1)
                                            ];
                                          }
                                        }),
                                        _: 1
                                      }, _parent6, _scopeId5));
                                    } else {
                                      _push6(`<!---->`);
                                    }
                                  } else {
                                    return [
                                      (openBlock(true), createBlock(Fragment, null, renderList(_ctx.items, (item) => {
                                        return openBlock(), createBlock(_component_UiCommandItem, {
                                          key: item,
                                          value: item,
                                          onSelect: (ev) => {
                                            if (typeof ev.detail.value === "string") {
                                              value.value = ev.detail.value;
                                            }
                                            open.value = false;
                                            selectedItem(unref(value));
                                          }
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString(item), 1)
                                          ]),
                                          _: 2
                                        }, 1032, ["value", "onSelect"]);
                                      }), 128)),
                                      unref(newItem) !== "" ? (openBlock(), createBlock(_component_UiCommandItem, {
                                        key: unref(newItem),
                                        value: unref(newItem),
                                        onSelect: (ev) => {
                                          if (typeof ev.detail.value === "string") {
                                            value.value = ev.detail.value;
                                          }
                                          open.value = false;
                                          selectedItem(unref(value));
                                        }
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString(unref(newItem)), 1)
                                        ]),
                                        _: 1
                                      }, 8, ["value", "onSelect"])) : createCommentVNode("", true)
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
                                        key: item,
                                        value: item,
                                        onSelect: (ev) => {
                                          if (typeof ev.detail.value === "string") {
                                            value.value = ev.detail.value;
                                          }
                                          open.value = false;
                                          selectedItem(unref(value));
                                        }
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString(item), 1)
                                        ]),
                                        _: 2
                                      }, 1032, ["value", "onSelect"]);
                                    }), 128)),
                                    unref(newItem) !== "" ? (openBlock(), createBlock(_component_UiCommandItem, {
                                      key: unref(newItem),
                                      value: unref(newItem),
                                      onSelect: (ev) => {
                                        if (typeof ev.detail.value === "string") {
                                          value.value = ev.detail.value;
                                        }
                                        open.value = false;
                                        selectedItem(unref(value));
                                      }
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(unref(newItem)), 1)
                                      ]),
                                      _: 1
                                    }, 8, ["value", "onSelect"])) : createCommentVNode("", true)
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
                          createVNode(_component_UiCommandInput, {
                            onInput: check,
                            class: "h-9",
                            placeholder: "\u041D\u0430\u0439\u0442\u0438 \u0438\u043B\u0438 \u0432\u0432\u0435\u0441\u0442\u0438..."
                          }),
                          createVNode(_component_UiCommandList, null, {
                            default: withCtx(() => [
                              createVNode(_component_UiCommandGroup, null, {
                                default: withCtx(() => [
                                  (openBlock(true), createBlock(Fragment, null, renderList(_ctx.items, (item) => {
                                    return openBlock(), createBlock(_component_UiCommandItem, {
                                      key: item,
                                      value: item,
                                      onSelect: (ev) => {
                                        if (typeof ev.detail.value === "string") {
                                          value.value = ev.detail.value;
                                        }
                                        open.value = false;
                                        selectedItem(unref(value));
                                      }
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(item), 1)
                                      ]),
                                      _: 2
                                    }, 1032, ["value", "onSelect"]);
                                  }), 128)),
                                  unref(newItem) !== "" ? (openBlock(), createBlock(_component_UiCommandItem, {
                                    key: unref(newItem),
                                    value: unref(newItem),
                                    onSelect: (ev) => {
                                      if (typeof ev.detail.value === "string") {
                                        value.value = ev.detail.value;
                                      }
                                      open.value = false;
                                      selectedItem(unref(value));
                                    }
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(unref(newItem)), 1)
                                    ]),
                                    _: 1
                                  }, 8, ["value", "onSelect"])) : createCommentVNode("", true)
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
                    createVNode(_component_UiCommand, null, {
                      default: withCtx(() => [
                        createVNode(_component_UiCommandInput, {
                          onInput: check,
                          class: "h-9",
                          placeholder: "\u041D\u0430\u0439\u0442\u0438 \u0438\u043B\u0438 \u0432\u0432\u0435\u0441\u0442\u0438..."
                        }),
                        createVNode(_component_UiCommandList, null, {
                          default: withCtx(() => [
                            createVNode(_component_UiCommandGroup, null, {
                              default: withCtx(() => [
                                (openBlock(true), createBlock(Fragment, null, renderList(_ctx.items, (item) => {
                                  return openBlock(), createBlock(_component_UiCommandItem, {
                                    key: item,
                                    value: item,
                                    onSelect: (ev) => {
                                      if (typeof ev.detail.value === "string") {
                                        value.value = ev.detail.value;
                                      }
                                      open.value = false;
                                      selectedItem(unref(value));
                                    }
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(item), 1)
                                    ]),
                                    _: 2
                                  }, 1032, ["value", "onSelect"]);
                                }), 128)),
                                unref(newItem) !== "" ? (openBlock(), createBlock(_component_UiCommandItem, {
                                  key: unref(newItem),
                                  value: unref(newItem),
                                  onSelect: (ev) => {
                                    if (typeof ev.detail.value === "string") {
                                      value.value = ev.detail.value;
                                    }
                                    open.value = false;
                                    selectedItem(unref(value));
                                  }
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(unref(newItem)), 1)
                                  ]),
                                  _: 1
                                }, 8, ["value", "onSelect"])) : createCommentVNode("", true)
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
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_UiPopoverTrigger, { "as-child": "" }, {
                default: withCtx(() => [
                  createVNode("div", null, [
                    createVNode(_component_UiButton, {
                      variant: "outline",
                      role: "combobox",
                      "aria-expanded": unref(open),
                      class: "w-full justify-between"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(unref(value) ? unref(value) : `${_ctx.label}...`), 1)
                      ]),
                      _: 1
                    }, 8, ["aria-expanded"])
                  ])
                ]),
                _: 1
              }),
              createVNode(_component_UiPopoverContent, { class: "p-0" }, {
                default: withCtx(() => [
                  createVNode(_component_UiCommand, null, {
                    default: withCtx(() => [
                      createVNode(_component_UiCommandInput, {
                        onInput: check,
                        class: "h-9",
                        placeholder: "\u041D\u0430\u0439\u0442\u0438 \u0438\u043B\u0438 \u0432\u0432\u0435\u0441\u0442\u0438..."
                      }),
                      createVNode(_component_UiCommandList, null, {
                        default: withCtx(() => [
                          createVNode(_component_UiCommandGroup, null, {
                            default: withCtx(() => [
                              (openBlock(true), createBlock(Fragment, null, renderList(_ctx.items, (item) => {
                                return openBlock(), createBlock(_component_UiCommandItem, {
                                  key: item,
                                  value: item,
                                  onSelect: (ev) => {
                                    if (typeof ev.detail.value === "string") {
                                      value.value = ev.detail.value;
                                    }
                                    open.value = false;
                                    selectedItem(unref(value));
                                  }
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(item), 1)
                                  ]),
                                  _: 2
                                }, 1032, ["value", "onSelect"]);
                              }), 128)),
                              unref(newItem) !== "" ? (openBlock(), createBlock(_component_UiCommandItem, {
                                key: unref(newItem),
                                value: unref(newItem),
                                onSelect: (ev) => {
                                  if (typeof ev.detail.value === "string") {
                                    value.value = ev.detail.value;
                                  }
                                  open.value = false;
                                  selectedItem(unref(value));
                                }
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(unref(newItem)), 1)
                                ]),
                                _: 1
                              }, 8, ["value", "onSelect"])) : createCommentVNode("", true)
                            ]),
                            _: 1
                          })
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
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/my/Combobox.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined;
};

export { _sfc_main as _, _sfc_main$8 as a, _sfc_main$6 as b, _sfc_main$7 as c, _sfc_main$5 as d, _sfc_main$3 as e, _sfc_main$1 as f, _sfc_main$4 as g, _sfc_main$2 as h };
//# sourceMappingURL=Combobox-DOwrg-P2.mjs.map
