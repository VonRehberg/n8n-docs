(window.webpackJsonp=window.webpackJsonp||[]).push([[80],{1830:function(t,e,n){"use strict";n.r(e);var o=n(26),s=Object(o.a)({},(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[o("h1",{attrs:{id:"split-in-batches"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#split-in-batches"}},[t._v("#")]),t._v(" Split In Batches")]),t._v(" "),o("p",[t._v("The Split In Batches node saves the original incoming data, and with each iteration, it returns a predefined amount of data. This node can be used to loop through the data.")]),t._v(" "),o("h2",{attrs:{id:"node-reference"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#node-reference"}},[t._v("#")]),t._v(" Node Reference")]),t._v(" "),o("ul",[o("li",[o("strong",[t._v("Batch Size:")]),t._v(" The number of items to return with each call.")]),t._v(" "),o("li",[o("em",[o("strong",[t._v("Options")])]),t._v(" "),o("ul",[o("li",[o("em",[o("strong",[t._v("Reset:")])]),t._v(" If set to true, the node will reset.")])])])]),t._v(" "),o("div",{staticClass:"custom-block warning"},[o("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),o("p",[t._v("n8n natively processes incoming items. You may not need the Split In Batches node in your workflow. To learn more about how n8n handles multiple items, refer to the documentation on "),o("RouterLink",{attrs:{to:"/getting-started/key-concepts/looping.html"}},[t._v("Looping in n8n")]),t._v(".")],1)]),t._v(" "),o("h2",{attrs:{id:"example-usage"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#example-usage"}},[t._v("#")]),t._v(" Example Usage")]),t._v(" "),o("p",[t._v("This workflow allows you to read RSS feed from two different sources using the Split In Batches node. The Split in Batches node is needed in the workflow since the RSS Read node only processes the first item it receives. You can also find the "),o("a",{attrs:{href:"https://n8n.io/workflows/687",target:"_blank",rel:"noopener noreferrer"}},[t._v("workflow"),o("OutboundLink")],1),t._v(" on n8n.io. This example usage workflow would use the following nodes.")]),t._v(" "),o("ul",[o("li",[o("RouterLink",{attrs:{to:"/nodes/nodes-library/core-nodes/Start/"}},[t._v("Start")])],1),t._v(" "),o("li",[o("RouterLink",{attrs:{to:"/nodes/nodes-library/core-nodes/Function/"}},[t._v("Function")])],1),t._v(" "),o("li",[o("a",{attrs:{href:""}},[t._v("Split In Batches")])]),t._v(" "),o("li",[o("RouterLink",{attrs:{to:"/nodes/nodes-library/core-nodes/RSSRead/"}},[t._v("RSS Read")])],1)]),t._v(" "),o("p",[t._v("The final workflow should look like the following image.")]),t._v(" "),o("p",[o("img",{attrs:{src:n(716),alt:"A workflow with the Split In Batches node"}})]),t._v(" "),o("h3",{attrs:{id:"_1-start-node"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#_1-start-node"}},[t._v("#")]),t._v(" 1. Start node")]),t._v(" "),o("p",[t._v("The start node exists by default when you create a new workflow.")]),t._v(" "),o("div",{pre:!0},[o("h3",{pre:!0,attrs:{id:"_2-function-node"}},[o("a",{pre:!0,attrs:{class:"header-anchor",href:"#_2-function-node"}},[t._v("#")]),t._v(" 2. Function node")]),t._v(" "),o("ol",[o("li",[t._v("Paste the following JavaScript code snippet in the "),o("em",[o("strong",[t._v("Function")])]),t._v(" field.")])]),t._v(" "),o("div",{pre:!0,attrs:{class:"language-js extra-class"}},[o("pre",{pre:!0,attrs:{"v-pre":"",class:"language-js"}},[o("code",[o("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),o("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n  "),o("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    json"),o("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),o("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      url"),o("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),o("span",{pre:!0,attrs:{class:"token string"}},[t._v("'https://medium.com/feed/n8n-io'")]),o("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),o("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),o("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),o("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),o("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    json"),o("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),o("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      url"),o("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),o("span",{pre:!0,attrs:{class:"token string"}},[t._v("'https://dev.to/feed/n8n'")]),o("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),o("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),o("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),o("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),o("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),o("ol",{pre:!0,attrs:{start:"2"}},[o("li",[t._v("Click on "),o("em",[o("strong",[t._v("Execute Node")])]),t._v(" to run the node.")])])]),o("p",[o("img",{attrs:{src:n(717),alt:"Using the Function node to return URLs"}})]),t._v(" "),o("div",{pre:!0},[o("h3",{pre:!0,attrs:{id:"_3-splitinbatches-node"}},[o("a",{pre:!0,attrs:{class:"header-anchor",href:"#_3-splitinbatches-node"}},[t._v("#")]),t._v(" 3. SplitInBatches node")]),t._v(" "),o("ol",[o("li",[t._v("Set the batch size to "),o("code",[t._v("1")]),t._v(" in the "),o("em",[o("strong",[t._v("Batch Size")])]),t._v(" field.")]),t._v(" "),o("li",[t._v("Click on "),o("em",[o("strong",[t._v("Execute Node")])]),t._v(" to run the node.")])])]),o("p",[o("img",{attrs:{src:n(718),alt:"Using the Split In Batches node to split the data"}})]),t._v(" "),o("div",{pre:!0},[o("h3",{pre:!0,attrs:{id:"_4-rss-read-node"}},[o("a",{pre:!0,attrs:{class:"header-anchor",href:"#_4-rss-read-node"}},[t._v("#")]),t._v(" 4. RSS Read node")]),t._v(" "),o("ol",[o("li",[t._v("Click on the gears icon next to the "),o("em",[o("strong",[t._v("URL")])]),t._v(" field and click on "),o("em",[o("strong",[t._v("Add Expression")])]),t._v(".")]),t._v(" "),o("li",[t._v("Select the following in the "),o("em",[o("strong",[t._v("Variable Selector")])]),t._v(" section: Nodes > SplitInBatches > Output Data > JSON > url. You can also add the following expression: "),o("code",[t._v('{{$node["SplitInBatches"].json["url"]}}')]),t._v(".")]),t._v(" "),o("li",[t._v("Click on "),o("em",[o("strong",[t._v("Execute Node")])]),t._v(" to run the workflow.")])])]),o("p",[o("img",{attrs:{src:n(719),alt:"Using the RSS Read node to read data from RSS feed"}})]),t._v(" "),o("h2",{attrs:{id:"faqs"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#faqs"}},[t._v("#")]),t._v(" FAQs")]),t._v(" "),o("h3",{attrs:{id:"how-to-identify-that-no-items-are-left-to-be-processed-by-the-node"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#how-to-identify-that-no-items-are-left-to-be-processed-by-the-node"}},[t._v("#")]),t._v(" How to identify that no items are left to be processed by the node?")]),t._v(" "),o("div",{pre:!0},[o("p",[t._v("To identify if items are left to be processed by node use the following expression: "),o("code",[t._v('{{$node["SplitInBatches"].context["noItemsLeft"]}}')]),t._v(". This expression returns a boolean value. If there is data yet to be processed, the expression will return "),o("code",[t._v("false")]),t._v(", otherwise "),o("code",[t._v("true")]),t._v(".")])]),o("p",[t._v("Refer to this "),o("a",{attrs:{href:"https://n8n.io/workflows/995",target:"_blank",rel:"noopener noreferrer"}},[t._v("workflow"),o("OutboundLink")],1),t._v(" to try it out.")]),t._v(" "),o("h3",{attrs:{id:"how-to-get-the-current-running-index-of-the-node"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#how-to-get-the-current-running-index-of-the-node"}},[t._v("#")]),t._v(" How to get the current running index of the node?")]),t._v(" "),o("div",{pre:!0},[o("p",[t._v("To get the current running index of the node, use the following expression: "),o("code",[t._v('{{$node["SplitInBatches"].context["currentRunIndex"];}}')]),t._v(".")])]),o("p",[t._v("Refer to this "),o("a",{attrs:{href:"https://n8n.io/workflows/996",target:"_blank",rel:"noopener noreferrer"}},[t._v("workflow"),o("OutboundLink")],1),t._v(" to try it out.")]),t._v(" "),o("h2",{attrs:{id:"further-reading"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#further-reading"}},[t._v("#")]),t._v(" Further Reading")]),t._v(" "),o("FurtherReadingBlog")],1)}),[],!1,null,null,null);e.default=s.exports},716:function(t,e,n){t.exports=n.p+"assets/img/workflow.57432bdb.png"},717:function(t,e,n){t.exports=n.p+"assets/img/Function_node.335e2cbf.png"},718:function(t,e,n){t.exports=n.p+"assets/img/SplitInBatches_node.d7752cb8.png"},719:function(t,e,n){t.exports=n.p+"assets/img/RSSFeedRead_node.7bb732b7.png"}}]);