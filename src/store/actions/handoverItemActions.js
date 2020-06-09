export const createHandoverItem = (handoveritem) => {
    return (dispatch, getState, { getFirebase, getFirestore}) =>{
        //make an asyncronous call to database
        const firestore = getFirestore();
        firestore.collection('CaptainQuestionItems').add({
            ...handoveritem,
            createdBy: 'David I',
            createdAt: new Date(),
            CheckBox: false 
        }).then(() => {
            dispatch({ type: 'CREATE_HANDOVER_ITEM', handoveritem })
        }).catch((err) => {
            dispatch({ type: 'CREATE_HANDOVER_ITEM_ERROR', err})
        })
    }
};