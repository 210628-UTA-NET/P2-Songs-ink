using System;
using System.Collections.Generic;

namespace SongsinkModel
{
	public class Picture
	{
		private int _id;
		private string _pictureURL;


		public Picture()
		{
		}

        public int Id { get => _id; set => _id = value; }
        public string PictureURL { get => _pictureURL; set => _pictureURL = value; }
		//public List<Player> PlayerPicture { get; set; }
    }

}