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
		private string _email;
        private List<string> _customWords = new List<string>();
        //private List<CustomWord> _customWordsModel = new List<CustomWord>();
        private List<string> _playerPictures = new List<string>();
        //private List<Picture> _playerPicturesModel = new List<Picture>();
        public Player()
		{
		}

        public int Id { get => _id; set => _id = value; }
        public string PlayerName { get => _playerName; set => _playerName = value; }
        public int PlayerScore { get => _playerScore; set => _playerScore = value; }
		public int CurrentScore { get => _currentScore; set => _currentScore = value; }
		public int GamesPlayed { get => _gamesPlayed; set => _gamesPlayed = value; }
        public string Email { get => _email; set => _email = value; }
        public List<string> CustomWords { get => _customWords; set => _customWords = value; }
        //public List<CustomWord> CustomWordsModel { get => _customWordsModel; set => _customWordsModel = value; }
        public List<string> PlayerPictures { get => _playerPictures; set => _playerPictures = value; }
        //public List<Picture> PlayerPicturesModel { get => _playerPicturesModel; set => _playerPicturesModel = value; }
    }
}