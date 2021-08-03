using System;
using SIModel;
using System.Collections.Generic;

namespace SongsinkBL
{
    public interface IBL
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


    }
}
