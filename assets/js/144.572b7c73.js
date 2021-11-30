(window.webpackJsonp=window.webpackJsonp||[]).push([[144],{1576:function(e,t,n){"use strict";n.r(t);var o=n(26),s=Object(o.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h2",{attrs:{id:"transforming-data"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#transforming-data"}},[e._v("#")]),e._v(" Transforming Data")]),e._v(" "),o("p",[e._v("n8n uses a predefined "),o("RouterLink",{attrs:{to:"/getting-started/key-concepts/#data-structure"}},[e._v("data structure")]),e._v(" that allows all nodes to "),o("RouterLink",{attrs:{to:"/getting-started/key-concepts/#data-flow"}},[e._v("process")]),e._v(" incoming data correctly.")],1),e._v(" "),o("p",[e._v("Your incoming data may have a different data structure, in which case you will need to transform it to allow each item to be processed individually.")]),e._v(" "),o("p",[e._v("For example, the image below shows the output of an "),o("RouterLink",{attrs:{to:"/nodes/nodes-library/core-nodes/HTTPRequest/"}},[e._v("HTTP Request")]),e._v(" node that returns data incompatible with n8n’s data structure. The node returns the data and displays that only one item was returned.")],1),e._v(" "),o("p",[o("img",{attrs:{src:n(472),alt:"HTTP Request node output"}})]),e._v(" "),o("p",[e._v("To transform this kind of structure into the n8n data structure you will have to use the "),o("RouterLink",{attrs:{to:"/nodes/nodes-library/core-nodes/Function/"}},[e._v("Function")]),e._v(" node. Refer to "),o("RouterLink",{attrs:{to:"/reference/javascript-code-snippets.html#_1-create-multiple-items-from-a-single-item"}},[e._v("Create multiple items from a single item")]),e._v(" code snippet to transform the incoming data.")],1),e._v(" "),o("p",[o("strong",[e._v("Note")]),e._v(": If you’re using the HTTP Request node, you should use the Split Into items option to transform the data. You don’t have to use a Function node in that case.")]),e._v(" "),o("h2",{attrs:{id:"merging-items"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#merging-items"}},[e._v("#")]),e._v(" Merging items")]),e._v(" "),o("p",[e._v("You might want to merge items together in your workflows. For example when your data contains hundreds of items that you don't want to process individually.")]),e._v(" "),o("p",[e._v("In such cases, merge all items into a single item and process just that one. Use this "),o("RouterLink",{attrs:{to:"/reference/javascript-code-snippets.html#_2-create-a-single-item-from-multiple-items"}},[e._v("code snippet")]),e._v(" in the Function node to transform the data as shown below:")],1),e._v(" "),o("p",[o("img",{attrs:{src:n(473),alt:"Function node merge"}})]),e._v(" "),o("p",[e._v("There are three different use cases for merging items:")]),e._v(" "),o("ul",[o("li",[o("strong",[e._v("Merge items of a single execution")]),e._v(": You can merge all incoming items into a single item, as explained in the above example. To merge items into a single item, refer to the JavaScript Code Snippets documentation. Please note that since you are merging different items into a single item the next node in the workflow will now process just that single item.")]),e._v(" "),o("li",[o("strong",[e._v("Merge items returned by different nodes")]),e._v(": If you want to merge items returned by different nodes, use the "),o("RouterLink",{attrs:{to:"/nodes/nodes-library/core-nodes/Merge/"}},[e._v("Merge node")]),e._v(".")],1),e._v(" "),o("li",[o("strong",[e._v("Merge items of different executions")]),e._v(": You can also merge items that get returned in different executions. Refer to this "),o("a",{attrs:{href:"https://n8n.io/workflows/1160",target:"_blank",rel:"noopener noreferrer"}},[e._v("workflow"),o("OutboundLink")],1),e._v(" to learn how:\n"),o("img",{attrs:{src:n(474),alt:"Merge multiple executions"}})])])])}),[],!1,null,null,null);t.default=s.exports},472:function(e,t,n){e.exports=n.p+"assets/img/HTTPRequest_output.81ca0589.png"},473:function(e,t,n){e.exports=n.p+"assets/img/function_merge.30ae88bb.png"},474:function(e,t,n){e.exports=n.p+"assets/img/multiple_merge.530ff254.png"}}]);