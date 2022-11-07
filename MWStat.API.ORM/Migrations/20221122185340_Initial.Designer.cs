﻿// <auto-generated />
using System;
using MWStat.API.ORM;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

#nullable disable

namespace MWStat.API.ORM.Migrations
{
    [DbContext(typeof(MWStatContext))]
    [Migration("20221122185340_Initial")]
    partial class Initial
    {
        /// <inheritdoc />
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "7.0.0")
                .HasAnnotation("Proxies:ChangeTracking", false)
                .HasAnnotation("Proxies:CheckEquality", false)
                .HasAnnotation("Proxies:LazyLoading", true)
                .HasAnnotation("Relational:MaxIdentifierLength", 128);

            SqlServerModelBuilderExtensions.UseIdentityColumns(modelBuilder);

            modelBuilder.Entity("MWStat.API.Domain.Dtos.InstagramRunDetailsDto", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Id"));

                    b.Property<int>("InstagramUserId")
                        .HasColumnType("int");

                    b.Property<DateTime>("StampDateTime")
                        .HasColumnType("datetime2");

                    b.HasKey("Id");

                    b.HasIndex("InstagramUserId");

                    b.ToTable("InstagramRunDetails");
                });

            modelBuilder.Entity("MWStat.API.Domain.Dtos.InstagramRunDetailsToInstagramUserDto", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Id"));

                    b.Property<int>("InstagramRunDetailsId")
                        .HasColumnType("int");

                    b.Property<int>("InstagramUserId")
                        .HasColumnType("int");

                    b.Property<int>("RelationToUser")
                        .HasColumnType("int");

                    b.HasKey("Id");

                    b.HasIndex("InstagramRunDetailsId");

                    b.HasIndex("InstagramUserId");

                    b.ToTable("InstagramRunDetailsToInstagramUser");
                });

            modelBuilder.Entity("MWStat.API.Domain.Dtos.InstagramSessionDataDto", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Id"));

                    b.Property<string>("AuthToken")
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("InstagramUserId")
                        .HasColumnType("int");

                    b.Property<string>("SessionData")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("Id");

                    b.HasIndex("InstagramUserId");

                    b.ToTable("InstagramSessionData");
                });

            modelBuilder.Entity("MWStat.API.Domain.Dtos.InstagramUserDto", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Id"));

                    b.Property<string>("Pk")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("ProfilePicUrl")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Username")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("Id");

                    b.ToTable("InstagramUser");
                });

            modelBuilder.Entity("MWStat.API.Domain.Dtos.InstagramRunDetailsDto", b =>
                {
                    b.HasOne("MWStat.API.Domain.Dtos.InstagramUserDto", "InstagramUser")
                        .WithMany()
                        .HasForeignKey("InstagramUserId")
                        .OnDelete(DeleteBehavior.NoAction)
                        .IsRequired();

                    b.Navigation("InstagramUser");
                });

            modelBuilder.Entity("MWStat.API.Domain.Dtos.InstagramRunDetailsToInstagramUserDto", b =>
                {
                    b.HasOne("MWStat.API.Domain.Dtos.InstagramRunDetailsDto", "InstagramRunDetails")
                        .WithMany("LinkedAccounts")
                        .HasForeignKey("InstagramRunDetailsId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("MWStat.API.Domain.Dtos.InstagramUserDto", "InstagramUser")
                        .WithMany("LinkedRunDetails")
                        .HasForeignKey("InstagramUserId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("InstagramRunDetails");

                    b.Navigation("InstagramUser");
                });

            modelBuilder.Entity("MWStat.API.Domain.Dtos.InstagramSessionDataDto", b =>
                {
                    b.HasOne("MWStat.API.Domain.Dtos.InstagramUserDto", "InstagramUser")
                        .WithMany()
                        .HasForeignKey("InstagramUserId")
                        .OnDelete(DeleteBehavior.NoAction)
                        .IsRequired();

                    b.Navigation("InstagramUser");
                });

            modelBuilder.Entity("MWStat.API.Domain.Dtos.InstagramRunDetailsDto", b =>
                {
                    b.Navigation("LinkedAccounts");
                });

            modelBuilder.Entity("MWStat.API.Domain.Dtos.InstagramUserDto", b =>
                {
                    b.Navigation("LinkedRunDetails");
                });
#pragma warning restore 612, 618
        }
    }
}
