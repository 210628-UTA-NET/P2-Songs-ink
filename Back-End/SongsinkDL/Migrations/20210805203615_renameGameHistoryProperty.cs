using Microsoft.EntityFrameworkCore.Migrations;

namespace SongsinkDL.Migrations
{
    public partial class renameGameHistoryProperty : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "ChatLogUrls",
                table: "GameHistories",
                newName: "ChatLogUrl");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "ChatLogUrl",
                table: "GameHistories",
                newName: "ChatLogUrls");
        }
    }
}
