import"./pinia.js";import{J as s}from"./vue.js";const l=s({components:{},template:`<div class="fv-mardown-html"><div class="fv-mardown-main"><h1 id="\u5FEB\u901F\u4E0A\u624B" tabindex="-1"><a class="header-anchor" href="#\u5FEB\u901F\u4E0A\u624B">#</a> \u5FEB\u901F\u4E0A\u624B</h1>
<hr>
<fv-toc><nav class="table-of-contents"><ul><li><a href="#%E5%BF%AB%E9%80%9F%E4%B8%8A%E6%89%8B"> \u5FEB\u901F\u4E0A\u624B</a><ul><li><a href="#%E6%96%B9%E5%BC%8F1%EF%BC%88%E4%BD%BF%E7%94%A8-tinymce-plugin-%E5%BA%93%EF%BC%89"> \u65B9\u5F0F1\uFF08\u4F7F\u7528 tinymce-plugin \u5E93\uFF09</a><ul><li><a href="#cdn"> CDN</a><ul><li><a href="#%E9%A1%B9%E7%9B%AE%E4%B8%AD%E4%BD%BF%E7%94%A8"> \u9879\u76EE\u4E2D\u4F7F\u7528</a></li></ul></li><li><a href="#npm"> NPM</a><ul><li><a href="#%E4%B8%8B%E8%BD%BD-tinymce-plugin"> \u4E0B\u8F7D tinymce-plugin</a></li><li><a href="#%E9%A1%B9%E7%9B%AE%E4%B8%AD%E4%BD%BF%E7%94%A8-1"> \u9879\u76EE\u4E2D\u4F7F\u7528</a></li></ul></li></ul></li><li><a href="#%E6%96%B9%E5%BC%8F2-%E4%BD%BF%E7%94%A8%E5%8D%95%E7%8B%AC%40tinymce-plugin%2Ftp-importword"> \u65B9\u5F0F2 \u4F7F\u7528\u5355\u72EC@tinymce-plugin/tp-importword</a></li><li><a href="#%E6%96%B9%E5%BC%8F3-%E8%87%AA%E8%A1%8C%E4%B8%8B%E8%BD%BD%E4%BD%BF%E7%94%A8"> \u65B9\u5F0F3 \u81EA\u884C\u4E0B\u8F7D\u4F7F\u7528</a></li></ul></li></ul></nav></fv-toc><h2 id="\u65B9\u5F0F1\uFF08\u4F7F\u7528 tinymce-plugin \u5E93\uFF09" tabindex="-1"><a class="header-anchor" href="#\u65B9\u5F0F1\uFF08\u4F7F\u7528 tinymce-plugin \u5E93\uFF09">#</a> \u65B9\u5F0F1\uFF08\u4F7F\u7528 tinymce-plugin \u5E93\uFF09</h2>
<h3 id="CDN" tabindex="-1"><a class="header-anchor" href="#CDN">#</a> CDN</h3>
<pre class="hljs fv-hljs "><ul class="highlight-line-number "  ><li ><span>1</span></li><li ><span>2</span></li><li ><span>3</span></li><li ><span>4</span></li><li ><span>5</span></li><li ><span>6</span></li><li ><span>7</span></li><li ><span>8</span></li><li ><span>9</span></li><li ><span>10</span></li><li ><span>11</span></li><li ><span>12</span></li></ul><code class=" hljs  hljs-html" @click.stop="()=>{}"><span class="hljs-tag">&lt;<span class="hljs-name">script</span> <span class="hljs-attr">src</span>=<span class="hljs-string">&quot;https://unpkg.com/tinymce-plugin/plugins/tpImportword/plugin.min.js&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span><span class="hljs-comment">&lt;!--\u5F15\u5165--&gt;</span>

<span class="hljs-comment">&lt;!-- \u4F7F\u7528 --&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="language-javascript">
   tinymce.<span class="hljs-title function_">init</span>({
  ...
   <span class="hljs-attr">plugins</span>: <span class="hljs-string">&quot;tpImportword&quot;</span>
   <span class="hljs-attr">toolbar</span>: <span class="hljs-string">&quot;tpImportword&quot;</span>
  ...
 })
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>

</code><div class="language-text" >html</div></pre>
<h4 id="\u9879\u76EE\u4E2D\u4F7F\u7528" tabindex="-1"><a class="header-anchor" href="#\u9879\u76EE\u4E2D\u4F7F\u7528">#</a> \u9879\u76EE\u4E2D\u4F7F\u7528</h4>
<pre class="hljs fv-hljs highlight-line"><ul class="highlight-line-number "  ><li class="line"><span>1</span></li><li ><span>2</span></li><li ><span>3</span></li><li class="line"><span>4</span></li><li class="line"><span>5</span></li><li ><span>6</span></li><li ><span>7</span></li></ul><code class=" hljs  hljs-js" @click.stop="()=>{}"> <span class="hljs-keyword">import</span> <span class="hljs-string">&quot;tinymce-plugin/plugins/tpImportword/plugin.js&quot;</span>;
 tinymce.<span class="hljs-title function_">init</span>({
  ...
   <span class="hljs-attr">plugins</span>: <span class="hljs-string">&quot;tpImportword&quot;</span>
   <span class="hljs-attr">toolbar</span>: <span class="hljs-string">&quot;tpImportword&quot;</span>
  ...
 })
</code><div class="language-text" >js</div></pre>
<h3 id="NPM" tabindex="-1"><a class="header-anchor" href="#NPM">#</a> NPM</h3>
<h4 id="\u4E0B\u8F7D tinymce-plugin" tabindex="-1"><a class="header-anchor" href="#\u4E0B\u8F7D tinymce-plugin">#</a> \u4E0B\u8F7D tinymce-plugin</h4>
<codeGroup>
 <codeGroupItem title="NPM" active>
<pre class="hljs fv-hljs "><ul class="highlight-line-number  nonumber"  ><li ><span>1</span></li></ul><code class=" hljs  hljs-sh" @click.stop="()=>{}"><span class="hljs-built_in">npm</span> i tinymce-plugin 
</code><div class="language-text" >sh</div></pre>
</codeGroupItem>
<codeGroupItem title="YARN">
<pre class="hljs fv-hljs "><ul class="highlight-line-number  nonumber"  ><li ><span>1</span></li></ul><code class=" hljs  hljs-sh" @click.stop="()=>{}"><span class="hljs-built_in">yarn</span> <span class="hljs-built_in">add</span> tinymce-plugin -D 
</code><div class="language-text" >sh</div></pre>
</codeGroupItem>
</codeGroup>
<h4 id="\u9879\u76EE\u4E2D\u4F7F\u7528-1" tabindex="-1"><a class="header-anchor" href="#\u9879\u76EE\u4E2D\u4F7F\u7528-1">#</a> \u9879\u76EE\u4E2D\u4F7F\u7528</h4>
<pre class="hljs fv-hljs highlight-line"><ul class="highlight-line-number "  ><li class="line"><span>1</span></li><li ><span>2</span></li><li ><span>3</span></li><li class="line"><span>4</span></li><li class="line"><span>5</span></li><li ><span>6</span></li><li ><span>7</span></li><li ><span>8</span></li></ul><code class=" hljs  hljs-js" @click.stop="()=>{}"> <span class="hljs-keyword">import</span> <span class="hljs-string">&quot;tinymce-plugin/plugins/tpImportword/plugin.js&quot;</span>;
 tinymce.<span class="hljs-title function_">init</span>({
  ...
   <span class="hljs-attr">plugins</span>: <span class="hljs-string">&quot;tpImportword&quot;</span>
   <span class="hljs-attr">toolbar</span>: <span class="hljs-string">&quot;tpImportword&quot;</span>
  ...
 })

</code><div class="language-text" >js</div></pre>
<h2 id="\u65B9\u5F0F2 \u4F7F\u7528\u5355\u72EC@tinymce-plugin/tp-importword" tabindex="-1"><a class="header-anchor" href="#\u65B9\u5F0F2 \u4F7F\u7528\u5355\u72EC@tinymce-plugin/tp-importword">#</a> \u65B9\u5F0F2 \u4F7F\u7528\u5355\u72EC@tinymce-plugin/tp-importword</h2>
<h2 id="\u65B9\u5F0F3 \u81EA\u884C\u4E0B\u8F7D\u4F7F\u7528" tabindex="-1"><a class="header-anchor" href="#\u65B9\u5F0F3 \u81EA\u884C\u4E0B\u8F7D\u4F7F\u7528">#</a> \u65B9\u5F0F3 \u81EA\u884C\u4E0B\u8F7D\u4F7F\u7528</h2>
<p>\u8FD9\u4E9B\u6587\u4EF6\u53EF\u4EE5\u5728 <a href="https://unpkg.com/browse/tinymce-plugin/" target="_blank"><em><em><strong>unpkg</strong></em></em></a> \u6216\u8005<a href="https://cdn.jsdelivr.net/npm/tinymce-plugin/" target="_blank"><em><em><strong>jsDelivr</strong></em></em></a>  \u8FD9\u4E9B CDN \u4E0A\u6D4F\u89C8\u548C\u4E0B\u8F7D,\u81EA\u884C\u5B58\u653E\u4E0E\u4F7F\u7528</p>
</div></div><PagesRouter  docPath="__docs__/quickStart.md" mapType="docs" docRepo="tp-importword" pagesName="quickStart_t_hkdhn41653274328306_p_" />`});export{l as default};
