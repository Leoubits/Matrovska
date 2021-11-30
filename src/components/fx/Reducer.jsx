import React, { useEffect } from 'react'

export const initialState = {
    products: [],
    showModal: false
}

export const Reducer = (state, action) => {

    if (action.type === 'ADD_ITEM') {
        let newItems = [...state.products, action.payload];

        if (typeof window !== 'undefined') {
            const entries = JSON.parse(localStorage.getItem('added_items')) || [];
            const plainedEntries = entries.flat();
            const stringified = JSON.stringify(plainedEntries);

            if (stringified.includes(newItems[0].id)) {
                plainedEntries.map((entry) => {
                    if (
                        newItems != '' &&
                        entry.id === newItems[0].id
                    ) {
                        const reducer = (previousValue, currentValue) => previousValue + currentValue;
                        const valuesx = newItems.map(item => {
                            return item.qty;
                        })
                        const total = valuesx.reduce(reducer)

                        plainedEntries.map(item => {
                            if (item.id === newItems[0].id) {
                                item.qty = total;
                            }
                        })
                        localStorage.setItem('added_items', JSON.stringify(plainedEntries));
                    } else {

                    }
                })

            } else {
                plainedEntries.push(newItems);
                localStorage.setItem('added_items', JSON.stringify(plainedEntries));

            }

        }
        return {
            ...state,
            products: newItems
        }


    }
    else if (action.type === 'SHOW_MODAL') {
        return {
            ...state,
            showModal: true
        }


    }
    else if (action.type === 'CLOSE_MODAL') {
        return {
            ...state,
            showModal: false
        }


    }

}