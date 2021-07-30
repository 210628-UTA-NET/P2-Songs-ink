using System;
using System.Collections.Generic;
using System.Text.RegularExpressions;

namespace SIModel
{
	public class Word
	{
		private int _id;
		private string _wordName;
		private int _categoryId;

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
	}
}
