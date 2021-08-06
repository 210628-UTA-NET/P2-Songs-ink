using System;
using System.Collections.Generic;
using System.Text.RegularExpressions;

namespace SongsinkModel
{
	public class Word
	{
		private int _id;
		private string _wordName;
		private int _categoryId;
		private Category _category;

		public Word()
		{
		}

		public int Id { get; set; }
		public string WordName
		{
			get
			{
				return _wordName;
			}
			set
			{
				if (!Regex.IsMatch(value, @"^[A-Za-z]+$"))
				{
					throw new Exception("Invalid Input [A-Za-z]");
				}
				_wordName = value;
			}
		}
		public int CategoryId { get; set; }
		public Category Category {get => _category; set => _category = value; }

	}
}
