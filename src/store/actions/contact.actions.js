import { contactService } from '../../services/contact.service'

export function loadContacts() {
    return async (dispatch, getState) => {
        try {
            const filterBy = getState().contactModule.filterBy
            const contacts = await contactService.getContacts(filterBy)
            dispatch({ type: 'SET_CONTACTS', contacts })

        } catch (err) {
            console.log('err:', err)
        }

    }
}

export function setFilterBy(filterBy) {
    return async (dispatch) => {
        try {
            dispatch({ type: 'SET_FILTER_BY', filterBy: { ...filterBy } })
        } catch (err) {
            console.log('err:', err)
        }
    }
}