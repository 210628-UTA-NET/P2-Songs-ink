using System;

namespace SIModel
{
	public class Song
	{
		private int _id;
		private string _songName;
		private string _songURL;
		public Song()
		{
		}


        public int Id { get => _id; set => _id = value; }
        public string SongName { get => _songName; set => _songName = value; }
        public string SongURL { get => _songURL; set => _songURL = value; }
    }

}
