import { _ as _sfc_main$1 } from './index-BB7KKil7.mjs';
import { _ as _sfc_main$1$1, a as _sfc_main$3 } from './Input-BHo_TP6t.mjs';
import { _ as _sfc_main$2 } from './Combobox-DOwrg-P2.mjs';
import { defineComponent, ref, mergeProps, unref, withCtx, createTextVNode, useSSRContext } from 'vue';
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
      title: "\u0422\u0440\u0430\u043D\u0441\u043F\u043E\u0440\u0442"
    });
    const vehicleId = route.params.id;
    const vehicleForm = ref({
      vehicle_type: "",
      registration_number: "",
      volume: 0,
      insurance_expiry: "",
      mkad_pass_expiry: "",
      status: ""
    });
    const vehicleTypes = ref([]);
    const loading = ref(true);
    const error = ref(null);
    const successMessage = ref("");
    const saveVehicle = async () => {
      try {
        const { data: updatedVehicle } = await $useApi.patch(`/vehicles/${vehicleId}/`, vehicleForm.value);
        successMessage.value = "\u0422\u0440\u0430\u043D\u0441\u043F\u043E\u0440\u0442\u043D\u043E\u0435 \u0441\u0440\u0435\u0434\u0441\u0442\u0432\u043E \u0443\u0441\u043F\u0435\u0448\u043D\u043E \u043E\u0431\u043D\u043E\u0432\u043B\u0435\u043D\u043E!";
        setTimeout(() => successMessage.value = "", 3e3);
        vehicleForm.value = updatedVehicle;
      } catch (err) {
        error.value = err.message;
      }
    };
    const deleteVehicle = async () => {
      try {
        const response = await $useApi.delete(`/vehicles/${vehicleId}`);
        console.log("\u0422\u0440\u0430\u043D\u0441\u043F\u043E\u0440\u0442\u043D\u043E\u0435 \u0441\u0440\u0435\u0434\u0441\u0442\u0432\u043E \u0443\u0434\u0430\u043B\u0435\u043D\u043E!");
        router.push("/vehicles");
      } catch (err) {
        console.error("\u041E\u0448\u0438\u0431\u043A\u0430 \u0443\u0434\u0430\u043B\u0435\u043D\u0438\u044F \u0442\u0440\u0430\u043D\u0441\u043F\u043E\u0440\u0442\u043D\u043E\u0433\u043E \u0441\u0440\u0435\u0434\u0441\u0442\u0432\u0430:", err);
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UiButton = _sfc_main$1;
      const _component_UiLabel = _sfc_main$1$1;
      const _component_MyCombobox = _sfc_main$2;
      const _component_UiInput = _sfc_main$3;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "p-6" }, _attrs))}><div class="flex gap-3">`);
      _push(ssrRenderComponent(_component_UiButton, {
        onClick: ($event) => unref(router).push("/vehicles"),
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
      _push(`<h1 class="text-2xl font-bold mb-4">\u0422\u0440\u0430\u043D\u0441\u043F\u043E\u0440\u0442</h1></div>`);
      if (unref(loading)) {
        _push(`<div class="text-center"><p>\u0417\u0430\u0433\u0440\u0443\u0437\u043A\u0430...</p></div>`);
      } else if (unref(error)) {
        _push(`<div class="text-red-500 text-center"><p>\u041E\u0448\u0438\u0431\u043A\u0430 \u0437\u0430\u0433\u0440\u0443\u0437\u043A\u0438: ${ssrInterpolate(unref(error))}</p></div>`);
      } else {
        _push(`<div class="flex flex-col gap-3"><div>`);
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
          class: "mt-2 w-full",
          items: unref(vehicleTypes).map((type) => type.name),
          label: unref(vehicleForm).vehicle_type,
          onSelectedItem: (value) => unref(vehicleForm).vehicle_type = value
        }, null, _parent));
        _push(`</div><div>`);
        _push(ssrRenderComponent(_component_UiLabel, { for: "registration_number" }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`\u041D\u043E\u043C\u0435\u0440 \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u0438`);
            } else {
              return [
                createTextVNode("\u041D\u043E\u043C\u0435\u0440 \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u0438")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(ssrRenderComponent(_component_UiInput, {
          class: "mt-2",
          id: "registration_number",
          modelValue: unref(vehicleForm).registration_number,
          "onUpdate:modelValue": ($event) => unref(vehicleForm).registration_number = $event,
          placeholder: "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043D\u043E\u043C\u0435\u0440 \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u0438"
        }, null, _parent));
        _push(`</div><div>`);
        _push(ssrRenderComponent(_component_UiLabel, { for: "volume" }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`\u041E\u0431\u044A\u0435\u043C`);
            } else {
              return [
                createTextVNode("\u041E\u0431\u044A\u0435\u043C")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(ssrRenderComponent(_component_UiInput, {
          class: "mt-2",
          id: "volume",
          type: "number",
          modelValue: unref(vehicleForm).volume,
          "onUpdate:modelValue": ($event) => unref(vehicleForm).volume = $event,
          placeholder: "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043E\u0431\u044A\u0435\u043C"
        }, null, _parent));
        _push(`</div><div>`);
        _push(ssrRenderComponent(_component_UiLabel, { for: "insurance_expiry" }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`\u0414\u0430\u0442\u0430 \u043E\u043A\u043E\u043D\u0447\u0430\u043D\u0438\u044F \u0441\u0442\u0440\u0430\u0445\u043E\u0432\u043A\u0438`);
            } else {
              return [
                createTextVNode("\u0414\u0430\u0442\u0430 \u043E\u043A\u043E\u043D\u0447\u0430\u043D\u0438\u044F \u0441\u0442\u0440\u0430\u0445\u043E\u0432\u043A\u0438")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(ssrRenderComponent(_component_UiInput, {
          class: "mt-2",
          id: "insurance_expiry",
          type: "date",
          modelValue: unref(vehicleForm).insurance_expiry,
          "onUpdate:modelValue": ($event) => unref(vehicleForm).insurance_expiry = $event
        }, null, _parent));
        _push(`</div><div>`);
        _push(ssrRenderComponent(_component_UiLabel, { for: "mkad_pass_expiry" }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`\u0414\u0430\u0442\u0430 \u043E\u043A\u043E\u043D\u0447\u0430\u043D\u0438\u044F \u043F\u0440\u043E\u043F\u0443\u0441\u043A\u0430 \u041C\u041A\u0410\u0414`);
            } else {
              return [
                createTextVNode("\u0414\u0430\u0442\u0430 \u043E\u043A\u043E\u043D\u0447\u0430\u043D\u0438\u044F \u043F\u0440\u043E\u043F\u0443\u0441\u043A\u0430 \u041C\u041A\u0410\u0414")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(ssrRenderComponent(_component_UiInput, {
          class: "mt-2",
          id: "mkad_pass_expiry",
          type: "date",
          modelValue: unref(vehicleForm).mkad_pass_expiry,
          "onUpdate:modelValue": ($event) => unref(vehicleForm).mkad_pass_expiry = $event
        }, null, _parent));
        _push(`</div><div>`);
        _push(ssrRenderComponent(_component_UiLabel, { for: "status" }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`\u0421\u0442\u0430\u0442\u0443\u0441`);
            } else {
              return [
                createTextVNode("\u0421\u0442\u0430\u0442\u0443\u0441")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(ssrRenderComponent(_component_UiInput, {
          class: "mt-2",
          id: "status",
          modelValue: unref(vehicleForm).status,
          "onUpdate:modelValue": ($event) => unref(vehicleForm).status = $event,
          placeholder: "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0441\u0442\u0430\u0442\u0443\u0441"
        }, null, _parent));
        _push(`</div><div class="mt-4 flex justify-between">`);
        _push(ssrRenderComponent(_component_UiButton, { onClick: deleteVehicle }, {
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
        _push(ssrRenderComponent(_component_UiButton, { onClick: saveVehicle }, {
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
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/vehicles/[id].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined;
};

export { _sfc_main as default };
//# sourceMappingURL=_id_-B5U-1G_U.mjs.map
