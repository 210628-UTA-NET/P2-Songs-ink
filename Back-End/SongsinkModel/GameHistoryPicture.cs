using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SongsinkModel
{
    public class GameHistoryPicture
    {
        private int _id;
        private int _gameHistoryId;
        private string _pictureURL;

        public GameHistoryPicture()
        {

        }

        public int Id { get => _id; set => _id = value; }
        public int GameHistoryId { get => _gameHistoryId; set => _gameHistoryId = value; }
        public string PictureURL { get => _pictureURL; set => _pictureURL = value; }
    }
}
