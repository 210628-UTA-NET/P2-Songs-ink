using Microsoft.EntityFrameworkCore.Migrations;

namespace SongsinkDL.Migrations
{
    public partial class createdRelGHtoGHP : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "PictureUrls",
                table: "GameHistories",
                newName: "PictureURLs");

            migrationBuilder.RenameColumn(
                name: "ChatLogUrl",
                table: "GameHistories",
                newName: "ChatLogURL");

            migrationBuilder.CreateIndex(
                name: "IX_GameHistoryPictures_GameHistoryId",
                table: "GameHistoryPictures",
                column: "GameHistoryId");

            migrationBuilder.AddForeignKey(
                name: "FK_GameHistoryPictures_GameHistories_GameHistoryId",
                table: "GameHistoryPictures",
                column: "GameHistoryId",
                principalTable: "GameHistories",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_GameHistoryPictures_GameHistories_GameHistoryId",
                table: "GameHistoryPictures");

            migrationBuilder.DropIndex(
                name: "IX_GameHistoryPictures_GameHistoryId",
                table: "GameHistoryPictures");

            migrationBuilder.RenameColumn(
                name: "PictureURLs",
                table: "GameHistories",
                newName: "PictureUrls");

            migrationBuilder.RenameColumn(
                name: "ChatLogURL",
                table: "GameHistories",
                newName: "ChatLogUrl");
        }
    }
}
