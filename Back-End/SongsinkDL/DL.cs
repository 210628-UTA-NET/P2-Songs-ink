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
            return _context.Categories.Select(cat=>cat).ToList();
        }

        public List<Word> GetAllWords()
        {
            return _context.Words.Select(word => word).ToList();
        }

        public List<Word> GetAllWordsOfACategory(int p_categoryId)
        {
            return _context.Words.Where(word => word.CategoryId == p_categoryId).Select(word => word).ToList();
        }

        public string GetASongUrl(int p_songId)
        {
            return _context.Songs.FirstOrDefault(song => song.Id == p_songId).SongURL;
        }

        public List<Song> GetAllSongs()
        {
            return _context.Songs.Select(song => song).ToList();
        }
    }
}
