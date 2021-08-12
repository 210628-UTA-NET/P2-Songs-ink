using Microsoft.EntityFrameworkCore.Migrations;

namespace SongsinkDL.Migrations
{
    public partial class renamedPicturesToPlayerPictures : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "PlayerPicturesUrls",
                table: "Players",
                newName: "PlayerPictures");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "PlayerPictures",
                table: "Players",
                newName: "PlayerPicturesUrls");
        }
    }
}
