using SIModel;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SongsinkDL
{
    public class DL : IDL
    {
        private SIDbContext _context;
        public DL(SIDbContext p_context)
        {
            _context = p_context;
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

        List<Song> GetAllSongs()
        {
            throw new NotImplementedException();
        }

        List<Song> IDL.GetAllSongs()
        {
            throw new NotImplementedException();
        }
    }
}
