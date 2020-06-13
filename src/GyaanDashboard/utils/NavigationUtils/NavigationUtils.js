import {
    GYAAN_PATH,
    CREATE_POST_PATH,
    POST_PATH
}
from '../../constants/PathName'

export const goToGyaanHome = (history) => {
    history.push(GYAAN_PATH);
}
export const goToPostPage = (history) => {
    history.push(CREATE_POST_PATH);
}

export const goToSpecificDomain = (history, domainId) => {
    history.push(`/gyaan/followingDomains/${domainId}`)
}

export const goToSpecificPostInSpecificDomain = (history, domainId, id) => {
    history.push(`/gyaan/followingDomains/${domainId}/posts/${id}`)
}
