using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using SIModel;
using Npgsql.EntityFrameworkCore.PostgreSQL;

namespace SongsinkDL
{
    public class SIDbContext : DbContext
    {

        public DbSet<Category> Categories { get; set; }
        public DbSet<Picture> Pictures { get; set; }
        public DbSet<Player> Players { get; set; }
        public DbSet<Room> Rooms { get; set; }
        public DbSet<Song> Songs { get; set; }
        public DbSet<Word> Words { get; set; }


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


            p_modelBuilder.Entity<Picture>()
                .Property(pic => pic.Id)
                .ValueGeneratedOnAdd();

            p_modelBuilder.Entity<Picture>()
                .HasKey(pic => pic.Id);


            p_modelBuilder.Entity<Player>()
                .Property(pla => pla.Id)
                .ValueGeneratedOnAdd();

            p_modelBuilder.Entity<Player>()
                .HasKey(pla => pla.Id);


            p_modelBuilder.Entity<Room>()
                .Property(rom => rom.Id)
                .ValueGeneratedOnAdd();

            p_modelBuilder.Entity<Room>()
                .HasKey(rom => rom.Id);


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

            p_modelBuilder.Entity<Word>()
                .HasOne(wrd => wrd.Category)
                .WithMany(cat => cat.Words)
                .HasForeignKey(wrd => wrd.CategoryId);
        }
    }
}
