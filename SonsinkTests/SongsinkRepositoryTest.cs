using System;
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
 
        private void Seed()
        {
            using (var context = new SIDbContext(_options))
            {
                context.Database.EnsureDeleted();
                context.Database.EnsureCreated();





                context.SaveChanges();
            }
        }
    }
}
