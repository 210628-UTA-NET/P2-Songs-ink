using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using SongsinkModel;
using Xunit;
using SongsinkDL;

namespace SongsinkTests
{
    public class SongsinkDLTest
    {
        private readonly DbContextOptions<SIDbContext> _options;

        public SongsinkDLTest()
        {
            _options = new DbContextOptionsBuilder<SIDbContext>().UseSqlite("filename = Test.db").Options;
            this.Seed();
        }

        private void Seed()
        {
            using (var context = new SIDbContext(_options))
            {
                context.Database.EnsureDeleted();
                context.Database.EnsureCreated();

                context.Players.AddRange(
                    new Player
                    {
                        PlayerName = "Player1",
                        PlayerScore = 1000,
                        CurrentScore = 875,
                        GamesPlayed = 10,
                        Email = "player1@gmail.com",
                        CustomWords = { "dog", "cat" }
                    },
                    new Player
                    {
                        Id = 2,
                        PlayerName = "Player2",
                        PlayerScore = 800,
                        CurrentScore = 120,
                        GamesPlayed = 15,
                        Email = "player2@gmail.com",
                        CustomWords = { "rabbit", "dragon" }
                    }
                );

                context.Categories.AddRange(
                    new Category
                    {
                        Id = 1,
                        CategoryName = "animal"
                    },
                    new Category
                    {
                        Id = 2,
                        CategoryName = "fruit"
                    }
                );

                context.Words.AddRange(
                    new Word
                    {
                        WordName = "chimp",
                        CategoryId = 1
                    },
                    new Word
                    {
                        WordName = "lion",
                        CategoryId = 1
                    },
                    new Word
                    {
                        WordName = "apple",
                        CategoryId = 2
                    },
                    new Word
                    {
                        WordName = "banana",
                        CategoryId = 2
                    }
                );

                context.Songs.AddRange(
                    new Song
                    {
                        SongName = "abc",
                        SongURL = "abc.com"
                    },
                    new Song
                    {
                        SongName = "zxc",
                        SongURL = "zxc.com"
                    }
                );

                context.GameHistories.Add(
                    new GameHistory
                    {
                        Date = DateTime.Now,
                        PictureUrls = {"asd.com","zxc.com"},
                        ChatLogUrl = "chat.com"
                    }
                    );
            }
        }

        [Fact]
        public async void GetAllCategoriesShouldGetAllCategories()
        {
            using (var context = new SIDbContext(_options))
            {
                //Arrange
                IDL dl = new DL(context);

                //Act
                List<Category> categories = await dl.GetAllCategories();

                //Assert
                Assert.Equal(2, categories.Count);
                foreach (Category category in categories)
                {
                    Assert.NotNull(category);
                    Assert.NotEqual(0, category.Id);
                    Assert.NotEqual("", category.CategoryName);
                }
            }
        }
    }

    
}
