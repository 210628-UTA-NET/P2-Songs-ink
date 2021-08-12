using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SongsinkModel
{
    public class GameHistory
    {
        private int _id;
        private DateTime _date;
        private List<string> _pictureURLs;
        private List<GameHistoryPicture> _pictureURLModel = new List<GameHistoryPicture>();
        private string _chatLogURL;

        public GameHistory()
        {
        }
        public int Id { get => _id; set => _id = value; }
        public DateTime Date { get => _date; set => _date = value; }
        public List<string> PictureURLs { get => _pictureURLs; set => _pictureURLs = value; }
        public List<GameHistoryPicture> PictureURLModel { get => _pictureURLModel; set => _pictureURLModel = value; }
        public string ChatLogURL { get => _chatLogURL; set => _chatLogURL = value; }
    }
}
