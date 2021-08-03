using System;
using System.Collections.Generic;
using SIModel;
using SongsinkDL;

namespace SongsinkBL
{
    public class BL : IBL
    {
        private readonly IDL _repo;
        public BL(IDL p_repo)
        {
            _repo = p_repo;
        }
        public List<Category> GetAllCategories()
        {
            return _repo.GetAllCategories();
        }

        public List<Word> GetAllWords()
        {
            return _repo.GetAllWords;
        }

        public List<Word> GetAllWordsOfACategory(int p_categoryId)
        {
            return _repo.GetAllWordsOfACategory(p_categoryId);
        }

        public string GetASongUrl(int p_songId)
        {
            return _repo.GetASongUrl(p_songId);
        }
    }
}
