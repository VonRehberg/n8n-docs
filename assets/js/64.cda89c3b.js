(window.webpackJsonp=window.webpackJsonp||[]).push([[64],{1303:function(e,t,o){e.exports=o.p+"assets/img/workflow.7d5f6f0a.png"},1304:function(e,t,o){e.exports=o.p+"assets/img/Cron_node.8776ddfc.png"},1305:function(e,t,o){e.exports=o.p+"assets/img/HTTPRequest_node.ee5494b7.png"},1306:function(e,t,o){e.exports=o.p+"assets/img/Set_node.4beac2dc.png"},1307:function(e,t,o){e.exports=o.p+"assets/img/TimescaleDB_node.29442747.png"},2039:function(e,t,o){"use strict";o.r(t);var n=o(26),s=Object(n.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h1",{attrs:{id:"timescaledb"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#timescaledb"}},[e._v("#")]),e._v(" TimescaleDB")]),e._v(" "),n("p",[n("a",{attrs:{href:"https://www.timescale.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("TimescaleDB"),n("OutboundLink")],1),e._v(" is an open-source time-series SQL database optimized for fast ingest and complex queries.")]),e._v(" "),n("div",{staticClass:"custom-block tip"},[n("p",{staticClass:"custom-block-title"},[e._v("🔑 Credentials")]),e._v(" "),n("p",[e._v("You can find authentication information for this node "),n("RouterLink",{attrs:{to:"/nodes/credentials/TimescaleDB/"}},[e._v("here")]),e._v(".")],1)]),e._v(" "),n("h2",{attrs:{id:"basic-operations"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#basic-operations"}},[e._v("#")]),e._v(" Basic Operations")]),e._v(" "),n("Resource",{attrs:{node:"n8n-nodes-base.timescaleDb"}}),e._v(" "),n("h2",{attrs:{id:"example-usage"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#example-usage"}},[e._v("#")]),e._v(" Example Usage")]),e._v(" "),n("p",[e._v("This workflow allows you to receive updates of the position of the ISS every minute and insert it to a table using the TimscaleDB node. You can also find the "),n("a",{attrs:{href:"https://n8n.io/workflows/917",target:"_blank",rel:"noopener noreferrer"}},[e._v("workflow"),n("OutboundLink")],1),e._v(" on n8n.io. This example usage workflow uses the following nodes.")]),e._v(" "),n("ul",[n("li",[n("RouterLink",{attrs:{to:"/nodes/nodes-library/core-nodes/Cron/"}},[e._v("Cron")])],1),e._v(" "),n("li",[n("RouterLink",{attrs:{to:"/nodes/nodes-library/core-nodes/HTTPRequest/"}},[e._v("HTTP Request")])],1),e._v(" "),n("li",[n("RouterLink",{attrs:{to:"/nodes/nodes-library/core-nodes/Set/"}},[e._v("Set")])],1),e._v(" "),n("li",[n("a",{attrs:{href:""}},[e._v("TimescaleDB")])])]),e._v(" "),n("p",[e._v("The final workflow should look like the following image.")]),e._v(" "),n("p",[n("img",{attrs:{src:o(1303),alt:"A workflow with the TimescaleDB node"}})]),e._v(" "),n("h3",{attrs:{id:"_1-cron-node"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-cron-node"}},[e._v("#")]),e._v(" 1. Cron node")]),e._v(" "),n("p",[e._v("The Cron node will trigger the workflow every minute.")]),e._v(" "),n("ol",[n("li",[e._v("Click on "),n("em",[n("strong",[e._v("Add Cron Time")])]),e._v(".")]),e._v(" "),n("li",[e._v("Select 'Every Minute' from the "),n("em",[n("strong",[e._v("Mode")])]),e._v(" dropdown list.")]),e._v(" "),n("li",[e._v("Click on "),n("em",[n("strong",[e._v("Execute Node")])]),e._v(" to run the node.")])]),e._v(" "),n("p",[e._v("In the screenshot below, you will notice that the Cron node is configured to trigger the workflow every minute.")]),e._v(" "),n("p",[n("img",{attrs:{src:o(1304),alt:"Using the Cron node to trigger the workflow every minute"}})]),e._v(" "),n("h3",{attrs:{id:"_2-http-request-node-get"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-http-request-node-get"}},[e._v("#")]),e._v(" 2. HTTP Request node (GET)")]),e._v(" "),n("p",[e._v("This node will make a GET request to the API "),n("code",[e._v("https://api.wheretheiss.at/v1/satellites/25544/positions")]),e._v(" to fetch the position of the ISS. This information gets passed on to the next node in the workflow.")]),e._v(" "),n("div",{pre:!0},[n("ol",[n("li",[e._v("Enter "),n("code",[e._v("https://api.wheretheiss.at/v1/satellites/25544/positions")]),e._v(" in the "),n("em",[n("strong",[e._v("URL")])]),e._v(" field.")]),e._v(" "),n("li",[e._v("Click on the "),n("em",[n("strong",[e._v("Add Parameter")])]),e._v(" button in the "),n("em",[n("strong",[e._v("Query Parameters")])]),e._v(" section.")]),e._v(" "),n("li",[e._v("Enter "),n("code",[e._v("timestamps")]),e._v(" in the "),n("em",[n("strong",[e._v("Name")])]),e._v(" field.")]),e._v(" "),n("li",[e._v("Click on the gears icon next to the "),n("em",[n("strong",[e._v("Value")])]),e._v(" field and click on "),n("em",[n("strong",[e._v("Add Expression")])]),e._v(".")]),e._v(" "),n("li",[e._v("Enter the following expression: "),n("code",[e._v("{{Date.now()}}")]),e._v(". This expression will return the current timestamp.")]),e._v(" "),n("li",[e._v("Click on "),n("em",[n("strong",[e._v("Execute Node")])]),e._v(" to run the node.")])])]),n("p",[e._v("In the screenshot below, you will notice that the node makes a GET request to the API and returns the information about the location of the ISS.")]),e._v(" "),n("p",[n("img",{attrs:{src:o(1305),alt:"Using the HTTP Request node to get the information about the location of the ISS"}})]),e._v(" "),n("h3",{attrs:{id:"_3-set-node"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_3-set-node"}},[e._v("#")]),e._v(" 3. Set node")]),e._v(" "),n("p",[e._v("We will use the Set node to ensure that only the data that we set in this node gets passed on to the next nodes in the workflow.")]),e._v(" "),n("div",{pre:!0},[n("ol",[n("li",[e._v("Click on "),n("em",[n("strong",[e._v("Add Value")])]),e._v(" and select 'String' from the dropdown list.")]),e._v(" "),n("li",[e._v("Enter "),n("code",[e._v("latitude")]),e._v(" in the "),n("em",[n("strong",[e._v("Name")])]),e._v(" field.")]),e._v(" "),n("li",[e._v("Click on the gears icon next to the "),n("em",[n("strong",[e._v("Value")])]),e._v(" field and click on "),n("em",[n("strong",[e._v("Add Expression")])]),e._v(".")]),e._v(" "),n("li",[e._v("Select the following in the "),n("em",[n("strong",[e._v("Variable Selector")])]),e._v(" section: Current Node > Input Data > JSON > 0 > latitude. You can also add the following expression: "),n("code",[e._v('{{$json["0"]["latitude"]}}')]),e._v(".")]),e._v(" "),n("li",[e._v("Click on "),n("em",[n("strong",[e._v("Add Value")])]),e._v(" and select 'String' from the dropdown list.")]),e._v(" "),n("li",[e._v("Enter "),n("code",[e._v("longitude")]),e._v(" in the "),n("em",[n("strong",[e._v("Name")])]),e._v(" field.")]),e._v(" "),n("li",[e._v("Click on the gears icon next to the "),n("em",[n("strong",[e._v("Value")])]),e._v(" field and click on "),n("em",[n("strong",[e._v("Add Expression")])]),e._v(".")]),e._v(" "),n("li",[e._v("Select the following in the "),n("em",[n("strong",[e._v("Variable Selector")])]),e._v(" section: Current Node > Input Data > JSON > 0 > longitude. You can also add the following expression: "),n("code",[e._v('{{$json["0"]["longitude"]}}')]),e._v(".")]),e._v(" "),n("li",[e._v("Click on "),n("em",[n("strong",[e._v("Add Value")])]),e._v(" and select 'String' from the dropdown list.")]),e._v(" "),n("li",[e._v("Enter "),n("code",[e._v("timestamp")]),e._v(" in the "),n("em",[n("strong",[e._v("Name")])]),e._v(" field.")]),e._v(" "),n("li",[e._v("Click on the gears icon next to the "),n("em",[n("strong",[e._v("Value")])]),e._v(" field and click on "),n("em",[n("strong",[e._v("Add Expression")])]),e._v(".")]),e._v(" "),n("li",[e._v("Select the following in the "),n("em",[n("strong",[e._v("Variable Selector")])]),e._v(" section: Current Node > Input Data > JSON > 0 > timpestamp. You can also add the following expression: "),n("code",[e._v('{{$json["0"]["timestamp"]}}')]),e._v(".")]),e._v(" "),n("li",[e._v("Toggle "),n("em",[n("strong",[e._v("Keep Only Set")])]),e._v(" to "),n("code",[e._v("true")]),e._v(". We set this option to true to ensure that only the data that we have set in this node get passed on to the next nodes in the workflow.")]),e._v(" "),n("li",[e._v("Click on "),n("em",[n("strong",[e._v("Execute Node")])]),e._v(" to run the node.")])])]),n("p",[e._v("In the screenshot below, you will notice that the node uses the data from the previous node and returns the data that we set for the workflow.")]),e._v(" "),n("p",[n("img",{attrs:{src:o(1306),alt:"Using the Set node to set the data"}})]),e._v(" "),n("h3",{attrs:{id:"_4-timescaledb-node-insert"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_4-timescaledb-node-insert"}},[e._v("#")]),e._v(" 4. TimescaleDB node (Insert)")]),e._v(" "),n("p",[e._v("We will insert the data from the previous node to a table named "),n("code",[e._v("iss")]),e._v(". To create the table, use the following SQL command.")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("CREATE TABLE iss(latitude NUMERIC, longitude NUMERIC, timestamp NUMERIC);\n")])])]),n("ol",[n("li",[e._v("First of all, you'll have to enter credentials for the TimescaleDB node. You can find out how to do that "),n("RouterLink",{attrs:{to:"/nodes/credentials/TimescaleDb/"}},[e._v("here")]),e._v(".")],1),e._v(" "),n("li",[e._v("Enter "),n("code",[e._v("iss")]),e._v(" in the "),n("em",[n("strong",[e._v("Table")])]),e._v(" field.")]),e._v(" "),n("li",[e._v("Enter "),n("code",[e._v("latitude, longitude, timestamp")]),e._v(" in the "),n("em",[n("strong",[e._v("Columns")])]),e._v(" field.")]),e._v(" "),n("li",[e._v("Click on "),n("em",[n("strong",[e._v("Execute Node")])]),e._v(" to run the node.")])]),e._v(" "),n("p",[e._v("In the screenshot below, you will notice that the node inserts the data from the previous node to the "),n("code",[e._v("iss")]),e._v(" table in TimescaleDB.")]),e._v(" "),n("p",[n("img",{attrs:{src:o(1307),alt:"Using the TimescaleDB node to insert the data to a table"}})]),e._v(" "),n("div",{staticClass:"custom-block tip"},[n("p",{staticClass:"custom-block-title"},[e._v("💡 Activate workflow for production")]),e._v(" "),n("p",[e._v("This example workflow uses the Cron node, which is a Trigger node. You'll need to save the workflow and then click on the Activate toggle on the top right of the screen to activate the workflow. Your workflow will then be triggered as specified by the settings in the Cron node.")])]),e._v(" "),n("h2",{attrs:{id:"faqs"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#faqs"}},[e._v("#")]),e._v(" FAQs")]),e._v(" "),n("h3",{attrs:{id:"how-to-specify-the-data-type-of-a-column"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#how-to-specify-the-data-type-of-a-column"}},[e._v("#")]),e._v(" How to specify the data type of a column?")]),e._v(" "),n("p",[e._v("To specify the data type of a column, append the column name with "),n("code",[e._v(":type")]),e._v(", where "),n("code",[e._v("type")]),e._v(" is the data type of that column. For example, if you want to specify the type "),n("code",[e._v("int")]),e._v(" for the column "),n("em",[e._v("id")]),e._v(" and type "),n("code",[e._v("text")]),e._v(" for the column "),n("em",[e._v("name")]),e._v(", you can use the following snippet in the "),n("em",[n("strong",[e._v("Columns")])]),e._v(" field: "),n("code",[e._v("id:init,name:text")]),e._v(".")])],1)}),[],!1,null,null,null);t.default=s.exports}}]);