﻿// <auto-generated />
using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using Npgsql.EntityFrameworkCore.PostgreSQL.Metadata;
using SongsinkDL;

namespace SongsinkDL.Migrations
{
    [DbContext(typeof(SIDbContext))]
    [Migration("20210812055041_derelatedPlayerAndCustomerCategory")]
    partial class derelatedPlayerAndCustomerCategory
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("Relational:MaxIdentifierLength", 63)
                .HasAnnotation("ProductVersion", "5.0.8")
                .HasAnnotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn);

            modelBuilder.Entity("SongsinkModel.Category", b =>
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

            modelBuilder.Entity("SongsinkModel.CustomCategory", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("integer")
                        .HasAnnotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn);

                    b.Property<string>("CustomCategoryName")
                        .HasColumnType("text");

                    b.Property<int>("PlayerId")
                        .HasColumnType("integer");

                    b.HasKey("Id");

                    b.ToTable("CustomCategories");
                });

            modelBuilder.Entity("SongsinkModel.CustomWord", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("integer")
                        .HasAnnotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn);

                    b.Property<int>("CustomCategoryId")
                        .HasColumnType("integer");

                    b.Property<string>("CustomWordName")
                        .HasColumnType("text");

                    b.HasKey("Id");

                    b.HasIndex("CustomCategoryId");

                    b.ToTable("CustomWords");
                });

            modelBuilder.Entity("SongsinkModel.GameHistory", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("integer")
                        .HasAnnotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn);

                    b.Property<string>("ChatLogUrl")
                        .HasColumnType("text");

                    b.Property<DateTime>("Date")
                        .HasColumnType("timestamp without time zone");

                    b.Property<List<string>>("PictureUrls")
                        .HasColumnType("text[]");

                    b.HasKey("Id");

                    b.ToTable("GameHistories");
                });

            modelBuilder.Entity("SongsinkModel.Picture", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("integer")
                        .HasAnnotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn);

                    b.Property<string>("PictureURL")
                        .HasColumnType("text");

                    b.HasKey("Id");

                    b.ToTable("Pictures");
                });

            modelBuilder.Entity("SongsinkModel.Player", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("integer")
                        .HasAnnotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn);

                    b.Property<int>("CurrentScore")
                        .HasColumnType("integer");

                    b.Property<List<string>>("CustomWords")
                        .HasColumnType("text[]");

                    b.Property<string>("Email")
                        .HasColumnType("text");

                    b.Property<int>("GamesPlayed")
                        .HasColumnType("integer");

                    b.Property<string>("PlayerName")
                        .HasColumnType("text");

                    b.Property<int>("PlayerScore")
                        .HasColumnType("integer");

                    b.HasKey("Id");

                    b.ToTable("Players");
                });

            modelBuilder.Entity("SongsinkModel.Song", b =>
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

            modelBuilder.Entity("SongsinkModel.Word", b =>
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

            modelBuilder.Entity("SongsinkModel.CustomWord", b =>
                {
                    b.HasOne("SongsinkModel.CustomCategory", null)
                        .WithMany("CustomWords")
                        .HasForeignKey("CustomCategoryId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();
                });

            modelBuilder.Entity("SongsinkModel.Word", b =>
                {
                    b.HasOne("SongsinkModel.Category", null)
                        .WithMany("Words")
                        .HasForeignKey("CategoryId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();
                });

            modelBuilder.Entity("SongsinkModel.Category", b =>
                {
                    b.Navigation("Words");
                });

            modelBuilder.Entity("SongsinkModel.CustomCategory", b =>
                {
                    b.Navigation("CustomWords");
                });
#pragma warning restore 612, 618
        }
    }
}
