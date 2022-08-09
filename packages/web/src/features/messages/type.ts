const messages = ['image', 'sticker', 'gif', 'link', 'carousel', 'form', 'csat'] as const

 export type MessageType = typeof messages[number]