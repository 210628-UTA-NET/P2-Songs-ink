using Microsoft.EntityFrameworkCore.Migrations;

namespace SongsinkDL.Migrations
{
    public partial class commentedProfileImg : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Players_Pictures_ProfileImgID",
                table: "Players");

            migrationBuilder.DropIndex(
                name: "IX_Players_ProfileImgID",
                table: "Players");

            migrationBuilder.DropColumn(
                name: "ProfileImgID",
                table: "Players");

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

        protected override void Down(MigrationBuilder migrationBuilder)
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

            migrationBuilder.AddColumn<int>(
                name: "ProfileImgID",
                table: "Players",
                type: "integer",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.CreateIndex(
                name: "IX_Players_ProfileImgID",
                table: "Players",
                column: "ProfileImgID");

            migrationBuilder.AddForeignKey(
                name: "FK_Players_Pictures_ProfileImgID",
                table: "Players",
                column: "ProfileImgID",
                principalTable: "Pictures",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
