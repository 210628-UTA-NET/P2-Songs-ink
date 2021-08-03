using Microsoft.EntityFrameworkCore.Migrations;

namespace SongsinkDL.Migrations
{
    public partial class UpdateModelsAndKeys : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "CurrentScore",
                table: "Players",
                type: "integer",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<int>(
                name: "GamesPlayed",
                table: "Players",
                type: "integer",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<string>(
                name: "Password",
                table: "Players",
                type: "text",
                nullable: true);

            migrationBuilder.AddColumn<int>(
                name: "PlayerCategoryID",
                table: "Players",
                type: "integer",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<int>(
                name: "ProfileImgID",
                table: "Players",
                type: "integer",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<int>(
                name: "RoomID",
                table: "Pictures",
                type: "integer",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.CreateIndex(
                name: "IX_Players_PlayerCategoryID",
                table: "Players",
                column: "PlayerCategoryID",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_Players_ProfileImgID",
                table: "Players",
                column: "ProfileImgID");

            migrationBuilder.CreateIndex(
                name: "IX_Pictures_RoomID",
                table: "Pictures",
                column: "RoomID");

            migrationBuilder.AddForeignKey(
                name: "FK_Pictures_Rooms_RoomID",
                table: "Pictures",
                column: "RoomID",
                principalTable: "Rooms",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Players_Categories_PlayerCategoryID",
                table: "Players",
                column: "PlayerCategoryID",
                principalTable: "Categories",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Players_Pictures_ProfileImgID",
                table: "Players",
                column: "ProfileImgID",
                principalTable: "Pictures",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Pictures_Rooms_RoomID",
                table: "Pictures");

            migrationBuilder.DropForeignKey(
                name: "FK_Players_Categories_PlayerCategoryID",
                table: "Players");

            migrationBuilder.DropForeignKey(
                name: "FK_Players_Pictures_ProfileImgID",
                table: "Players");

            migrationBuilder.DropIndex(
                name: "IX_Players_PlayerCategoryID",
                table: "Players");

            migrationBuilder.DropIndex(
                name: "IX_Players_ProfileImgID",
                table: "Players");

            migrationBuilder.DropIndex(
                name: "IX_Pictures_RoomID",
                table: "Pictures");

            migrationBuilder.DropColumn(
                name: "CurrentScore",
                table: "Players");

            migrationBuilder.DropColumn(
                name: "GamesPlayed",
                table: "Players");

            migrationBuilder.DropColumn(
                name: "Password",
                table: "Players");

            migrationBuilder.DropColumn(
                name: "PlayerCategoryID",
                table: "Players");

            migrationBuilder.DropColumn(
                name: "ProfileImgID",
                table: "Players");

            migrationBuilder.DropColumn(
                name: "RoomID",
                table: "Pictures");
        }
    }
}
