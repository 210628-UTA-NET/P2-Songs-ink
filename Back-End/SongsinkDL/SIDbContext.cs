using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using SongsinkModel;
using Npgsql.EntityFrameworkCore.PostgreSQL;

namespace SongsinkDL
{
    public class SIDbContext : DbContext
    {

        public DbSet<Category> Categories { get; set; }
        public DbSet<PlayerPicture> PlayerPictures { get; set; }
        public DbSet<Player> Players { get; set; }
        public DbSet<Song> Songs { get; set; }
        public DbSet<Word> Words { get; set; }
        public DbSet<GameHistory> GameHistories { get; set; }
        public DbSet<GameHistoryPicture> GameHistoryPictures { get; set; }
        public DbSet<CustomCategory> CustomCategories { get; set; }
        public DbSet<CustomWord> CustomWords { get; set; }

        //protected override void OnConfiguring(DbContextOptionsBuilder p_options)
        //{
        //    p_options.UseNpgsql(@"Server=hansken.db.elephantsql.com;Database=nxackagz;User ID=nxackagz;Password=5kbgSpXPnnXuypCmL7HRA_3Jm_w4sOkJ;Port=5432");
        //}

        public SIDbContext() : base()
        { }

        public SIDbContext(DbContextOptions options) : base(options)
        { }

        protected override void OnModelCreating(ModelBuilder p_modelBuilder)
        {
            p_modelBuilder.Entity<Category>()
                .Property(cat => cat.Id)
                .ValueGeneratedOnAdd();

            p_modelBuilder.Entity<Category>()
                .HasKey(cat => cat.Id);

            p_modelBuilder.Entity<PlayerPicture>()
                .Property(pic => pic.Id)
                .ValueGeneratedOnAdd();

            p_modelBuilder.Entity<PlayerPicture>()
                .HasKey(pic => pic.Id);

            p_modelBuilder.Entity<Player>()
                .Property(pla => pla.Id)
                .ValueGeneratedOnAdd();

            p_modelBuilder.Entity<Player>()
                .HasKey(pla => pla.Id);

            p_modelBuilder.Entity<Song>()
                .Property(sng => sng.Id)
                .ValueGeneratedOnAdd();

            p_modelBuilder.Entity<Song>()
                .HasKey(sng => sng.Id);

            p_modelBuilder.Entity<Word>()
                .Property(wrd => wrd.Id)
                .ValueGeneratedOnAdd();

            p_modelBuilder.Entity<Word>()
                .HasKey(wrd => wrd.Id);

            p_modelBuilder.Entity<GameHistory>()
                .Property(gh => gh.Id)
                .ValueGeneratedOnAdd();

            p_modelBuilder.Entity<GameHistoryPicture>()
                .Property(ghp => ghp.Id)
                .ValueGeneratedOnAdd();

            p_modelBuilder.Entity<CustomCategory>()
                .Property(cc => cc.Id)
                .ValueGeneratedOnAdd();

            p_modelBuilder.Entity<CustomWord>()
                .Property(cw => cw.Id)
                .ValueGeneratedOnAdd();
        }
    }
}
