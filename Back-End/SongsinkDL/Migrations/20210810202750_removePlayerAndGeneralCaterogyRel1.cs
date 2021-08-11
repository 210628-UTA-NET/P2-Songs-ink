using Microsoft.EntityFrameworkCore.Migrations;

namespace SongsinkDL.Migrations
{
    public partial class removePlayerAndGeneralCaterogyRel1 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
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
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
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
    }
}
