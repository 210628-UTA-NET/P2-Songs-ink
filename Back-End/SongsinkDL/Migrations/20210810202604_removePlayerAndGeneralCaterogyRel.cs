using Microsoft.EntityFrameworkCore.Migrations;

namespace SongsinkDL.Migrations
{
    public partial class removePlayerAndGeneralCaterogyRel : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Players_Categories_PlayerCategoryID",
                table: "Players");

            migrationBuilder.DropIndex(
                name: "IX_Players_PlayerCategoryID",
                table: "Players");

            migrationBuilder.DropColumn(
                name: "PlayerCategoryID",
                table: "Players");

            migrationBuilder.AddColumn<int>(
                name: "PlayerListId",
                table: "Categories",
                type: "integer",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_Categories_PlayerListId",
                table: "Categories",
                column: "PlayerListId");

            migrationBuilder.AddForeignKey(
                name: "FK_Categories_Players_PlayerListId",
                table: "Categories",
                column: "PlayerListId",
                principalTable: "Players",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Categories_Players_PlayerListId",
                table: "Categories");

            migrationBuilder.DropIndex(
                name: "IX_Categories_PlayerListId",
                table: "Categories");

            migrationBuilder.DropColumn(
                name: "PlayerListId",
                table: "Categories");

            migrationBuilder.AddColumn<int>(
                name: "PlayerCategoryID",
                table: "Players",
                type: "integer",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.CreateIndex(
                name: "IX_Players_PlayerCategoryID",
                table: "Players",
                column: "PlayerCategoryID",
                unique: true);

            migrationBuilder.AddForeignKey(
                name: "FK_Players_Categories_PlayerCategoryID",
                table: "Players",
                column: "PlayerCategoryID",
                principalTable: "Categories",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
