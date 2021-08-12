using System;
using System.Collections.Generic;

namespace SongsinkModel
{
	public class PlayerPicture
	{
		private int _id;
		private int _playerId;
		private string _pictureURL;


		public PlayerPicture()
		{
		}

        public int Id { get => _id; set => _id = value; }
        public int PlayerId { get => _playerId; set => _playerId = value; }
        public string PictureURL { get => _pictureURL; set => _pictureURL = value; }
    }

}