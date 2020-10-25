USE [RacheliandDini]
GO

/****** Object:  Table [dbo].[Message]    Script Date: 13/07/2020 11:53:42 ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[Message](
	[MessageId] [int] IDENTITY(1,1) NOT NULL,
	[VacationId] [int] NOT NULL,
	[IsOk] [bit] NOT NULL,
PRIMARY KEY CLUSTERED 
(
	[MessageId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO

ALTER TABLE [dbo].[Message]  WITH CHECK ADD FOREIGN KEY([VacationId])
REFERENCES [dbo].[Vacation] ([VacationId])
GO


