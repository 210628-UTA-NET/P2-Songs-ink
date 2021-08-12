using Microsoft.EntityFrameworkCore.Migrations;

namespace SongsinkDL.Migrations
{
    public partial class renamedPicturesToPlayerPictures1 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropPrimaryKey(
                name: "PK_Pictures",
                table: "Pictures");

            migrationBuilder.RenameTable(
                name: "Pictures",
                newName: "PlayerPictures");

            migrationBuilder.RenameColumn(
                name: "PictureUrl",
                table: "GameHistoryPictures",
                newName: "PictureURL");

            migrationBuilder.AddPrimaryKey(
                name: "PK_PlayerPictures",
                table: "PlayerPictures",
                column: "Id");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropPrimaryKey(
                name: "PK_PlayerPictures",
                table: "PlayerPictures");

            migrationBuilder.RenameTable(
                name: "PlayerPictures",
                newName: "Pictures");

            migrationBuilder.RenameColumn(
                name: "PictureURL",
                table: "GameHistoryPictures",
                newName: "PictureUrl");

            migrationBuilder.AddPrimaryKey(
                name: "PK_Pictures",
                table: "Pictures",
                column: "Id");
        }
    }
}
