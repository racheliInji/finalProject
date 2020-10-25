USE [RacheliandDini]
GO

/****** Object:  Table [dbo].[SubjectToTeacher]    Script Date: 13/07/2020 11:55:47 ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[SubjectToTeacher](
	[TeacherId] [int] NOT NULL,
	[SubjectId] [int] NOT NULL,
	[PriceForLesson] [money] NOT NULL,
	[LessonLength] [int] NOT NULL,
	[GradesRange] [nchar](10) NULL,
PRIMARY KEY CLUSTERED 
(
	[SubjectId] ASC,
	[TeacherId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO

ALTER TABLE [dbo].[SubjectToTeacher]  WITH CHECK ADD FOREIGN KEY([TeacherId])
REFERENCES [dbo].[Teacher] ([TeacherId])
GO


