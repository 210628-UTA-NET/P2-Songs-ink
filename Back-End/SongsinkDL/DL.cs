using Microsoft.EntityFrameworkCore;
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
        public async Task<List<Category>> GetAllCategories()
        {
            return await _context.Categories.Select(cat=>cat).ToListAsync();
        }

        public async Task<List<Word>> GetAllWords()
        {
            return await _context.Words.Select(word => word).ToListAsync();
        }

        public async Task<List<Word>> GetAllWordsOfACategory(int p_categoryId)
        {
            return await _context.Words.Where(word => word.CategoryId == p_categoryId).Select(word => word).ToListAsync();
        }

        public string GetASongUrl(int p_songId)
        {           
            return _context.Songs.FirstOrDefault(song => song.Id == p_songId).SongURL.ToString();
        }

        public async Task<List<Song>> GetAllSongs()
        {
            return await _context.Songs.Select(song => song).ToListAsync();
        }

        public void AddPictures(List<Picture> p_pictures)
        {
            foreach (Picture item in p_pictures)
            {
                _context.Pictures.Add(item);
            }
        }

        public void AddRoom(Room p_room)
        {
            throw new NotImplementedException();
        }

        public void PlayerCategory(Player p_player, Category p_category)
        {
            throw new NotImplementedException();
        }

        public void AddPlayer(Player p_player)
        {
            throw new NotImplementedException();
        }
    }
}
