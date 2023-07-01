# Semantic search - OpenAI + Pinecone

Semantic search is a more sophisticated form of search that goes beyond matching keywords, it takes into consideration the meaning behind the words used in a query. Unlike regular search which mostly matches keywords, regardless of their context or relationships with each other. Semantic search, on the other hand, tries to understand the intent behind the search query, and returns results that are more relevant to the user's actual needs.

In semantic search, the query text is transformed into a vector embedding, and the similarity between the query embedding and the document embeddings is calculated to determine the relevance of the results. Each word or phrase in the text is assigned a unique vector in a high-dimensional space, where each dimension represents a particular feature or aspect of the word's meaning.

We can create vector embeddings from text using OpenAI. OpenAI offers an Embedding API that allows you to generate vector embeddings of text data, including words, phrases, and documents. Once the embeddings are generated, they can be stored and indexed in a database or search engine, like Pinecone, for fast and efficient search and retrieval. The combination of OpenAI Embedding API and Pinecone can be used to build powerful and efficient applications that process large amounts of text data, like semantic search, question answering, and threat detection.

Here's how it works:

1. Embed and Index: Turn your text data into vector embeddings using OpenAI Embedding API. Store and organize these embeddings in Pinecone, which can operate at scale and search quickly.
2. Search: Convert your query text into a vector embedding using OpenAI Embedding API. Send this embedding as a query to Pinecone, which returns similar text documents even if they don't share the same keywords.

   ![Screen Shot 2023-01-30 at 4.32.15 PM.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/374c9564-e422-43ee-9901-eb1836fe5d73/Screen_Shot_2023-01-30_at_4.32.15_PM.png)

   **Collab**: [Semantic Search with Pinecone and OpenAI](https://colab.research.google.com/github/pinecone-io/examples/blob/master/integrations/openai/semantic_search_openai.ipynb)

   This setup combined with other models like OpenAI whisper, which can translate audio to text makes it possible to query audio and videos files.

   Projects using this approach:

   - [https://all-in-on-ai.vercel.app/](https://all-in-on-ai.vercel.app/) (Allows to query youtube podcast All in one)

   **Embeddings video**:

   [https://www.youtube.com/watch?v=5MaWmXwxFNQ&ab_channel=AssemblyAI](https://www.youtube.com/watch?v=5MaWmXwxFNQ&ab_channel=AssemblyAI)
