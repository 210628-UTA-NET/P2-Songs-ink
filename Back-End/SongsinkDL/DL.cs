using Microsoft.EntityFrameworkCore;
using SongsinkModel;
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

        //public async Task AddPictures(List<Picture> p_pictures)
        //{
        //    foreach (Picture item in p_pictures)
        //    {
        //        _context.Pictures.Add(item);
        //    }
        //}

        public async Task<GameHistory> AddGameHistory(GameHistory p_gameHistory)
        {
            await _context.GameHistories.AddAsync(p_gameHistory);
            await _context.SaveChangesAsync();
            return p_gameHistory;
        }


        //public async Task AddPlayer(Player p_player)
        //{
        //    throw new NotImplementedException();
        //}

        public async Task<Player> GetAPlayer(string p_email)
        {
            return await _context.Players.FirstOrDefaultAsync(p => p.Email == p_email);
        }

        public async Task<Player> GetAPlayer(int p_id)
        {
            return await _context.Players.FirstOrDefaultAsync(p => p.Id == p_id);
        }

        public async Task<Player> UpdatePlayer(Player p_player)
        {
            Player currentPlayer = await _context.Players.FirstOrDefaultAsync(p => p.Id == p_player.Id);
            currentPlayer.PlayerName = p_player.PlayerName;
            currentPlayer.PlayerScore = p_player.PlayerScore;
            currentPlayer.CurrentScore = p_player.CurrentScore;
            currentPlayer.GamesPlayed = p_player.GamesPlayed;
            currentPlayer.Email = p_player.Email;
            currentPlayer.CustomWords = p_player.CustomWords;
            await _context.SaveChangesAsync();
            return await _context.Players.FirstOrDefaultAsync(p => p.Id == p_player.Id);
        }

        public async Task<Player> CreateNewPlayer(Player p_player)
        {
            await _context.Players.AddAsync(p_player);
            await _context.SaveChangesAsync();
            return await _context.Players.FirstOrDefaultAsync(p => p.Email == p_player.Email);
        }
    }
}
