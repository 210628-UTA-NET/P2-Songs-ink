using System;
using System.Collections.Generic;
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
		private int _profileImgID;
		private string _password;
		private string _salt;
		private string _email;
		private List<CustomCategory> _customCategoryList = new List<CustomCategory>();

		public Player()
		{
		}

        public int Id { get => _id; set => _id = value; }
        public string PlayerName { get => _playerName; set => _playerName = value; }
        public int PlayerScore { get => _playerScore; set => _playerScore = value; }
		public int CurrentScore { get => _currentScore; set => _currentScore = value; }
		public int GamesPlayed { get => _gamesPlayed; set => _gamesPlayed = value; }
		public int ProfileImgID { get => _profileImgID; set => _profileImgID = value; }
        public Picture ProfileImg { get; set; }
		public string Password { get => _password; set => _password = value; }
		public string Salt { get => _salt; set => _salt = value; }
        public string Email { get => _email; set => _email = value; }
        internal List<CustomCategory> CustomCategoryList { get => _customCategoryList; set => _customCategoryList = value; }
    }
}