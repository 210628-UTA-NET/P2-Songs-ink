using Microsoft.EntityFrameworkCore.Migrations;

namespace SongsinkDL.Migrations
{
    public partial class derelatedPlayerAndCustomerCategory : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_CustomCategories_Players_PlayerId",
                table: "CustomCategories");

            migrationBuilder.DropIndex(
                name: "IX_CustomCategories_PlayerId",
                table: "CustomCategories");

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

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_CustomWords_CustomCategories_CustomCategoryId",
                table: "CustomWords");

            migrationBuilder.DropIndex(
                name: "IX_CustomWords_CustomCategoryId",
                table: "CustomWords");

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
    }
}
