const client = require("../../lib/sunshine")

const switchboardInstance = new client.client.SwitchboardActionsApi()

const { APP_ID: appId } = process.env;

exports.passControl = async (conversationId) => {
    try {
        await switchboardInstance.passControl(appId, conversationId, {
            switchboardIntegration: 'next',
            metadata: {
                "dataCapture.ticketField.7787437179547": "Testing custom field 2",
                "dataCapture.ticketField.6302732620827": "b",
                "dataCapture.systemField.tags": "newtag,onemore",
                "dataCapture.systemField.group_id": "6510394394139",
                "dataCapture.systemField.requester.name": "Frodo2",
                "dataCapture.systemField.requester.email": "sneaky.hobbit2@ringbearers.org",
            }
        })
    } catch (e) {
        console.log(e)
    }
}