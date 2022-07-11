System.register(["./pinia-legacy.js","./vue-legacy.js"],(function(s){"use strict";var n;return{setters:[function(){},function(s){n=s.M}],execute:function(){s("default",n({components:{},template:'<div class="fv-mardown-html"><div class="fv-mardown-main tp-doc"><h1 id="快速上手" tabindex="-1"><a class="header-anchor" href="#快速上手">#</a> 快速上手</h1>\n<hr>\n<fv-toc><nav class="table-of-contents"></nav></fv-toc><h2 id="下载安装" tabindex="-1"><a class="header-anchor" href="#下载安装">#</a> 下载安装</h2>\n<p>同时更新维护 <a href="https://www.npmjs.com/package/tinymce-plugin" target="_blank"><em><em><strong>tinymce-plugin</strong></em></em></a> 和 <a href="https://www.npmjs.com/package/@npkg/tinymce-plugin" target="_blank"><em><em><strong>@npkg/tinymce-plugin</strong></em></em></a> 中。（二者同步）</p>\n<h3 id="CDN" tabindex="-1"><a class="header-anchor" href="#CDN">#</a> CDN</h3>\n<pre class="hljs fv-hljs "><ul class="highlight-line-number  nonumber"  ><li ><span>1</span></li></ul><code class=" hljs  hljs-html" @click.stop="()=>{}"><span class="hljs-tag">&lt;<span class="hljs-name">script</span> <span class="hljs-attr">src</span>=<span class="hljs-string">&quot;https://unpkg.com/tinymce-plugin&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>\n</code><div class="language-text" >html</div></pre>\n<p>或</p>\n<pre class="hljs fv-hljs "><ul class="highlight-line-number  nonumber"  ><li ><span>1</span></li></ul><code class=" hljs  hljs-html" @click.stop="()=>{}"><span class="hljs-tag">&lt;<span class="hljs-name">script</span> <span class="hljs-attr">src</span>=<span class="hljs-string">&quot;https://unpkg.com/@npkg/tinymce-plugin&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>\n</code><div class="language-text" >html</div></pre>\n<h3 id="NPM" tabindex="-1"><a class="header-anchor" href="#NPM">#</a> NPM</h3>\n<codeGroup>\n <codeGroupItem title="NPM" active>\n<pre class="hljs fv-hljs "><ul class="highlight-line-number  nonumber"  ><li ><span>1</span></li></ul><code class=" hljs  hljs-sh" @click.stop="()=>{}"><span class="hljs-built_in">npm</span> i tinymce-plugin 或 <span class="hljs-built_in">npm</span> i @npkg/tinymce-plugin \n</code><div class="language-text" >sh</div></pre>\n</codeGroupItem>\n<codeGroupItem title="YARN">\n<pre class="hljs fv-hljs "><ul class="highlight-line-number  nonumber"  ><li ><span>1</span></li></ul><code class=" hljs  hljs-sh" @click.stop="()=>{}"><span class="hljs-built_in">yarn</span> <span class="hljs-built_in">add</span> tinymce-plugin -D 或 <span class="hljs-built_in">yarn</span> <span class="hljs-built_in">add</span> @npkg/tinymce-plugin -D\n</code><div class="language-text" >sh</div></pre>\n</codeGroupItem>\n</codeGroup>\n<p>或</p>\n<h3 id="自行下载" tabindex="-1"><a class="header-anchor" href="#自行下载">#</a> 自行下载</h3>\n<p>这些文件可以在 <a href="https://unpkg.com/browse/tinymce-plugin/" target="_blank"><em><em><strong>unpkg</strong></em></em></a> 或者<a href="https://cdn.jsdelivr.net/npm/tinymce-plugin/" target="_blank"><em><em><strong>jsDelivr</strong></em></em></a>  这些 CDN 上浏览和下载,自行存放</p>\n<h2 id="使用" tabindex="-1"><a class="header-anchor" href="#使用">#</a> 使用</h2>\n<h3 id="引入" tabindex="-1"><a class="header-anchor" href="#引入">#</a> 引入</h3>\n<ul>\n<li>没有构建工具</li>\n</ul>\n<pre class="hljs fv-hljs "><ul class="highlight-line-number  nonumber"  ><li ><span>1</span></li></ul><code class=" hljs  hljs-html" @click.stop="()=>{}"><span class="hljs-tag">&lt;<span class="hljs-name">script</span> <span class="hljs-attr">src</span>=<span class="hljs-string">&quot;https://unpkg.com/@npkg/tinymce-plugin&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>\n</code><div class="language-text" >html</div></pre>\n<ul>\n<li>使用构建工具</li>\n</ul>\n<pre class="hljs fv-hljs "><ul class="highlight-line-number  nonumber"  ><li ><span>1</span></li></ul><code class=" hljs  hljs-js" @click.stop="()=>{}"> <span class="hljs-keyword">import</span> <span class="hljs-string">&quot;tinymce-plugin&quot;</span>;\n</code><div class="language-text" >js</div></pre>\n<h3 id="开启骨架屏（skeletonScreen）" tabindex="-1"><a class="header-anchor" href="#开启骨架屏（skeletonScreen）">#</a> 开启骨架屏（skeletonScreen）</h3>\n<p>通过配置参数 <strong><code class="fv-code_inline">skeletonScreen</code></strong> 来开启 <a href="https://www.tiny.cloud" target="_blank"><code class="fv-code_inline">tinymce</code></a> 富文本框编辑器的骨架屏功能 ，改善 <a href="https://www.tiny.cloud" target="_blank"><code class="fv-code_inline">tinymce</code></a> 富文本编辑器加载过长用户体验不佳</p>\n<div class="tip fv-state-tip fv-tip"><p class="fv-state-title" >提示</p>\n<p>要使用 <strong><code class="fv-code_inline">skeletonScreen</code></strong> 必须 引入  <a href="https://www.npmjs.com/package/tinymce-plugin" target="_blank"><strong>tinymce-plugin</strong></a> 或 <a href="https://www.npmjs.com/package/@npkg/tinymce-plugin" target="_blank"><strong>@npkg/tinymce-plugin</strong></a></p>\n</div>\n<pre class="hljs fv-hljs highlight-line"><ul class="highlight-line-number "  ><li ><span>1</span></li><li ><span>2</span></li><li ><span>3</span></li><li class="line"><span>4</span></li><li ><span>5</span></li><li ><span>6</span></li></ul><code class=" hljs  hljs-js" @click.stop="()=>{}"><span class="hljs-keyword">import</span> <span class="hljs-string">&quot;tinymce-plugin&quot;</span>; \ntinymce.<span class="hljs-title function_">init</span>({\n  ...\n  <span class="hljs-attr">skeletonScreen</span>: <span class="hljs-literal">true</span>,\n  ...\n})\n</code><div class="language-text" >js</div></pre>\n<p>使用效果\n<img src="assets/images/skt-demo.png?100%25" alt="skeletonScreen"></p>\n<h3 id="引入使用收录的插件或扩展" tabindex="-1"><a class="header-anchor" href="#引入使用收录的插件或扩展">#</a> 引入使用收录的插件或扩展</h3>\n<pre class="hljs fv-hljs "><ul class="highlight-line-number  nonumber"  ><li ><span>1</span></li><li ><span>2</span></li><li ><span>3</span></li><li ><span>4</span></li></ul><code class=" hljs  hljs-js" @click.stop="()=>{}"><span class="hljs-keyword">import</span> <span class="hljs-string">&quot;tinymce-plugin&quot;</span>; <span class="hljs-comment">//作为一些插件的必要依赖</span>\n<span class="hljs-keyword">import</span> <span class="hljs-string">&quot;tinymce-plugin/plugins/tpIndent2em&quot;</span>;\n<span class="hljs-keyword">import</span> <span class="hljs-string">&quot;tinymce-plugin/plugins/tpLayout&quot;</span>;\n<span class="hljs-keyword">import</span> <span class="hljs-string">&quot;tinymce-plugin/plugins/tpImportword&quot;</span>;\n</code><div class="language-text" >js</div></pre>\n<p>或</p>\n<pre class="hljs fv-hljs "><ul class="highlight-line-number  nonumber"  ><li ><span>1</span></li><li ><span>2</span></li><li ><span>3</span></li><li ><span>4</span></li></ul><code class=" hljs  hljs-js" @click.stop="()=>{}"><span class="hljs-keyword">import</span> <span class="hljs-string">&quot;@npkg/tinymce-plugin&quot;</span>; <span class="hljs-comment">//作为一些插件的必要依赖</span>\n<span class="hljs-keyword">import</span> <span class="hljs-string">&quot;@npkg/tinymce-plugin/plugins/tpIndent2em&quot;</span>;\n<span class="hljs-keyword">import</span> <span class="hljs-string">&quot;@npkg/tinymce-plugin/plugins/tpLayout&quot;</span>;\n<span class="hljs-keyword">import</span> <span class="hljs-string">&quot;@npkg/tinymce-plugin/plugins/tpImportword&quot;</span>;\n</code><div class="language-text" >js</div></pre>\n</div></div><PagesRouter  docPath="guide/quickStart.md" mapType="docs" docRepo="tinymce-plugin-docs" pagesName="quickStart_t_2cnggu1657514254575_p_" />'}))}}}));