from keybert import KeyBERT

doc = """
        'We are looking for a senior Python developer with strong Django skills and experience with REST APIs and PostgreSQL.'
      """
kw_model = KeyBERT()
keywords = kw_model.extract_keywords(doc, keyphrase_ngram_range=(1, 2), stop_words='english', top_n = 10)
print(keywords)