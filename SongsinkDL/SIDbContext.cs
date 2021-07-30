using Microsoft.EntityFrameworkCore;
using Models;
using Npgsql.EntityFrameworkCore.PostgreSQL;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace DL
{
    public class SIDbContext : DbContext
    {


        public SIDbContext() : base()
        { }

        public SIDbContext(DbContextOptions options) : base(options)
        { }

        protected override void OnModelCreating(ModelBuilder p_modelBuilder)
        {
            
        }
    }
}
