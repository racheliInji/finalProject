using DTO;
using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace WindowsFormsApp1
{
    public partial class Form1 : Form
    {
        public Form1()
        {
            InitializeComponent();
        }

        private void Form1_Load(object sender, EventArgs e)
        {
            dataGridView1.DataSource = BL.UserBl.GetUsers();
          
        }

        private void button1_Click(object sender, EventArgs e)
        {
            MessageBox.Show( BL.UserBl.Login(textBox1.Text , textBox1.Text).ToString());

        }

        private void textBox3_TextChanged(object sender, EventArgs e)
        {
            dataGridView2.DataSource = BL.TeacherBL.GetTeacher();
        }

        private void button2_Click(object sender, EventArgs e)
        {
           // UserDTO user = new UserDTO()
           // {
           //     userId = Int32.Parse(textBox3.Text),
           //     firstName = textBox4.Text,
           //     lastName = textBox5.Text,
           //     city = textBox6.Text,
           //     street = textBox7.Text,
           //     numhouse = Int32.Parse(textBox8.Text),
           //     email = textBox9.Text,
           //     password = textBox10.Text,
           //     phone = textBox11.Text,
           //     tz = textBox12.Text

           // };
           // TeacherDTO teacher = new TeacherDTO()
           // {
           //     TeacherId = Int32.Parse(textBox3.Text)
           // };
           //// BL.TeacherBL.AddTeacher(user, teacher);
           // try
           // {
           //     BL.TeacherBL.AddTeacher(user, teacher);
           //     MessageBox.Show("ok");
           // }
           // catch (Exception x)
           // {
           //     MessageBox.Show(x.ToString());
           // }

        }

        private void textBox12_TextChanged(object sender, EventArgs e)
        {

        }

        private void button3_Click(object sender, EventArgs e)
        {
            dataGridView2.DataSource = BL.TeacherBL.GetTeacher();
        }

        private void button4_Click(object sender, EventArgs e)
        {
            try
            {
                StudentDTO.UserAndStudentDTO userAndStudentDTO = new StudentDTO.UserAndStudentDTO()
                {
                    StudentId = Int32.Parse(textBox3.Text),
                    firstName = textBox4.Text,
                    lastName = textBox5.Text,
                    city = textBox6.Text,
                    street = textBox7.Text,
                    numhouse = Int32.Parse(textBox8.Text),
                    email = textBox9.Text,
                    password = textBox10.Text,
                    phone = textBox11.Text,
                    tz = textBox12.Text,
                    IdGrade = Int32.Parse(textBox13.Text),
                    Level = textBox14.Text
                };
                BL.StudentBL.AddStudent(userAndStudentDTO);
                MessageBox.Show("ok");
            }
            catch(Exception ex)
            {
                MessageBox.Show(ex.ToString());
            }
        }

        private void button5_Click(object sender, EventArgs e)
        {
            
        }
    }
}
