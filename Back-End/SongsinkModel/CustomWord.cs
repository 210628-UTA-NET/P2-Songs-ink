using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Text.RegularExpressions;
using System.Threading.Tasks;

namespace SongsinkModel
{
	public class CustomWord
	{
		private int _id;
		private int _playerId;
		private string _customWordName;
		//private int _customCategoryId;

		public CustomWord()
		{
		}

        public int Id { get => _id; set => _id = value; }
		public int PlayerId { get => _playerId; set => _playerId = value; }
		public string CustomWordName {
			get
			{
				return CustomWordName;
			}
			set
			{
				if (!Regex.IsMatch(value, @"^[A-Za-z]+$"))
				{
					throw new Exception("Invalid Input [A-Za-z]");
				}
				CustomWordName = value;
			}
		}

        //public int CustomCategoryId { get => _customCategoryId; set => _customCategoryId = value; }
    }
}
