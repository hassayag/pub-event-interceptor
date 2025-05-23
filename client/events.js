var pbjs = pbjs || {};
pbjs.que = pbjs.que || [];

PORT = 5009
BASE_URL = `http://localhost:${PORT}/api`

const EVENT_TYPES = ['auctionInit', 'bidRequested', 'bidResponse']

pbjs.que.push(() => {
    EVENT_TYPES.forEach(eventType => {
        createEventListener(eventType)
    })
})

function createEventListener(eventType) {
    pbjs.onEvent(eventType, function(data) {
        if (!data) {
            console.warn(`${eventType} event is missing data`)
            return
        }

        console.debug(`Sending ${eventType} event to server -`,data)
        
        navigator.sendBeacon(`${BASE_URL}/event`, JSON.stringify({eventType, data}))
    })
}
