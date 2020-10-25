USE [RacheliandDini]
GO

/****** Object:  Table [dbo].[Grade]    Script Date: 13/07/2020 11:51:04 ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[Grade](
	[IdGrade] [int] IDENTITY(1,1) NOT NULL,
	[Level] [nvarchar](20) NULL,
	[Grade] [nvarchar](20) NULL,
PRIMARY KEY CLUSTERED 
(
	[IdGrade] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO


