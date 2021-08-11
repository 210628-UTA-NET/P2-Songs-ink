using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text.RegularExpressions;

namespace SongsinkModel
{
	public class Player
	{
		private int _id;
		private string _playerName;
		private int _playerScore;
		private int _currentScore;
		private int _gamesPlayed;
		//private int _profileImgID;
		private string _email;
		private List<string> _customWords = new List<string>();
        private List<CustomCategory> _customCategoryList = new List<CustomCategory>();

        public Player()
		{
		}

        public int Id { get => _id; set => _id = value; }
        public string PlayerName { get => _playerName; set => _playerName = value; }
        public int PlayerScore { get => _playerScore; set => _playerScore = value; }
		public int CurrentScore { get => _currentScore; set => _currentScore = value; }
		public int GamesPlayed { get => _gamesPlayed; set => _gamesPlayed = value; }
		//public int ProfileImgID { get => _profileImgID; set => _profileImgID = value; }
        //public Picture ProfileImg { get; set; }
        public string Email { get => _email; set => _email = value; }
        public List<string> CustomWords { get => _customWords; set => _customWords = value; }
        internal List<CustomCategory> CustomCategoryList { get => _customCategoryList; set => _customCategoryList = value; }
    }
}