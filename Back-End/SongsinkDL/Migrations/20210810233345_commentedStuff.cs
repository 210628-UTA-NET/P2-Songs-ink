using Microsoft.EntityFrameworkCore.Migrations;

namespace SongsinkDL.Migrations
{
    public partial class commentedStuff : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Players_Pictures_PictureId",
                table: "Players");

            migrationBuilder.DropIndex(
                name: "IX_Players_PictureId",
                table: "Players");

            migrationBuilder.DropColumn(
                name: "PictureId",
                table: "Players");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "PictureId",
                table: "Players",
                type: "integer",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_Players_PictureId",
                table: "Players",
                column: "PictureId");

            migrationBuilder.AddForeignKey(
                name: "FK_Players_Pictures_PictureId",
                table: "Players",
                column: "PictureId",
                principalTable: "Pictures",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }
    }
}
