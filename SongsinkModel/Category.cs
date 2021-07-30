using System;
using System.Collections.Generic;
using System.Text.RegularExpressions;

namespace SIModel
{
	public class Category
	{
		private int _id;
		private string _categoryName;
		private List<Word> _words = new List<Word>();

		public Category ()
		{
		}

		public int Id { get; set; }
		public string CategoryName 
		{ 
			get
			{
				return _categoryName;
			}
			set
			{
				if (!Regex.IsMatch(value, @"^[A-Za-z .'-]+$"))
				{
					throw new Exception("Invalid Input [A-Za-z .'-]");
				}
				_categoryName = value;
			}
		}
	}
}
