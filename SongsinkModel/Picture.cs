using System;
using System.Collections.Generic;

namespace SIModel
{
	public class Picture
	{
		private int _id;
		private string _pictureURL;
		private int _roomID;

		public Picture()
		{
		}

        public int Id { get => _id; set => _id = value; }
        public string PictureURL { get => _pictureURL; set => _pictureURL = value; }
		public int RoomID { get => _roomID; set => _roomID = value; }
		public Room PictureRoom {get; set; }
		public List<Player> PlayerPicture { get; set; }
    }

}