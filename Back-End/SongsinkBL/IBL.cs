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

        


    }
}
