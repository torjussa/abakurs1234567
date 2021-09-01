import client from '@sanity/client'

export default client({
    projectId:"bkue96ux",
    dataset: "production",
    useCdn: true //false hvis ha alltid oppdatert data
})