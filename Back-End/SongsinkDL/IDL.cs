using SIModel;
using System;
using System.Collections.Generic;

namespace SongsinkDL
{
    public interface IDL
    {
        /// <summary>
        /// Get All Categories DB-Categories
        /// </summary>
        /// <returns></returns>
        List<Category> GetAllCategories();

        /// <summary>
        /// Get All Words DB-Words
        /// </summary>
        /// <returns></returns>
        List<Word> GetAllWords();

        /// <summary>
        /// Get All Words Of A Specific Category DB-Words
        /// </summary>
        /// <param name="p_categoryId"></param>
        /// <returns></returns>
        List<Word> GetAllWordsOfACategory(int p_categoryId);

        /// <summary>
        /// Get A Song Url Using Its Id DB-Songs
        /// </summary>
        /// <param name="p_songId"></param>
        /// <returns></returns>
        string GetASongUrl(int p_songId);

        /// <summary>
        /// Get A List Of All Songs For The User To Choose From
        /// </summary>
        /// <returns>
        /// Returns The List Of All Songs In The Database
        /// </returns>
        List<Song> GetAllSongs();
        
        /// <summary>
        /// Add a list of pictures to the Database
        /// </summary>
        /// <param name="p_pictures">list of pictures to add</param>
        void AddPictures(List<Picture> p_pictures);

        /// <summary>
        /// Update or Create a category for a player.
        /// </summary>
        /// <param name="p_player"></param>
        /// <param name="p_category"></param>
        void PlayerCategory(Player p_player, Category p_category);

        /// <summary>
        /// Adds a player to the database
        /// </summary>
        /// <param name="p_player">Player to add to the database</param>
        void AddPlayer(Player p_player);

    }
}
