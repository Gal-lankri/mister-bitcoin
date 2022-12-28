import { storageService } from './storage.service'
const STORAGE_KEY = 'user'

export const userService = {
    getUser,
    signup,
    addMove
}

// const user = getUser()

function getUser() {
    if (storageService.load(STORAGE_KEY)) return storageService.load(STORAGE_KEY)
    return null
}

function signup(name) {
    if (storageService.load(STORAGE_KEY)) {
        return 'You are already registered'
    } else {
        const user = {
            name,
            coins: 100,
            moves: []
        }
        storageService.store(STORAGE_KEY, user)
    }
}

function addMove(contact, amount) {
    const move = {
        toId: contact._id,
        to: contact.name,
        at: Date.now(),
        amount
    }
    const user = storageService.load(STORAGE_KEY)
    user.moves.push(move)
    storageService.store(STORAGE_KEY, user)

}