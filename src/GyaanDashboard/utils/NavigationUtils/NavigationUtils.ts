import {
   GYAAN_PATH,
   CREATE_POST_PATH
} from '../../constants/PathName'

import {history} from 'react-router-dom'

export const goToGyaanHome = (history:history) => {
   history.push(GYAAN_PATH)
}
export const goToPostPage = (history:history) => {
   history.push(CREATE_POST_PATH)
}

export const goToSpecificDomain = (history:history, domainId:number) => {
   history.push(`/gyaan/followingDomains/${domainId}`)
}

export const goToSpecificPostInSpecificDomain = (history:history, domainId:number, id:number) => {
   history.push(`/gyaan/followingDomains/${domainId}/posts/${id}`)
}
