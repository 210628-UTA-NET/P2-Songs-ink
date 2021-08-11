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
        private List<string> _pictureUrls;
        private string _chatLogUrl;

        public GameHistory()
        {
        }
        public int Id { get => _id; set => _id = value; }
        public DateTime Date { get => _date; set => _date = value; }
        public List<string> PictureUrls { get => _pictureUrls; set => _pictureUrls = value; }
        public string ChatLogUrl { get => _chatLogUrl; set => _chatLogUrl = value; }
    }
}
