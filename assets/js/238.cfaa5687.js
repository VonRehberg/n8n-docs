(window.webpackJsonp=window.webpackJsonp||[]).push([[238],{1548:function(t,e,o){"use strict";o.r(e);var r=o(26),a=Object(r.a)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"designing-the-workflow"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#designing-the-workflow"}},[t._v("#")]),t._v(" Designing the Workflow")]),t._v(" "),r("p",[t._v("Now that we have an idea of what Nathan wants to automate, let’s enumerate the steps he needs to take to achieve this:")]),t._v(" "),r("ol",[r("li",[t._v("Get the relevant data (order id, order status, order value, employee name) from the data warehouse")]),t._v(" "),r("li",[t._v("Filter the orders by their status (processing or booked)")]),t._v(" "),r("li",[t._v("Calculate the total value of all the booked orders")]),t._v(" "),r("li",[t._v("Notify the team members about the booked orders in the company’s Discord channel")]),t._v(" "),r("li",[t._v("Insert the details about the processing orders in Airtable for follow-up")]),t._v(" "),r("li",[t._v("Schedule this workflow to run every Monday morning")])]),t._v(" "),r("p",[t._v("Nathan’s workflow involves sending data from the company’s data warehouse to two external services: Discord and Airtable. In between, the data has to be wrangled with general functions (conditional filtering, calculation, scheduling).")]),t._v(" "),r("p",[t._v("n8n provides integrations for all these steps, so Nathan’s workflow in n8n would look like this:")]),t._v(" "),r("figure",[r("img",{staticStyle:{width:"100%"},attrs:{src:o(413),alt:"Finished workflow"}}),r("figcaption",{attrs:{align:"center"}},[r("i",[t._v("Nathan's workflow")])])]),t._v(" "),r("p",[t._v("You will build this workflow in 8 steps:")]),t._v(" "),r("ol",[r("li",[r("RouterLink",{attrs:{to:"/courses/level-one/chapter-5/chapter-5.1.html"}},[t._v("Getting data from the data warehouse")])],1),t._v(" "),r("li",[r("RouterLink",{attrs:{to:"/courses/level-one/chapter-5/chapter-5.2.html"}},[t._v("Inserting data into Airtable")])],1),t._v(" "),r("li",[r("RouterLink",{attrs:{to:"/courses/level-one/chapter-5/chapter-5.3.html"}},[t._v("Filtering orders")])],1),t._v(" "),r("li",[r("RouterLink",{attrs:{to:"/courses/level-one/chapter-5/chapter-5.4.html"}},[t._v("Setting values for processing orders")])],1),t._v(" "),r("li",[r("RouterLink",{attrs:{to:"/courses/level-one/chapter-5/chapter-5.5.html"}},[t._v("Calculating booked orders")])],1),t._v(" "),r("li",[r("RouterLink",{attrs:{to:"/courses/level-one/chapter-5/chapter-5.6.html"}},[t._v("Notifying the team")])],1),t._v(" "),r("li",[r("RouterLink",{attrs:{to:"/courses/level-one/chapter-5/chapter-5.7.html"}},[t._v("Scheduling the workflow")])],1),t._v(" "),r("li",[r("RouterLink",{attrs:{to:"/courses/level-one/chapter-5/chapter-5.8.html"}},[t._v("Activating and examining the workflow")])],1)]),t._v(" "),r("div",{staticStyle:{"text-align":"center"}},[r("button",{staticStyle:{"font-weight":"600",padding:"20px 46px","border-radius":"30px",color:"#fff","background-color":"#ff6d5a","border-color":"#ff6d5a",border:"1px solid #ff6d5a","font-size":"14px"}},[r("a",{staticStyle:{color:"#fff"},attrs:{href:"chapter-5/chapter-5.1.html"}},[t._v("Start building!")])])])])}),[],!1,null,null,null);e.default=a.exports},413:function(t,e,o){t.exports=o.p+"assets/img/Finished-workflow.ed8077a6.png"}}]);