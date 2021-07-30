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

		public Player()
		{
		}

        public int Id { get => _id; set => _id = value; }
        public string PlayerName { get => _playerName; set => _playerName = value; }
        public int PlayerScore { get => _playerScore; set => _playerScore = value; }
    }
}