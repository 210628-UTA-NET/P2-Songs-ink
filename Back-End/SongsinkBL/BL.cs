using System;
using System.Collections.Generic;
using System.Threading.Tasks;
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
        public async Task<List<Category>> GetAllCategories()
        {
            return await _repo.GetAllCategories();
        }

        public async Task<List<Word>> GetAllWords()
        {
            return await _repo.GetAllWords();
        }

        public async Task<List<Word>> GetAllWordsOfACategory(int p_categoryId)
        {
            return await _repo.GetAllWordsOfACategory(p_categoryId);
        }

        public async Task<Song> GetASong(int p_songId)
        {
            Song found = await _repo.GetASong(p_songId);
            if (found == null)
            {
                throw new Exception("Song URL Not Found");
            }
            return found;
        }
        public async Task<List<Song>> GetAllSongs()
        {
            return await _repo.GetAllSongs();
        }
    }
}
