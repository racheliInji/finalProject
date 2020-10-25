USE [RacheliandDini]
GO

/****** Object:  Table [dbo].[Users]    Script Date: 13/07/2020 11:56:19 ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[Users](
	[userId] [int] IDENTITY(1,1) NOT NULL,
	[tz] [nchar](9) NOT NULL,
	[firstName] [nvarchar](20) NOT NULL,
	[lastName] [nvarchar](20) NOT NULL,
	[city] [nvarchar](20) NOT NULL,
	[street] [nvarchar](10) NOT NULL,
	[numhouse] [int] NOT NULL,
	[email] [nvarchar](30) NOT NULL,
	[password] [nvarchar](10) NULL,
	[phone] [nvarchar](20) NULL,
PRIMARY KEY CLUSTERED 
(
	[userId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO


