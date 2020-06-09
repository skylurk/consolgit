const initState = {
    handoveritems: [
        {id: '1', questionTitle: 'Safety Occurence', questionItem: 'Have you handed over safety?', hasAttachment: 'none', positionQuestion: 'General', questionCode: 'A5', stationQuestion: 'Juba'},
        {id: '2', questionTitle: 'Hazards', questionItem: 'Have you handed over hazard details?', hasAttachment: 'none', positionQuestion: 'General', questionCode: 'A5', stationQuestion: 'Kalemie'},
        {id: '3', questionTitle: 'WFP Meetings', questionItem: 'Have you discussed WFP meetings', hasAttachment: 'none', positionQuestion: 'General', questionCode: 'A5', stationQuestion: 'Bamako'},
    ]
} 

const handoverItemReducer = (state = initState, action) => {
    switch(action.type){
        case 'CREATE_HANDOVER_ITEM':
            console.log('created item', action.handoveritem);
            return state;
        case 'CREATE_HANDOVER_ITEM_ERROR':
            console.log('create handover item error', action.err);
            return state;
        default: 
            return state;
    }
}

export default handoverItemReducer