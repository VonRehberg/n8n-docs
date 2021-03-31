(window.webpackJsonp=window.webpackJsonp||[]).push([[65],{1518:function(e,t,o){"use strict";o.r(t);var n=o(26),a=Object(n.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h1",{attrs:{id:"google-analytics"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#google-analytics"}},[e._v("#")]),e._v(" Google Analytics")]),e._v(" "),n("p",[n("a",{attrs:{href:"https://analytics.google.com",target:"_blank",rel:"noopener noreferrer"}},[e._v("Google Analytics"),n("OutboundLink")],1),e._v(" is a web analytics service offered by Google that lets you measure your advertising ROI as well as track your Flash, video, and social networking sites and applications.")]),e._v(" "),n("div",{staticClass:"custom-block tip"},[n("p",{staticClass:"custom-block-title"},[e._v("🔑 Credentials")]),e._v(" "),n("p",[e._v("You can find authentication information for this node "),n("RouterLink",{attrs:{to:"/nodes/credentials/Google/"}},[e._v("here")]),e._v(".")],1)]),e._v(" "),n("h2",{attrs:{id:"basic-operations"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#basic-operations"}},[e._v("#")]),e._v(" Basic Operations")]),e._v(" "),n("details",{staticClass:"custom-block details"},[n("summary",[e._v("Report")]),e._v(" "),n("ul",[n("li",[e._v("Return the analytics data")])])]),e._v(" "),n("details",{staticClass:"custom-block details"},[n("summary",[e._v("User Activity")]),e._v(" "),n("ul",[n("li",[e._v("Return user activity data")])])]),e._v(" "),n("h2",{attrs:{id:"example-usage"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#example-usage"}},[e._v("#")]),e._v(" Example Usage")]),e._v(" "),n("p",[e._v("This workflow allows you to get analytical metrics of your website using the Goole Analytics node and store it in Airtable. You can also find the "),n("a",{attrs:{href:"https://n8n.io/workflows/892",target:"_blank",rel:"noopener noreferrer"}},[e._v("workflow"),n("OutboundLink")],1),e._v(" on n8n.io. This example usage workflow uses the following nodes.")]),e._v(" "),n("ul",[n("li",[n("RouterLink",{attrs:{to:"/nodes/nodes-library/core-nodes/Start/"}},[e._v("Start")])],1),e._v(" "),n("li",[n("a",{attrs:{href:""}},[e._v("Google Analytics")])]),e._v(" "),n("li",[n("RouterLink",{attrs:{to:"/nodes/nodes-library/core-nodes/Set/"}},[e._v("Set")])],1),e._v(" "),n("li",[n("RouterLink",{attrs:{to:"/nodes/nodes-library/nodes/Airtable/"}},[e._v("Airtable")])],1)]),e._v(" "),n("p",[e._v("The final workflow should look like the following image.")]),e._v(" "),n("p",[n("img",{attrs:{src:o(765),alt:"A workflow with the Google Analytics node"}})]),e._v(" "),n("h3",{attrs:{id:"_1-start-node"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-start-node"}},[e._v("#")]),e._v(" 1. Start node")]),e._v(" "),n("p",[e._v("The Start node exists by default when you create a new workflow.")]),e._v(" "),n("h3",{attrs:{id:"_2-google-analytics-node-get-report"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-google-analytics-node-get-report"}},[e._v("#")]),e._v(" 2. Google Analytics node (get: report)")]),e._v(" "),n("p",[e._v("This node will retrieve the session metrics grouped by country for a given date range. You can select a different dimension, metric, and date range.")]),e._v(" "),n("ol",[n("li",[e._v("First of all, you'll have to enter credentials for the Google Analytics node. You can find out how to do that "),n("RouterLink",{attrs:{to:"/nodes/credentials/Google/"}},[e._v("here")]),e._v(".")],1),e._v(" "),n("li",[e._v("Select a view from the "),n("em",[n("strong",[e._v("View ID")])]),e._v(" dropdown list.")]),e._v(" "),n("li",[e._v("Click on "),n("em",[n("strong",[e._v("Add Field")])]),e._v(" and select 'Dimensions'.")]),e._v(" "),n("li",[e._v("Click on the "),n("em",[n("strong",[e._v("Add Dimension")])]),e._v(" button.")]),e._v(" "),n("li",[e._v("Select 'Country' from the "),n("em",[n("strong",[e._v("Name")])]),e._v(" field.")]),e._v(" "),n("li",[e._v("Click on "),n("em",[n("strong",[e._v("Add Field")])]),e._v(" and select 'Date Ranges'.")]),e._v(" "),n("li",[e._v("Click on the "),n("em",[n("strong",[e._v("Add Date Range")])]),e._v(" button.")]),e._v(" "),n("li",[e._v("Select a start date in the "),n("em",[n("strong",[e._v("Start Date")])]),e._v(" field.")]),e._v(" "),n("li",[e._v("Select an end date in the "),n("em",[n("strong",[e._v("End Date")])]),e._v(" field.")]),e._v(" "),n("li",[e._v("Click on "),n("em",[n("strong",[e._v("Add Field")])]),e._v(" and select 'Metrics'.")]),e._v(" "),n("li",[e._v("Click on the "),n("em",[n("strong",[e._v("Add Metrics")])]),e._v(" button.")]),e._v(" "),n("li",[e._v("Enter "),n("code",[e._v("Session")]),e._v(" in the "),n("em",[n("strong",[e._v("Alias")])]),e._v(" field.")]),e._v(" "),n("li",[e._v("Enter "),n("code",[e._v("ga:sessions")]),e._v(" in the "),n("em",[n("strong",[e._v("Expression")])]),e._v(" field.")]),e._v(" "),n("li",[e._v("Click on "),n("em",[n("strong",[e._v("Execute Node")])]),e._v(" to run the node.")])]),e._v(" "),n("p",[e._v("In the screenshot below, you will notice that the node returns the information about the sessions grouped by country.")]),e._v(" "),n("p",[n("img",{attrs:{src:o(766),alt:"Using the Google Analytics node to retrieve analytics of a website"}})]),e._v(" "),n("h3",{attrs:{id:"_3-set-node"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_3-set-node"}},[e._v("#")]),e._v(" 3. Set node")]),e._v(" "),n("p",[e._v("We will use the Set node to set the values for the country and metrics. This data gets passed on to the next nodes in the workflow.")]),e._v(" "),n("div",{pre:!0},[n("ol",[n("li",[e._v("Click on the "),n("em",[n("strong",[e._v("Add Value")])]),e._v(" button and select 'string' from the dropdown list.")]),e._v(" "),n("li",[e._v("Enter "),n("code",[e._v("Country")]),e._v(" in the "),n("em",[n("strong",[e._v("Name")])]),e._v(" field.")]),e._v(" "),n("li",[e._v("Click on the gears icon next to the "),n("em",[n("strong",[e._v("Value")])]),e._v(" field and click on "),n("em",[n("strong",[e._v("Add Expression")])]),e._v(".")]),e._v(" "),n("li",[e._v("Select the following in the "),n("em",[n("strong",[e._v("Variable Selector")])]),e._v(" section: Current Nodes > Input Data > JSON > country. You can also add the following expression: "),n("code",[e._v('{{$json["ga:country"]}}')]),e._v(".")]),e._v(" "),n("li",[e._v("Click on "),n("em",[n("strong",[e._v("Add Value")])]),e._v(" and select 'Number' from the dropdown list.")]),e._v(" "),n("li",[e._v("Enter "),n("code",[e._v("Metric")]),e._v(" in the "),n("em",[n("strong",[e._v("Name")])]),e._v(" field.")]),e._v(" "),n("li",[e._v("Click on the gears icon next to the "),n("em",[n("strong",[e._v("Value")])]),e._v(" field and click on "),n("em",[n("strong",[e._v("Add Expression")])]),e._v(".")]),e._v(" "),n("li",[e._v("Select the following in the "),n("em",[n("strong",[e._v("Variable Selector")])]),e._v(" section: Current Nodes > Input Data > JSON > total. You can also add the following expression: "),n("code",[e._v('{{$json["total"]}}')]),e._v(".")]),e._v(" "),n("li",[e._v("Toggle "),n("em",[n("strong",[e._v("Keep Only Set")])]),e._v(" to "),n("code",[e._v("true")]),e._v(". We set this option to true to ensure that only the data that we have set in this node get passed on to the next nodes in the workflow.")]),e._v(" "),n("li",[e._v("Click on "),n("em",[n("strong",[e._v("Execute Node")])]),e._v(" to run the node.")])])]),n("p",[e._v("In the screenshot below, you will notice that the node sets the value for "),n("code",[e._v("Country")]),e._v(" and "),n("code",[e._v("Metric")]),e._v(".")]),e._v(" "),n("p",[n("img",{attrs:{src:o(767),alt:"Using the Set node to set data"}})]),e._v(" "),n("h3",{attrs:{id:"_4-airtable-node-append"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_4-airtable-node-append"}},[e._v("#")]),e._v(" 4. Airtable node (Append)")]),e._v(" "),n("p",[e._v("This node will append the data that we set in the previous node to a table. Create a table like "),n("a",{attrs:{href:"https://airtable.com/shrFIVzFaXgv7LekV",target:"_blank",rel:"noopener noreferrer"}},[e._v("this"),n("OutboundLink")],1),e._v(" in your Airtable base.")]),e._v(" "),n("ol",[n("li",[e._v("First of all, you'll have to enter credentials for the Airtable node. You can find out how to do that "),n("RouterLink",{attrs:{to:"/nodes/credentials/Airtable/"}},[e._v("here")]),e._v(".")],1),e._v(" "),n("li",[e._v("Select 'Append' from the "),n("em",[n("strong",[e._v("Operation")])]),e._v(" dropdown list.")]),e._v(" "),n("li",[e._v("Enter the Base ID in the "),n("em",[n("strong",[e._v("Base ID")])]),e._v(" field. For obtaining the Base ID, head over to their "),n("a",{attrs:{href:"https://airtable.com/api",target:"_blank",rel:"noopener noreferrer"}},[e._v("API page"),n("OutboundLink")],1),e._v(" and select the correct base. You’ll find the Base ID there.")]),e._v(" "),n("li",[e._v("Enter the name of your table in the "),n("em",[n("strong",[e._v("Table")])]),e._v(" field.")]),e._v(" "),n("li",[e._v("Click on "),n("em",[n("strong",[e._v("Execute Node")])]),e._v(" to run the node.")])]),e._v(" "),n("p",[e._v("In the screenshot below, you will notice that the node appends the data that we had set in the previous node.")]),e._v(" "),n("p",[n("img",{attrs:{src:o(768),alt:"Using the Airtable node to insert data into an Airtable table"}})])])}),[],!1,null,null,null);t.default=a.exports},765:function(e,t,o){e.exports=o.p+"assets/img/workflow.448cefde.png"},766:function(e,t,o){e.exports=o.p+"assets/img/Analytics_node.c675131a.png"},767:function(e,t,o){e.exports=o.p+"assets/img/Set_node.c8815dac.png"},768:function(e,t,o){e.exports=o.p+"assets/img/Airtable_node.c63d6cf9.png"}}]);