using SongsinkModel;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace SongsinkDL
{
    public interface IDL
    {
        /// <summary>
        /// Get All Categories DB-Categories
        /// </summary>
        /// <returns></returns>
        Task<List<Category>> GetAllCategories();

        /// <summary>
        /// Get All Words DB-Words
        /// </summary>
        /// <returns></returns>
        Task<List<Word>> GetAllWords();

        /// <summary>
        /// Get All Words Of A Specific Category DB-Words
        /// </summary>
        /// <param name="p_categoryId"></param>
        /// <returns></returns>
        Task<List<Word>> GetAllWordsOfACategory(int p_categoryId);

        /// <summary>
        /// Get A Song Url Using Its Id DB-Songs
        /// </summary>
        /// <param name="p_songId"></param>
        /// <returns></returns>
        Task<Song> GetASong(int p_songId);

        /// <summary>
        /// Get A List Of All Songs For The User To Choose From
        /// </summary>
        /// <returns>
        /// Returns The List Of All Songs In The Database
        /// </returns>
        Task<List<Song>> GetAllSongs();

        /// <summary>
        /// Add new game history to DB-GameHistories
        /// </summary>
        /// <returns></returns>
        Task<GameHistory> AddGameHistory(GameHistory p_gameHistory);


        ///// <summary>
        ///// Adds a player to the database
        ///// </summary>
        ///// <param name="p_player">Player to add to the database</param>
        //Task AddPlayer(Player p_player);

        /// <summary>
        /// Get player from DB-Players
        /// </summary>
        /// <param name="p_email"></param>
        /// <param name="p_password"></param>
        /// <returns></returns>
        Task<Player> GetAPlayer(string p_email, string p_password);

    }
}
