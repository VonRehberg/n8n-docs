(window.webpackJsonp=window.webpackJsonp||[]).push([[57],{1124:function(e,t,o){e.exports=o.p+"assets/img/workflow.9d8e7259.png"},1125:function(e,t,o){e.exports=o.p+"assets/img/Nextcloud_node.78117401.png"},1126:function(e,t,o){e.exports=o.p+"assets/img/HTTPRequest_node.3032602e.png"},1127:function(e,t,o){e.exports=o.p+"assets/img/Nextcloud1_node.72b1fce2.png"},1128:function(e,t,o){e.exports=o.p+"assets/img/Nextcloud2_node.905bae0f.png"},1983:function(e,t,o){"use strict";o.r(t);var n=o(26),r=Object(n.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h1",{attrs:{id:"nextcloud"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#nextcloud"}},[e._v("#")]),e._v(" Nextcloud")]),e._v(" "),n("p",[n("a",{attrs:{href:"https://nextcloud.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Nextcloud"),n("OutboundLink")],1),e._v(" is a free and open-source suite of client-server software for creating and using file hosting services.")]),e._v(" "),n("div",{staticClass:"custom-block tip"},[n("p",{staticClass:"custom-block-title"},[e._v("🔑 Credentials")]),e._v(" "),n("p",[e._v("You can find authentication information for this node "),n("RouterLink",{attrs:{to:"/nodes/credentials/Nextcloud/"}},[e._v("here")]),e._v(".")],1)]),e._v(" "),n("h2",{attrs:{id:"basic-operations"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#basic-operations"}},[e._v("#")]),e._v(" Basic Operations")]),e._v(" "),n("Resource",{attrs:{node:"n8n-nodes-base.nextCloud"}}),e._v(" "),n("h2",{attrs:{id:"example-usage"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#example-usage"}},[e._v("#")]),e._v(" Example Usage")]),e._v(" "),n("p",[e._v("This workflow allows you to create a folder in Nextcloud, upload a file into that folder, and list the contents of the folder. You can also find the "),n("a",{attrs:{href:"https://n8n.io/workflows/620",target:"_blank",rel:"noopener noreferrer"}},[e._v("workflow"),n("OutboundLink")],1),e._v(" on n8n.io. This example usage workflow would use the following nodes.")]),e._v(" "),n("ul",[n("li",[n("RouterLink",{attrs:{to:"/nodes/nodes-library/core-nodes/Start/"}},[e._v("Start")])],1),e._v(" "),n("li",[n("a",{attrs:{href:""}},[e._v("Nextcloud")])]),e._v(" "),n("li",[n("RouterLink",{attrs:{to:"/nodes/nodes-library/core-nodes/HTTPRequest/"}},[e._v("HTTP Request")])],1)]),e._v(" "),n("p",[e._v("The final workflow should look like the following image.")]),e._v(" "),n("p",[n("img",{attrs:{src:o(1124),alt:"A workflow with the Nextcloud node"}})]),e._v(" "),n("h3",{attrs:{id:"_1-start-node"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-start-node"}},[e._v("#")]),e._v(" 1. Start node")]),e._v(" "),n("p",[e._v("The start node exists by default when you create a new workflow.")]),e._v(" "),n("h3",{attrs:{id:"_2-nextcloud-node-create-folder"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-nextcloud-node-create-folder"}},[e._v("#")]),e._v(" 2. Nextcloud node (create: folder)")]),e._v(" "),n("ol",[n("li",[e._v("First of all, you'll have to enter credentials for the Nextcloud node. You can find out how to do that "),n("RouterLink",{attrs:{to:"/nodes/credentials/Nextcloud/"}},[e._v("here")]),e._v(".")],1),e._v(" "),n("li",[e._v("Select the 'Folder' option from the "),n("em",[n("strong",[e._v("Resource")])]),e._v(" dropdown list.")]),e._v(" "),n("li",[e._v("Enter a folder name in the "),n("em",[n("strong",[e._v("Folder")])]),e._v(" field.")]),e._v(" "),n("li",[e._v("Click on "),n("em",[n("strong",[e._v("Execute Node")])]),e._v(" to run the node.")])]),e._v(" "),n("p",[n("img",{attrs:{src:o(1125),alt:"Create a folder in Nextcloud using the Nextcloud node"}})]),e._v(" "),n("h3",{attrs:{id:"_3-http-request-node-get"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_3-http-request-node-get"}},[e._v("#")]),e._v(" 3. HTTP Request node (GET)")]),e._v(" "),n("ol",[n("li",[e._v("Enter "),n("code",[e._v("https://n8n.io/n8n-logo.png")]),e._v(" in the "),n("em",[n("strong",[e._v("URL")])]),e._v(" field.")]),e._v(" "),n("li",[e._v("Select 'File' from the "),n("em",[n("strong",[e._v("Response Format")])]),e._v(" dropdown list.")]),e._v(" "),n("li",[e._v("Click on "),n("em",[n("strong",[e._v("Execute Node")])]),e._v(" to run the node.")])]),e._v(" "),n("p",[n("img",{attrs:{src:o(1126),alt:"Get a file to upload in Nextcloud using the HTTP Request node"}})]),e._v(" "),n("h3",{attrs:{id:"_4-nextcloud1-node-upload-file"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_4-nextcloud1-node-upload-file"}},[e._v("#")]),e._v(" 4. Nextcloud1 node (upload: file)")]),e._v(" "),n("ol",[n("li",[e._v("Select the credentials that you entered in the Nextcloud node.")]),e._v(" "),n("li",[e._v("Enter the path of the Nextcloud folder you created in the previous steps along with a file name in the "),n("em",[n("strong",[e._v("File Path")])]),e._v(" field.")]),e._v(" "),n("li",[e._v("Set the "),n("em",[n("strong",[e._v("Binary Data")])]),e._v(" toggle to true.")]),e._v(" "),n("li",[e._v("Click on "),n("em",[n("strong",[e._v("Execute Node")])]),e._v(" to run the node.")])]),e._v(" "),n("p",[n("img",{attrs:{src:o(1127),alt:"Upload a file in Nextcloud using the Nextcloud node"}})]),e._v(" "),n("h3",{attrs:{id:"_5-nextcloud2-node-list-folder"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_5-nextcloud2-node-list-folder"}},[e._v("#")]),e._v(" 5. Nextcloud2 node (list: folder)")]),e._v(" "),n("ol",[n("li",[e._v("Select the credentials that you entered in the Nextcloud node.")]),e._v(" "),n("li",[e._v("Select 'Folder' from the "),n("em",[n("strong",[e._v("Resource")])]),e._v(" dropdown list.")]),e._v(" "),n("li",[e._v("Select 'List' from the "),n("em",[n("strong",[e._v("Operation")])]),e._v(" dropdown list.")]),e._v(" "),n("li",[e._v("Enter the name of the Nextcloud folder you created in the previous steps in the "),n("em",[n("strong",[e._v("Folder Path")])]),e._v(" field.")]),e._v(" "),n("li",[e._v("Click on "),n("em",[n("strong",[e._v("Execute Node")])]),e._v(" to run the node.")])]),e._v(" "),n("p",[n("img",{attrs:{src:o(1128),alt:"List the contents of a Nextcloud folder using the Nextcloud node"}})])],1)}),[],!1,null,null,null);t.default=r.exports}}]);