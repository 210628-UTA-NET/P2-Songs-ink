using System;
using System.Collections.Generic;
using System.Text.RegularExpressions;

namespace SIModel
{
	public class Player
	{
		private int _id;
		private string _playerName;
		private int _playerScore;
		private int _currentScore;
		private int _gamesPlayed;
		private int _profileImgID;
		private int _playerCategoryID;
		private string _password;
		private string _salt;

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
        public int PlayerCategoryID { get => _playerCategoryID; set => _playerCategoryID = value; }
		public string Password { get => _password; set => _password = value; }
        public Category PlayerCategory { get; set; }
		public string Salt { get => _salt; set => _salt = value; }
	}
}