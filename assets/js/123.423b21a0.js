(window.webpackJsonp=window.webpackJsonp||[]).push([[123],{1252:function(e,t,o){e.exports=o.p+"assets/img/workflow.be457f71.png"},1253:function(e,t,o){e.exports=o.p+"assets/img/SendGrid_node.159ecd77.png"},1254:function(e,t,o){e.exports=o.p+"assets/img/SendGrid1_node.f6e41b6e.png"},1255:function(e,t,o){e.exports=o.p+"assets/img/SendGrid2_node.b25f135f.png"},2025:function(e,t,o){"use strict";o.r(t);var n=o(26),r=Object(n.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h1",{attrs:{id:"sendgrid"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#sendgrid"}},[e._v("#")]),e._v(" SendGrid")]),e._v(" "),n("p",[n("a",{attrs:{href:"https://SendGrid.co",target:"_blank",rel:"noopener noreferrer"}},[e._v("SendGrid"),n("OutboundLink")],1),e._v(" provides a cloud-based service that assists businesses with email delivery.")]),e._v(" "),n("div",{staticClass:"custom-block tip"},[n("p",{staticClass:"custom-block-title"},[e._v("🔑 Credentials")]),e._v(" "),n("p",[e._v("You can find authentication information for this node "),n("RouterLink",{attrs:{to:"/nodes/credentials/SendGrid/"}},[e._v("here")]),e._v(".")],1)]),e._v(" "),n("h2",{attrs:{id:"basic-operations"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#basic-operations"}},[e._v("#")]),e._v(" Basic Operations")]),e._v(" "),n("Resource",{attrs:{node:"n8n-nodes-base.sendGrid"}}),e._v(" "),n("h2",{attrs:{id:"example-usage"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#example-usage"}},[e._v("#")]),e._v(" Example Usage")]),e._v(" "),n("p",[e._v("This workflow allows you to create, update and get a contact using the SendGrid node. You can also find the "),n("a",{attrs:{href:"https://n8n.io/workflows/901",target:"_blank",rel:"noopener noreferrer"}},[e._v("workflow"),n("OutboundLink")],1),e._v(" on n8n.io. This example usage workflow uses the following nodes.")]),e._v(" "),n("ul",[n("li",[n("RouterLink",{attrs:{to:"/nodes/nodes-library/core-nodes/Start/"}},[e._v("Start")])],1),e._v(" "),n("li",[n("a",{attrs:{href:""}},[e._v("SendGrid")])])]),e._v(" "),n("p",[e._v("The final workflow should look like the following image.")]),e._v(" "),n("p",[n("img",{attrs:{src:o(1252),alt:"A workflow with the SendGrid node"}})]),e._v(" "),n("h3",{attrs:{id:"_1-start-node"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-start-node"}},[e._v("#")]),e._v(" 1. Start node")]),e._v(" "),n("p",[e._v("The Start node exists by default when you create a new workflow.")]),e._v(" "),n("h3",{attrs:{id:"_2-sendgrid-node-upsert-contact"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-sendgrid-node-upsert-contact"}},[e._v("#")]),e._v(" 2. SendGrid node (upsert:contact)")]),e._v(" "),n("p",[e._v("This node will create a contact in SendGrid.")]),e._v(" "),n("ol",[n("li",[e._v("First of all, you'll have to enter credentials for the SendGrid node. You can find out how to do that "),n("RouterLink",{attrs:{to:"/nodes/credentials/SendGrid/"}},[e._v("here")]),e._v(".")],1),e._v(" "),n("li",[e._v("Select 'Contact' from the "),n("em",[n("strong",[e._v("Resource")])]),e._v(" dropdown list.")]),e._v(" "),n("li",[e._v("Select 'Create/Update' from the "),n("em",[n("strong",[e._v("Operation")])]),e._v(" dropdown list.")]),e._v(" "),n("li",[e._v("Enter an email address in the "),n("em",[n("strong",[e._v("Email")])]),e._v(" field.")]),e._v(" "),n("li",[e._v("Click on the "),n("em",[n("strong",[e._v("Add Field")])]),e._v(" button and select 'First Name'.")]),e._v(" "),n("li",[e._v("Enter the name of the contact in the "),n("em",[n("strong",[e._v("First Name")])]),e._v(" field.")]),e._v(" "),n("li",[e._v("Click on "),n("em",[n("strong",[e._v("Execute Node")])]),e._v(" to run the node.")])]),e._v(" "),n("p",[e._v("In the screenshot below, you will notice that the node creates contact with their first name.")]),e._v(" "),n("p",[n("img",{attrs:{src:o(1253),alt:"Using the SendGrid node to create a new contact"}})]),e._v(" "),n("h3",{attrs:{id:"_3-sendgrid1-node-upsert-contact"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_3-sendgrid1-node-upsert-contact"}},[e._v("#")]),e._v(" 3. SendGrid1 node (upsert:contact)")]),e._v(" "),n("p",[e._v("This node will update the contact that we created in the previous node.")]),e._v(" "),n("div",{pre:!0},[n("ol",[n("li",[e._v("Select the credentials that you entered in the previous node.")]),e._v(" "),n("li",[e._v("Select 'Contact' from the "),n("em",[n("strong",[e._v("Resource")])]),e._v(" dropdown list.")]),e._v(" "),n("li",[e._v("Select 'Create/Update' from the "),n("em",[n("strong",[e._v("Operation")])]),e._v(" dropdown list.")]),e._v(" "),n("li",[e._v("Click on the gears icon next to the "),n("em",[n("strong",[e._v("Email")])]),e._v(" field and click on "),n("em",[n("strong",[e._v("Add Expression")])]),e._v(".")]),e._v(" "),n("li",[e._v("Select the following in the "),n("em",[n("strong",[e._v("Variable Selector")])]),e._v(" section: Nodes > SendGrid > Parameters > email. You can also add the following expression: "),n("code",[e._v('{{$node["SendGrid"].parameter["email"]}}')]),e._v(".")]),e._v(" "),n("li",[e._v("Click on the "),n("em",[n("strong",[e._v("Add Field")])]),e._v(" button and select 'Last Name'.")]),e._v(" "),n("li",[e._v("Enter the last name of the contact in the "),n("em",[n("strong",[e._v("Last Name")])]),e._v(" field.")]),e._v(" "),n("li",[e._v("Click on "),n("em",[n("strong",[e._v("Execute Node")])]),e._v(" to run the node.")])])]),n("p",[e._v("In the screenshot below, you will notice that the node updates the contact that we created in the previous node.")]),e._v(" "),n("p",[n("img",{attrs:{src:o(1254),alt:"Using the SendGrid node to update a contact"}})]),e._v(" "),n("h3",{attrs:{id:"_4-sendgrid2-node-get-contact"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_4-sendgrid2-node-get-contact"}},[e._v("#")]),e._v(" 4. SendGrid2 node (get:contact)")]),e._v(" "),n("p",[e._v("This node will return the information of the contact that we created using the SendGrid node.")]),e._v(" "),n("div",{pre:!0},[n("ol",[n("li",[e._v("Select the credentials that you entered in the previous node.")]),e._v(" "),n("li",[e._v("Select 'Contact' from the "),n("em",[n("strong",[e._v("Resource")])]),e._v(" dropdown list.")]),e._v(" "),n("li",[e._v("Select 'Get' from the "),n("em",[n("strong",[e._v("Operation")])]),e._v(" dropdown list.")]),e._v(" "),n("li",[e._v("Select 'Email' from the "),n("em",[n("strong",[e._v("By")])]),e._v(" dropdown list.")]),e._v(" "),n("li",[e._v("Click on the gears icon next to the "),n("em",[n("strong",[e._v("Email")])]),e._v(" field and click on "),n("em",[n("strong",[e._v("Add Expression")])]),e._v(".")]),e._v(" "),n("li",[e._v("Select the following in the "),n("em",[n("strong",[e._v("Variable Selector")])]),e._v(" section: Nodes > SendGrid > Parameters > email. You can also add the following expression: "),n("code",[e._v('{{$node["SendGrid"].parameter["email"]}}')]),e._v(".")]),e._v(" "),n("li",[e._v("Click on "),n("em",[n("strong",[e._v("Execute Node")])]),e._v(" to run the node.")])])]),n("p",[e._v("In the screenshot below, you will notice that the node returns the information of the contact that we created using the SendGrid node.")]),e._v(" "),n("p",[n("img",{attrs:{src:o(1255),alt:"Using the SendGrid node to get information of a contact"}})])],1)}),[],!1,null,null,null);t.default=r.exports}}]);