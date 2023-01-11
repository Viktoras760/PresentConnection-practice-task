using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace StudentAPI.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class StudentsController : ControllerBase
    {

        private static List<Student> students = new List<Student>
        {
                new Student
                {
                    Id = 1,
                    Name = "Petras",
                    LastName = "Mockus",
                    Age = 22,
                    University = "Kaunas University of Technology"
                },
                new Student
                {
                    Id = 2,
                    Name = "Monika",
                    LastName = "Mockevičiūtė",
                    Age = 18,
                    University = "Kaunas University of Technology"
                }
        };
        private readonly StudentDbContext _context;
        public StudentsController(StudentDbContext dataContext)
        {
            _context = dataContext;
        }

        [HttpGet]
        public async Task<ActionResult<List<Student>>> GetStudents()
        {
            
            return Ok(await _context.Students.ToListAsync());
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Student>> GetStudentAsync(int id)
        {
            var student = await _context.Students.FindAsync(id);
            if (student == null)
                return BadRequest("Student not found.");
            return Ok(student);
        }

        [HttpPost]
        public async Task<ActionResult<List<Student>>> AddStudent(Student student)
        {
            _context.Students.Add(student);
            await _context.SaveChangesAsync();
            return Ok(await _context.Students.ToListAsync());
        }
    }
}
