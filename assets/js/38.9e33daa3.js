(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{1815:function(e,t,i){"use strict";i.r(t);var a=i(26),s=Object(a.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"item-lists"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#item-lists"}},[e._v("#")]),e._v(" Item Lists")]),e._v(" "),a("p",[e._v("The Item Lists node simplifies working with returned data that contain lists (arrays), enabling you to easily modify the structure for further processing without the need to use "),a("RouterLink",{attrs:{to:"/nodes/nodes-library/core-nodes/ItemLists/Function/"}},[e._v("Function")]),e._v(" nodes and write custom JavaScript.")],1),e._v(" "),a("h2",{attrs:{id:"operations"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#operations"}},[e._v("#")]),e._v(" Operations")]),e._v(" "),a("p",[e._v("The Item Lists node enables you to perform the following operations:")]),e._v(" "),a("ul",[a("li",[a("em",[e._v("Split Out Items")]),e._v(": Create separate items from a list of data within an item.")]),e._v(" "),a("li",[a("em",[e._v("Aggregate Items")]),e._v(": Merge multiple items into a single new item.")]),e._v(" "),a("li",[a("em",[e._v("Remove Duplicates")]),e._v(": Remove extraneous items.")]),e._v(" "),a("li",[a("em",[e._v("Sort")]),e._v(": Change the ordering of items.")]),e._v(" "),a("li",[a("em",[e._v("Limit")]),e._v(": Remove items beyond a defined maximum number.")])]),e._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[e._v("💡 Keep in mind")]),e._v(" "),a("p",[e._v("When configuring the Item Lists node, all fields needing a "),a("code",[e._v("key")]),e._v(" value (e.g. Field to Split Out) must be manually entered in plaintext, you cannot use expressions for these fields.")])]),e._v(" "),a("h3",{attrs:{id:"split-out-items"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#split-out-items"}},[e._v("#")]),e._v(" Split Out Items")]),e._v(" "),a("p",[e._v("This operation is useful if your data contains a list of items, for example a list of customers, and you want to split them so that you have an item for each customer.")]),e._v(" "),a("p",[a("img",{attrs:{src:i(689),alt:"Split Out Items output"}})]),e._v(" "),a("p",[e._v("When using the "),a("em",[e._v("Split Out Items")]),e._v(" operation, configure the following parameters and options:")]),e._v(" "),a("ul",[a("li",[a("em",[e._v("Field to Split Out")]),e._v(": The field containing the list you want to separate out into individual items (e.g. "),a("code",[e._v("Name")]),e._v(" in the example here). "),a("strong",[e._v("Must be plaintext and not an expression.")])]),e._v(" "),a("li",[a("em",[e._v("Include")]),e._v(": Select if any other fields from the input data should be kept with each new individual item. You can select:\n"),a("ul",[a("li",[a("em",[e._v("No Other Fields")])]),e._v(" "),a("li",[a("em",[e._v("All Other Fields")])]),e._v(" "),a("li",[a("em",[e._v("Selected Other Fields")]),e._v(": When selected, a "),a("em",[e._v("Fields to Include")]),e._v(" field is displayed. Enter a comma separated list of desired fields.")])])]),e._v(" "),a("li",[a("em",[e._v("Disable Dot Notation")]),e._v(": When disabled, child fields (in the format "),a("code",[e._v("parent.child")]),e._v(") cannot be referenced.")]),e._v(" "),a("li",[a("em",[e._v("Destination Field Name")]),e._v(": Optionally set the field name under which to put the new split contents.")])]),e._v(" "),a("h3",{attrs:{id:"aggregate-items"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#aggregate-items"}},[e._v("#")]),e._v(" Aggregate Items")]),e._v(" "),a("p",[e._v("The Aggregate Items operations is useful when you want to take many separate items, or just particular portions of them, and group them together into individual items. For example, the image below shows customer names and email addresses being grouped into individual items from a series of individual customer records that contained many other details.")]),e._v(" "),a("p",[a("img",{attrs:{src:i(690),alt:"Aggregate Items output"}})]),e._v(" "),a("p",[e._v("When using the "),a("em",[e._v("Aggregate Items")]),e._v(" operation, configure the following parameters and options:")]),e._v(" "),a("ul",[a("li",[a("em",[e._v("Field To Aggregate")]),e._v(": The name of the field in the input data to be aggregated together.")]),e._v(" "),a("li",[a("em",[e._v("Rename Field")]),e._v(": Enable this toggle to enter a field name for the aggregated output data. When aggregating multiple fields you must provide new output field names, "),a("strong",[e._v("multiple fields cannot be left undefined")]),e._v(".")]),e._v(" "),a("li",[a("em",[e._v("Output Field Name")]),e._v(": Displayed only when "),a("em",[e._v("Rename Field")]),e._v(" is enabled. The field name for the aggregated output data.")]),e._v(" "),a("li",[a("em",[e._v("Disable Dot Notation")]),e._v(": When disabled, child fields (in the format "),a("code",[e._v("parent.child")]),e._v(") cannot be referenced.")]),e._v(" "),a("li",[a("em",[e._v("Preserve Aggregated Lists")]),e._v(": If enabled, fields to aggregate that are lists will output a list of lists (rather than being merged into a single list).")])]),e._v(" "),a("h3",{attrs:{id:"remove-duplicates"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#remove-duplicates"}},[e._v("#")]),e._v(" Remove Duplicates")]),e._v(" "),a("p",[e._v("There are many situations where you can end up with duplicate data, a user creating multiple accounts, a customer submitting the same order multiple time, etc. When working with large datasets it becomes more difficult to easily spot and remove these items.")]),e._v(" "),a("p",[e._v("The Remove Duplicates operation allows you to identify those items that are identical across all fields or only a desired subset of fields.")]),e._v(" "),a("p",[a("img",{attrs:{src:i(691),alt:"Remove Duplicate Items output"}})]),e._v(" "),a("p",[e._v("When using the "),a("em",[e._v("Remove Duplicates")]),e._v(" operation, configure the following parameters and options:")]),e._v(" "),a("ul",[a("li",[a("em",[e._v("Compare")]),e._v(": Provide which fields of the input data should be compared to check if they are the same. The following options are available:\n"),a("ul",[a("li",[a("em",[e._v("All Fields")]),e._v(": Compares all fields of the input data.")]),e._v(" "),a("li",[a("em",[e._v("All Fields Except")]),e._v(": Enter which input data fields should be excluded from the comparison. Multiple values can be provided separated by commas.")]),e._v(" "),a("li",[a("em",[e._v("Selected Fields")]),e._v(": Enter which input data fields should be included in the comparison. Multiple values can be provided separated by commas.")])])]),e._v(" "),a("li",[a("em",[e._v("Disable Dot Notation")]),e._v(": When disabled, child fields (in the format "),a("code",[e._v("parent.child")]),e._v(") cannot be referenced.")])]),e._v(" "),a("h3",{attrs:{id:"sort"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#sort"}},[e._v("#")]),e._v(" Sort")]),e._v(" "),a("p",[e._v("The Sort operation allows you to organize lists of in a desired ordering, or generate a random selection if desired (i.e. assign tasks to users randomly).")]),e._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[e._v("💡 Keep in mind")]),e._v(" "),a("p",[e._v("The Sort operation uses the default JavaScript operation where the elements to be sorted are converted into strings and their values compared. See "),a("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),a("OutboundLink")],1),e._v(" to learn more.")])]),e._v(" "),a("p",[a("img",{attrs:{src:i(692),alt:"Sort Items output"}})]),e._v(" "),a("p",[e._v("When using the "),a("em",[e._v("Sort")]),e._v(" operation, configure the following parameters and options:")]),e._v(" "),a("ul",[a("li",[a("em",[e._v("Type")]),e._v(": Use the dropdown to select how you want to input the sorting. The following options are available:\n"),a("ul",[a("li",[a("em",[e._v("Simple")]),e._v(": When you selected, you can use the *"),a("em",[e._v("Add Field To Sort By")]),e._v(" button to input the desired fields, and select whether "),a("em",[e._v("Ascending")]),e._v(" or "),a("em",[e._v("Descending")]),e._v(" order is desired.")]),e._v(" "),a("li",[a("em",[e._v("Random")]),e._v(": Select to create a random order in the list.")]),e._v(" "),a("li",[a("em",[e._v("Code")]),e._v(": When selected, displays a code input field where you can enter custom JavaScript code to perform the sort operation.")])])])]),e._v(" "),a("h3",{attrs:{id:"limit"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#limit"}},[e._v("#")]),e._v(" Limit")]),e._v(" "),a("p",[e._v("If you want to keep and process only a specific number of items from your incoming data, the Limit operation allows you to select the desired number of items to keep and whether they should be taken from the beginning or end of the data (e.g. take the 5 highest priority tickets, the oldest order, etc.).")]),e._v(" "),a("p",[a("img",{attrs:{src:i(693),alt:"Limit Items output"}})]),e._v(" "),a("p",[e._v("When using the "),a("em",[e._v("Limit")]),e._v(" operation, configure the following parameters and options:")]),e._v(" "),a("ul",[a("li",[a("em",[e._v("Max Items")]),e._v(": Enter the maximum number of items that should be kept. If the input data contains more than this value, items will be removed.")]),e._v(" "),a("li",[a("em",[e._v("Keep")]),e._v(": When items must be removed, select if the input items at the beginning or end are kept.")])])])}),[],!1,null,null,null);t.default=s.exports},689:function(e,t,i){e.exports=i.p+"assets/img/split_out.50b4e02b.png"},690:function(e,t,i){e.exports=i.p+"assets/img/aggregate.151b282f.png"},691:function(e,t,i){e.exports=i.p+"assets/img/duplicates.9938fea4.png"},692:function(e,t,i){e.exports=i.p+"assets/img/sort.f4d8f72e.png"},693:function(e,t,i){e.exports=i.p+"assets/img/limit.78251154.png"}}]);