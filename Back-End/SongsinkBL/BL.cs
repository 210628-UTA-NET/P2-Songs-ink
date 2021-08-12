using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using SongsinkModel;
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

        public async Task<Word> GetAWord(int p_wordId)
        {
            return await _repo.GetAWord(p_wordId);
        }

        public async Task<List<Word>> GetAllWordsOfACategory(int p_categoryId)
        {
            return await _repo.GetAllWordsOfACategory(p_categoryId);
        }

        public async Task<List<Word>> GetAllWordsOfACategory(string p_categoryName)
        {
            return await _repo.GetAllWordsOfACategory(p_categoryName);
        }

        public async Task<List<Word>> Get4RandomWordsOfACategory(int p_categoryId)
        {
            List<Word> words = await this.GetAllWordsOfACategory(p_categoryId);
            List<Word> randomWords = new List<Word>();
            Random rnd = new Random();

            while(randomWords.Count != 4)
            {
                int index = rnd.Next(words.Count);
                if (!randomWords.Contains(words[index]))
                {
                    randomWords.Add(words[index]);
                }
            }

            return randomWords;
        }

        public async Task<List<Word>> Get4RandomWordsOfACategory(string p_categoryName)
        {
            List<Word> words = await this.GetAllWordsOfACategory(p_categoryName);
            List<Word> randomWords = new List<Word>();
            Random rnd = new Random();

            while (randomWords.Count != 4)
            {
                int index = rnd.Next(words.Count);
                if (!randomWords.Contains(words[index]))
                {
                    randomWords.Add(words[index]);
                }
            }

            return randomWords;
        }

        public async Task<Song> GetASong(int p_songId)
        {
            Song found = await _repo.GetASong(p_songId);
            if (found == null)
            {
                throw new Exception("Song Not Found");
            }
            return found;
        }
        public async Task<List<Song>> GetAllSongs()
        {
            return await _repo.GetAllSongs();
        }

        public async Task<GameHistory> AddGameHistory(GameHistory p_gameHistory)
        {
            return await _repo.AddGameHistory(p_gameHistory);
        }

        public async Task<GameHistory> GetGameHistory(int p_ghId)
        {
            GameHistory found = await _repo.GetGameHistory(p_ghId);
            if (found == null)
            {
                throw new Exception("GameHistory Not Found");
            }
            return found;
        }
        public async Task<Player> GetAPlayer(string p_email)
        {
            Player found = await _repo.GetAPlayer(p_email);
            if (found == null)
            {
                throw new Exception("Player Not Found");
            }
            return found;
        }

        public async Task<Player> GetAPlayer(int p_id)
        {
            Player found = await _repo.GetAPlayer(p_id);
            if (found == null)
            {
                throw new Exception("Player Not Found");
            }
            return found;
        }

        public async Task<Player> UpdatePlayer(Player p_player)
        {
            return await _repo.UpdatePlayer(p_player);
        }

        public async Task<Player> CreateNewPlayer(Player p_player)
        {
            Player found = await _repo.CreateNewPlayer(p_player);
            if (found == null)
            {
                throw new Exception("Player Not Found");
            }
            return found;
        }

    }
}
