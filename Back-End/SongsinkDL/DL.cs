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

        public async Task<Song> GetASong(int p_songId)
        {
            return await _context.Songs.FirstOrDefaultAsync(song => song.Id == p_songId);
        }

        public async Task<List<Song>> GetAllSongs()
        {
            return await _context.Songs.Select(song => song).ToListAsync();
        }

        public async Task AddPictures(List<Picture> p_pictures)
        {
            foreach (Picture item in p_pictures)
            {
                _context.Pictures.Add(item);
            }
        }

        public async Task<GameHistory> AddGameHistory(GameHistory p_gameHistory)
        {
            _context.GameHistories.Add(p_gameHistory);
            _context.SaveChanges();
            return await _context.GameHistories.FirstOrDefaultAsync(gh => gh.ChatLogUrl == p_gameHistory.ChatLogUrl
                                                                    && gh.Date == p_gameHistory.Date);
        }

        public async Task AddRoom(Room p_room)
        {
            throw new NotImplementedException();
        }

        public async Task PlayerCategory(Player p_player, Category p_category)
        {
            throw new NotImplementedException();
        }

        public async Task AddPlayer(Player p_player)
        {
            throw new NotImplementedException();
        }

        
    }
}
