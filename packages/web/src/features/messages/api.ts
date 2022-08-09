import { message } from 'antd'
import { axios } from 'lib/axios'
import { MessageType } from './type'

export const sendMessage = async (messageType: MessageType): Promise<void> => {
    const conversation = await window.Smooch.getConversationById()
    try {
        await axios.post('/messages', {
            conversationId: conversation.id,
            messageType
        })
    } catch (e) {
        console.log(e)
        message.error('Ops, something went wrong.')
    }
}
