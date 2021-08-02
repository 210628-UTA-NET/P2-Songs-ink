using System;
using System.Collections.Generic;
using Xunit;
using SIModel;
using SongsinkDL;
using Microsoft.EntityFrameworkCore;

namespace SonsinkTests
{
    public class SongsinkRepositoryTest
    {

        private readonly DbContextOptions<SIDbContext> _options;

        public SongsinkRepositoryTest()
        {
            _options = new DbContextOptionsBuilder<SIDbContext>().UseSqlite("Filename = test.db").Options;
            this.Seed();
        }
 
        [Fact]
        public void GetAllCategoriesShouldGetAllCategories()
        {
            using (var context = new SIDbContext(_options))
            {
                //Arrange
                IDL dl = new DL(context);

                //Act
                List<Category> allCategories = dl.GetAllCategories();

                //Assert
                Assert.Equal(4, allCategories.Count);
                foreach (Category category in allCategories)
                {
                    Assert.NotNull(category);
                    Assert.NotEqual(0,category.Id);
                    Assert.NotEqual("", category.CategoryName);
                }
            }
        }
        [Fact]
        public void GetAllWordsShouldGetAllWords()
        {
            using (var context = new SIDbContext(_options))
            {
                //Arrange
                IDL dl = new DL(context);

                //Act
                List<Word> allWords = dl.GetAllWords();

                //Assert
                Assert.Equal(8, allWords.Count);
                foreach (Word word in allWords)
                {
                    Assert.NotNull(word);
                    Assert.NotEqual(0,word.Id);
                    Assert.NotEqual("", word.WordName);
                }
            }
        }
        [Fact]
        public void GetAllWordsOfACategoryShouldGetAllWordsOfACategory()
        {
            using (var context = new SIDbContext(_options))
            {
                //Arrange
                IDL dl = new DL(context);
                int catID = 1;
                //Act
                List<Word> wordsofCategory = dl.GetAllWordsOfACategory(catID);

                //Assert
                Assert.Equal(2, wordsofCategory.Count);
                foreach (Word word in wordsofCategory)
                {
                    Assert.Equal(catID, word.CategoryId);
                    Assert.NotEqual("",word.WordName);
                }
            }
        }
        [Fact]
        public void GetASongUrlShouldGetASongUrl()
        {
            using (var context = new SIDbContext(_options))
            {
                //Arrange
                IDL dl = new DL(context);
                int songID = 1;
                string expectedUrl = "https://SongStorage.com/songlist/song1";

                //Act
                string songUrl = dl.GetASongUrl(songID);

                //Assert
                Assert.Equal(expectedUrl, songUrl);
            }
        }

        private void Seed()
        {
            using (var context = new SIDbContext(_options))
            {
                context.Database.EnsureDeleted();
                context.Database.EnsureCreated();
                Category cat1 = new Category()
                {
                    Id = 1,
                    CategoryName = "cat1"
                };
                Category cat2 = new Category()
                {
                    Id = 2,
                    CategoryName = "cat2"
                };
                Category cat3 = new Category()
                {
                    Id = 3,
                    CategoryName = "cat3"
                };
                Category cat4 = new Category()
                {
                    Id = 4,
                    CategoryName = "cat4"
                };
                Word word1 = new Word()
                {
                    Id = 1,
                    WordName = "word1",
                    CategoryId = 1
                };
                Word word2 = new Word()
                {
                    Id = 2,
                    WordName = "word2",
                    CategoryId = 2
                };
                Word word3 = new Word()
                {
                    Id = 3,
                    WordName = "word3",
                    CategoryId = 3
                };
                Word word4 = new Word()
                {
                    Id = 4,
                    WordName = "word4",
                    CategoryId = 4
                };
                Word word5 = new Word()
                {
                    Id = 5,
                    WordName = "word5",
                    CategoryId = 1
                };
                Word word6 = new Word()
                {
                    Id = 6,
                    WordName = "word6",
                    CategoryId = 2
                };
                Word word7 = new Word()
                {
                    Id = 7,
                    WordName = "word7",
                    CategoryId =3
                }; 
                Word word8 = new Word()
                {
                    Id = 8,
                    WordName = "word8",
                    CategoryId = 8
                 };
                Song song1 = new Song()
                {
                    Id = 1,
                    SongName = "song1",
                    SongURL = "https://SongStorage.com/songlist/song1"
                };
                Song song2 = new Song()
                {
                    Id = 2,
                    SongName = "song2",
                    SongURL = "https://SongStorage.com/songlist/song2"
                };
                Song song3 = new Song()
                {
                    Id = 3,
                    SongName = "song3",
                    SongURL = "https://SongStorage.com/songlist/song3"
                };
                Song song4 = new Song()
                {
                    Id = 4,
                    SongName = "song4",
                    SongURL = "https://SongStorage.com/songlist/song4"
                };
                Song song5 = new Song()
                {
                    Id = 5,
                    SongName = "song5",
                    SongURL = "https://SongStorage.com/songlist/song5"
                };
                Song song6 = new Song()
                {
                    Id = 6,
                    SongName = "song6",
                    SongURL = "https://SongStorage.com/songlist/song6"
                };
                Song song7 = new Song()
                {
                    Id = 7,
                    SongName = "song7",
                    SongURL = "https://SongStorage.com/songlist/song7"
                };
                Song song8 = new Song()
                {
                    Id = 8,
                    SongName = "song8",
                    SongURL = "https://SongStorage.com/songlist/song8"
                };
                Picture pic1 = new Picture()
                {
                    Id = 1,
                    PictureURL = "https://SongStorage.com/picturelist/picture1"
                };
                Picture pic2 = new Picture()
                {
                    Id =2,
                    PictureURL = "https://SongStorage.com/picturelist/picture2"
                };
                Picture pic3 = new Picture()
                {
                    Id =3,
                    PictureURL = "https://SongStorage.com/picturelist/picture3"
                };
                Picture pic4 = new Picture()
                {
                    Id =4,
                    PictureURL = "https://SongStorage.com/picturelist/picture4"
                };
                Room roompub1 = new Room()
                {
                    Id = 1,
                    Public = true
                };
                Room roompub2 = new Room()
                {
                    Id = 2,
                    Public = true
                };
                Room roompub3 = new Room()
                {
                    Id = 3,
                    Public = true
                };
                Room roompriv1 = new Room()
                {
                    Id = 4,
                    Password = "room4",
                    Public = false
                };
                Room roompriv2 = new Room()
                {
                    Id = 5,
                    Password = "room5",
                    Public = false
                };
                Room roompriv3 = new Room()
                {
                    Id = 6,
                    Password = "room6",
                    Public = false
                };

                //These may need to be changed a bit once the dbset is made
                //context.Category.AddRange(cat1,cat2,cat3,cat4);
                //context.Word.AddRange(word1,word2,word3,word4,word5,word6,word7,word8);
                //context.Song.AddRange(song1,song2,song3,song4,song5,song6,song7,song8);
                //context.Picture.AddRange(pic1,pic2,pic3,pic4);
                //context.Room.AddRange(roompub1,roompub2,roompub3,roompriv1,roompriv2,roompriv3);

                context.SaveChanges();
            }
        }
    }
}
