USE [RacheliandDini]
GO

/****** Object:  Table [dbo].[Student]    Script Date: 13/07/2020 11:55:10 ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[Student](
	[StudentId] [int] NOT NULL,
	[IdGrade] [int] NOT NULL,
	[Level] [nvarchar](50) NULL,
PRIMARY KEY CLUSTERED 
(
	[StudentId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO

ALTER TABLE [dbo].[Student]  WITH CHECK ADD FOREIGN KEY([IdGrade])
REFERENCES [dbo].[Grade] ([IdGrade])
GO

ALTER TABLE [dbo].[Student]  WITH CHECK ADD FOREIGN KEY([IdGrade])
REFERENCES [dbo].[Grade] ([IdGrade])
GO

ALTER TABLE [dbo].[Student]  WITH CHECK ADD FOREIGN KEY([IdGrade])
REFERENCES [dbo].[Grade] ([IdGrade])
GO

ALTER TABLE [dbo].[Student]  WITH CHECK ADD FOREIGN KEY([StudentId])
REFERENCES [dbo].[Users] ([userId])
GO


