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
        public DbSet<GameHistory> GameHistories { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder p_options)
        {
            p_options.UseNpgsql(@"Server=hansken.db.elephantsql.com;Database=nxackagz;User ID=nxackagz;Password=5kbgSpXPnnXuypCmL7HRA_3Jm_w4sOkJ;Port=5432");
        }

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

            p_modelBuilder.Entity<Player>()
                .HasOne<Category>(play => play.PlayerCategory)
                .WithOne(cat => cat.PlayerList)
                .HasForeignKey<Player>(play => play.PlayerCategoryID);

            p_modelBuilder.Entity<Picture>()
                .HasOne(pic => pic.PictureRoom)
                .WithMany(rom => rom.PicturesInRoom)
                .HasForeignKey(pic => pic.RoomID);

            p_modelBuilder.Entity<Player>()
                .HasOne(play => play.ProfileImg)
                .WithMany(pic => pic.PlayerPicture)
                .HasForeignKey(play => play.ProfileImgID);

            p_modelBuilder.Entity<GameHistory>()
                .Property(gh => gh.Id)
                .ValueGeneratedOnAdd();
        }
    }
}
