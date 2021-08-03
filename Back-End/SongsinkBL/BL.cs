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
            throw new NotImplementedException();
        }

        public List<Word> GetAllWords()
        {
            throw new NotImplementedException();
        }

        public List<Word> GetAllWordsOfACategory(int p_categoryId)
        {
            throw new NotImplementedException();
        }

        public string GetASongUrl(int p_songId)
        {
            throw new NotImplementedException();
        }
    }
}
