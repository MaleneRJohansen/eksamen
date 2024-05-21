import { createClient } from '@sanity/client'

const client = createClient({
  projectId: 'sq6ylbo5',
  dataset: 'production',
  apiVersion: '2024-05-21',
  useCdn: true,
  token: "skLcMYjZj45FdqdENnhjSCfAFCnYnZ5MZQ1tIqCRcClePNd5JgjKCe5gCaLOXRVzuUzuMrYXEylHjdxbNaiQcOzAWcXJ0LRaaJLP8iil0OZXQS4qB0dEIY7TQu3ZST3nbSaT2pkFLK6PQesWDgzlGv6j5uHdoo84ELBDXbP2hteE8ix5vs7p"
})

export default client;
