using Microsoft.EntityFrameworkCore.Migrations;

namespace SongsinkDL.Migrations
{
    public partial class AddedEmailToPlayer : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "Email",
                table: "Players",
                type: "text",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Email",
                table: "Players");
        }
    }
}
