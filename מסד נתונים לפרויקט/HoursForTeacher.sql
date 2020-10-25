USE [RacheliandDini]
GO

/****** Object:  Table [dbo].[HoursForTeacher]    Script Date: 13/07/2020 11:52:53 ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[HoursForTeacher](
	[HoursForTeacherId] [int] IDENTITY(1,1) NOT NULL,
	[TeacherId] [int] NOT NULL,
	[Day] [nvarchar](10) NOT NULL,
	[Starttime] [time](7) NOT NULL,
	[Endtime] [time](7) NOT NULL,
PRIMARY KEY CLUSTERED 
(
	[HoursForTeacherId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO

ALTER TABLE [dbo].[HoursForTeacher]  WITH CHECK ADD FOREIGN KEY([TeacherId])
REFERENCES [dbo].[Users] ([userId])
GO


