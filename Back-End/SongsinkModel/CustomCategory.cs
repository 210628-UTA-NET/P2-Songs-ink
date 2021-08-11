using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SongsinkModel
{
    public class CustomCategory
    {
        private int _id;
        private int _playerId;
        private string _customCategoryName;
        private List<CustomWord> _customWords = new List<CustomWord>();
        private Player _player;

        public CustomCategory()
        {

        }

        public int Id { get => _id; set => _id = value; }
        public int PlayerId { get => _playerId; set => _playerId = value; }
        public string CustomCategoryName { get => _customCategoryName; set => _customCategoryName = value; }
        public Player Player { get => _player; set => _player = value; }
        internal List<CustomWord> CustomWords { get => _customWords; set => _customWords = value; }
    }
}
