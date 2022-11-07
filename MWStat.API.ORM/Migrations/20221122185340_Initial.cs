using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace MWStat.API.ORM.Migrations
{
    /// <inheritdoc />
    public partial class Initial : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "InstagramUser",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Pk = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Username = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    ProfilePicUrl = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_InstagramUser", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "InstagramRunDetails",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    InstagramUserId = table.Column<int>(type: "int", nullable: false),
                    StampDateTime = table.Column<DateTime>(type: "datetime2", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_InstagramRunDetails", x => x.Id);
                    table.ForeignKey(
                        name: "FK_InstagramRunDetails_InstagramUser_InstagramUserId",
                        column: x => x.InstagramUserId,
                        principalTable: "InstagramUser",
                        principalColumn: "Id");
                });

            migrationBuilder.CreateTable(
                name: "InstagramSessionData",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    InstagramUserId = table.Column<int>(type: "int", nullable: false),
                    AuthToken = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    SessionData = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_InstagramSessionData", x => x.Id);
                    table.ForeignKey(
                        name: "FK_InstagramSessionData_InstagramUser_InstagramUserId",
                        column: x => x.InstagramUserId,
                        principalTable: "InstagramUser",
                        principalColumn: "Id");
                });

            migrationBuilder.CreateTable(
                name: "InstagramRunDetailsToInstagramUser",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    InstagramRunDetailsId = table.Column<int>(type: "int", nullable: false),
                    InstagramUserId = table.Column<int>(type: "int", nullable: false),
                    RelationToUser = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_InstagramRunDetailsToInstagramUser", x => x.Id);
                    table.ForeignKey(
                        name: "FK_InstagramRunDetailsToInstagramUser_InstagramRunDetails_InstagramRunDetailsId",
                        column: x => x.InstagramRunDetailsId,
                        principalTable: "InstagramRunDetails",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_InstagramRunDetailsToInstagramUser_InstagramUser_InstagramUserId",
                        column: x => x.InstagramUserId,
                        principalTable: "InstagramUser",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_InstagramRunDetails_InstagramUserId",
                table: "InstagramRunDetails",
                column: "InstagramUserId");

            migrationBuilder.CreateIndex(
                name: "IX_InstagramRunDetailsToInstagramUser_InstagramRunDetailsId",
                table: "InstagramRunDetailsToInstagramUser",
                column: "InstagramRunDetailsId");

            migrationBuilder.CreateIndex(
                name: "IX_InstagramRunDetailsToInstagramUser_InstagramUserId",
                table: "InstagramRunDetailsToInstagramUser",
                column: "InstagramUserId");

            migrationBuilder.CreateIndex(
                name: "IX_InstagramSessionData_InstagramUserId",
                table: "InstagramSessionData",
                column: "InstagramUserId");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "InstagramRunDetailsToInstagramUser");

            migrationBuilder.DropTable(
                name: "InstagramSessionData");

            migrationBuilder.DropTable(
                name: "InstagramRunDetails");

            migrationBuilder.DropTable(
                name: "InstagramUser");
        }
    }
}
