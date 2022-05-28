import "./pinia.js";
import { _ as _export_sfc } from "../index.js";
import { p as openBlock, q as createElementBlock, G as createVNode, s as createBaseVNode, J as resolveComponent } from "./vue.js";
import "./tinymce.js";
import "./tinymce-plugin-routes.js";
const _sfc_main = {
  name: "DemoAllIframe"
};
const _hoisted_1 = /* @__PURE__ */ createBaseVNode("iframe", {
  id: "demoIframeID",
  name: "demoIframeID",
  src: "/tinymce/indexall.html",
  frameborder: "0",
  scrolling: "no",
  width: "100%",
  onload: "autoIframeHeight(this)"
}, null, -1);
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_PagesRouter = resolveComponent("PagesRouter");
  return openBlock(), createElementBlock("div", null, [
    _hoisted_1,
    createVNode(_component_PagesRouter, { pagesName: "demoall" })
  ]);
}
var demoAll = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export { demoAll as default };
