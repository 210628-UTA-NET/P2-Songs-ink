﻿// <auto-generated />
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using Npgsql.EntityFrameworkCore.PostgreSQL.Metadata;
using SongsinkDL;

namespace SongsinkDL.Migrations
{
    [DbContext(typeof(SIDbContext))]
    partial class SIDbContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("Relational:MaxIdentifierLength", 63)
                .HasAnnotation("ProductVersion", "5.0.8")
                .HasAnnotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn);

            modelBuilder.Entity("SIModel.Category", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("integer")
                        .HasAnnotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn);

                    b.Property<string>("CategoryName")
                        .HasColumnType("text");

                    b.HasKey("Id");

                    b.ToTable("Categories");
                });

            modelBuilder.Entity("SIModel.Picture", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("integer")
                        .HasAnnotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn);

                    b.Property<string>("PictureURL")
                        .HasColumnType("text");

                    b.Property<int>("RoomID")
                        .HasColumnType("integer");

                    b.HasKey("Id");

                    b.HasIndex("RoomID");

                    b.ToTable("Pictures");
                });

            modelBuilder.Entity("SIModel.Player", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("integer")
                        .HasAnnotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn);

                    b.Property<int>("CurrentScore")
                        .HasColumnType("integer");

                    b.Property<int>("GamesPlayed")
                        .HasColumnType("integer");

                    b.Property<string>("Password")
                        .HasColumnType("text");

                    b.Property<int>("PlayerCategoryID")
                        .HasColumnType("integer");

                    b.Property<string>("PlayerName")
                        .HasColumnType("text");

                    b.Property<int>("PlayerScore")
                        .HasColumnType("integer");

                    b.Property<int>("ProfileImgID")
                        .HasColumnType("integer");

                    b.HasKey("Id");

                    b.HasIndex("PlayerCategoryID")
                        .IsUnique();

                    b.HasIndex("ProfileImgID");

                    b.ToTable("Players");
                });

            modelBuilder.Entity("SIModel.Room", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("integer")
                        .HasAnnotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn);

                    b.Property<string>("Password")
                        .HasColumnType("text");

                    b.Property<bool>("Public")
                        .HasColumnType("boolean");

                    b.HasKey("Id");

                    b.ToTable("Rooms");
                });

            modelBuilder.Entity("SIModel.Song", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("integer")
                        .HasAnnotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn);

                    b.Property<string>("SongName")
                        .HasColumnType("text");

                    b.Property<string>("SongURL")
                        .HasColumnType("text");

                    b.HasKey("Id");

                    b.ToTable("Songs");
                });

            modelBuilder.Entity("SIModel.Word", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("integer")
                        .HasAnnotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn);

                    b.Property<int>("CategoryId")
                        .HasColumnType("integer");

                    b.Property<string>("WordName")
                        .HasColumnType("text");

                    b.HasKey("Id");

                    b.HasIndex("CategoryId");

                    b.ToTable("Words");
                });

            modelBuilder.Entity("SIModel.Picture", b =>
                {
                    b.HasOne("SIModel.Room", "PictureRoom")
                        .WithMany("PicturesInRoom")
                        .HasForeignKey("RoomID")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("PictureRoom");
                });

            modelBuilder.Entity("SIModel.Player", b =>
                {
                    b.HasOne("SIModel.Category", "PlayerCategory")
                        .WithOne("PlayerList")
                        .HasForeignKey("SIModel.Player", "PlayerCategoryID")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("SIModel.Picture", "ProfileImg")
                        .WithMany("PlayerPicture")
                        .HasForeignKey("ProfileImgID")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("PlayerCategory");

                    b.Navigation("ProfileImg");
                });

            modelBuilder.Entity("SIModel.Word", b =>
                {
                    b.HasOne("SIModel.Category", "Category")
                        .WithMany("Words")
                        .HasForeignKey("CategoryId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Category");
                });

            modelBuilder.Entity("SIModel.Category", b =>
                {
                    b.Navigation("PlayerList");

                    b.Navigation("Words");
                });

            modelBuilder.Entity("SIModel.Picture", b =>
                {
                    b.Navigation("PlayerPicture");
                });

            modelBuilder.Entity("SIModel.Room", b =>
                {
                    b.Navigation("PicturesInRoom");
                });
#pragma warning restore 612, 618
        }
    }
}
