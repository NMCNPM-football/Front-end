export const unsupportedKeyCharRegex = new RegExp('^\\s+|\\\.|\:|\\\$|\'|\"|\\\\|\\s+$', 'g')
export const unsupportedValueCharRegex = new RegExp("^\\s+|\'|\"|\\\\|\\s+$", 'g')
export const NOTIFICATION_VIEWED = 'Notification Viewed'
export const NOTIFICATION_CLICKED = 'Notification Clicked'
export const CHARGED_ID = 'Charged ID'
export const CHARGED_AMOUNT = 'Amount'
export const CLIENT_ID = 'client_id'
export const COOKIE_EXPIRY = 86400 * 365 // 1 Year in seconds
export const CHARGED_ID_COOKIE_NAME = 'CHARGED_ID'
export const EVT_PUSH = 'push'
export const CUSTOMER_ID = 'Customer ID'
export const CUSTOMER_EMAIL = 'Email'
export const CUSTOMER_PHONE = 'Phone'
export const UTM_VISITED = "UTM_VISITED"

export const SYSTEM_EVENTS = [
    'Stayed',
    'UTM Visited',
    'App Launched',
    'Notification Sent',
    NOTIFICATION_VIEWED,
    NOTIFICATION_CLICKED
]


export const DATA_NOT_SENT_TEXT = 'This property has been ignored.'
export const CLICKY_ERROR_PREFIX = 'Clicky error:' // Formerly wzrk_error_txt
export const EVENT_ERROR = `${CLICKY_ERROR_PREFIX} Event structure not valid. ${DATA_NOT_SENT_TEXT}`
export const EMBED_ERROR = `${CLICKY_ERROR_PREFIX} Incorrect embed script.`
export const TARGET_DOMAIN = "localhost:8088"
export const TARGET_PROTOCOL = "http"
