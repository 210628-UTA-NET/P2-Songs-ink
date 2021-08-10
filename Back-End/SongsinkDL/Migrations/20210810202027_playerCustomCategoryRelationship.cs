using Microsoft.EntityFrameworkCore.Migrations;

namespace SongsinkDL.Migrations
{
    public partial class playerCustomCategoryRelationship : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateIndex(
                name: "IX_CustomCategories_PlayerId",
                table: "CustomCategories",
                column: "PlayerId");

            migrationBuilder.AddForeignKey(
                name: "FK_CustomCategories_Players_PlayerId",
                table: "CustomCategories",
                column: "PlayerId",
                principalTable: "Players",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_CustomCategories_Players_PlayerId",
                table: "CustomCategories");

            migrationBuilder.DropIndex(
                name: "IX_CustomCategories_PlayerId",
                table: "CustomCategories");
        }
    }
}
