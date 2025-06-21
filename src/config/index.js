
const HOST_URL = process.env.NEXT_HOST_BACKEND_URL

const CARDS_INFO_GRAL = {
    GET_CARD: `${HOST_URL}/`,

}

const SUMMARY_INFO_GRAL = {
    GET_SUMMARY: `${HOST_URL}/summary`,
}

const CONTACTS_INFO = {
    GET_CONTACT: `${HOST_URL}/contacts`,
}

const USERS_INFO = {
    GET_USER: `${HOST_URL}/users`
}

export default {
    CARDS_INFO_GRAL,
    SUMMARY_INFO_GRAL,
    CONTACTS_INFO,
    USERS_INFO,
    HOST_URL
}