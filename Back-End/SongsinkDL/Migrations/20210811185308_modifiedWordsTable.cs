using Microsoft.EntityFrameworkCore.Migrations;

namespace SongsinkDL.Migrations
{
    public partial class modifiedWordsTable : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_CustomWords_CustomCategories_CustomCategoryId",
                table: "CustomWords");

            migrationBuilder.DropIndex(
                name: "IX_CustomWords_CustomCategoryId",
                table: "CustomWords");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateIndex(
                name: "IX_CustomWords_CustomCategoryId",
                table: "CustomWords",
                column: "CustomCategoryId");

            migrationBuilder.AddForeignKey(
                name: "FK_CustomWords_CustomCategories_CustomCategoryId",
                table: "CustomWords",
                column: "CustomCategoryId",
                principalTable: "CustomCategories",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
