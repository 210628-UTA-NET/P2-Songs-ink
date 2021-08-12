using Microsoft.EntityFrameworkCore.Migrations;
using Npgsql.EntityFrameworkCore.PostgreSQL.Metadata;

namespace SongsinkDL.Migrations
{
    public partial class updatedPictureTablesCreatedGHPictureTables : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_CustomWords_CustomCategories_CustomCategoryId",
                table: "CustomWords");

            migrationBuilder.DropIndex(
                name: "IX_CustomWords_CustomCategoryId",
                table: "CustomWords");

            migrationBuilder.RenameColumn(
                name: "CustomCategoryId",
                table: "CustomWords",
                newName: "CustomerId");

            migrationBuilder.AddColumn<int>(
                name: "PlayerId",
                table: "Pictures",
                type: "integer",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.CreateTable(
                name: "GameHistoryPictures",
                columns: table => new
                {
                    Id = table.Column<int>(type: "integer", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    GameHistoryId = table.Column<int>(type: "integer", nullable: false),
                    PictureUrl = table.Column<string>(type: "text", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_GameHistoryPictures", x => x.Id);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "GameHistoryPictures");

            migrationBuilder.DropColumn(
                name: "PlayerId",
                table: "Pictures");

            migrationBuilder.RenameColumn(
                name: "CustomerId",
                table: "CustomWords",
                newName: "CustomCategoryId");

            migrationBuilder.CreateIndex(
                name: "IX_CustomWords_CustomCategoryId",
                table: "CustomWords",
                column: "CustomCategoryId");

            migrationBuilder.AddForeignKey(
                name: "FK_CustomWords_CustomCategories_CustomCategoryId",
                table: "CustomWords",
                column: "CustomCategoryId",
                principalTable: "CustomCategories",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
