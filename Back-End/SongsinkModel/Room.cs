using System;
using System.Collections.Generic;

namespace SongsinkModel
{
	public class Room
	{
        private int _id;
        private string _password;
        private bool _public;
		public Room()
		{
		}

        public int Id { get => _id; set => _id = value; }
        public string Password { get => _password; set => _password = value; }
        public bool Public { get => _public; set => _public = value; }
        public List<Picture> PicturesInRoom{get; set; }
    }

}