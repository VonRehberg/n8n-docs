---
permalink: /nodes/n8n-nodes-base.formIoTrigger
description: Learn how to use the Form.io Trigger node in n8n
---

# Form.io Trigger

[Form.io](https://www.form.io/) is an enterprise class combined form and API data management platform for building complex form-based business process applications.

::: tip 🔑 Credentials
You can find authentication information for this node [here](../../../credentials/FormIo/README.md).
:::

## Example Usage

This workflow allows you to receive updates for newly created submissions in Form.io. This example workflow uses the following node:
- [Form.io Trigger]()

The final workflow should look like the following image.

![A workflow with the Form.io Trigger node](./workflow.png)


### 1. Form.io Trigger node

1. First enter credentials for the Form.io Trigger node. You can find out how to do that [here](../../../credentials/FormIo/README.md).
2. Select the project you want to receive updates for using the *Project Name/ID* dropdown list.
3. Select the form you want to receive updates for using the *Form Name/ID* dropdown list.
4. Select **Submission Created** from the *Trigger Events* dropdown list.
5. Click on **Execute Node** to run the workflow.

::: tip 💡 Activate workflow for production
You'll need to save the workflow and then click on the Activate toggle on the top right of the screen to activate the workflow. Your workflow will then be triggered as specified by the settings in the Form.io Trigger node.
:::