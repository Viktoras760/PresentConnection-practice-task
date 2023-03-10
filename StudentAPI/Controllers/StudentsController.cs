using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace StudentAPI.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class StudentsController : ControllerBase
    {
        //for non database testing
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


        // GET api/students/page/{page}
        [HttpGet]
        [Route("page/{page}")]
        public async Task<ActionResult<List<Student>>> GetStudents(int page)
        {
            if (_context.Students == null)
                return NotFound();

            var pageResults = 3f;
            var pageCount = Math.Ceiling(_context.Students.Count() / pageResults);

            var students = await _context.Students.Skip((page - 1) * (int)pageResults).Take((int)pageResults).ToListAsync();

            var response = new StudentResponse
            {
                Students = students,
                CurrentPage = page,
                Pages = (int)pageCount
            };

            return Ok(response);
        }

        // GET api/students/page/{page}/{filter}
        [HttpGet]
        [Route("page/{page}/{filter}")]
        public async Task<ActionResult<List<Student>>> GetStudents(int page, string filter)
        {
            if (_context.Students == null)
                return NotFound();

            var pageResults = 3f;
            var pageCount = Math.Ceiling(_context.Students.Count() / pageResults);

            var students = await _context.Students.Skip((page - 1) * (int)pageResults).Take((int)pageResults).ToListAsync();

            //Filtering students
            if (filter != null)
            {
                students = students.Where(s => s.Name.Contains(filter) || s.LastName.Contains(filter) || s.Age.ToString().Contains(filter.ToString()) || s.University.Contains(filter)).ToList();
            }

            var response = new StudentResponse
            {
                Students = students,
                CurrentPage = page,
                Pages = (int)pageCount
            };

            return Ok(response);
        }

        // GET api/students/{id}
        [HttpGet("{id}")]
        public async Task<ActionResult<Student>> GetStudentAsync(int id)
        {
            var student = await _context.Students.FindAsync(id);
            if (student == null)
                return BadRequest("Student not found.");
            return Ok(student);
        }

        //POST api/students
        [HttpPost]
        public async Task<ActionResult<List<Student>>> AddStudent(Student student)
        {
            _context.Students.Add(student);
            await _context.SaveChangesAsync();
            return Ok(await _context.Students.ToListAsync());
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult<List<Student>>> Delete(int id)
        {
            var dbStudent = await _context.Students.FindAsync(id);
            if (dbStudent == null)
                return BadRequest("Student not found.");

            _context.Students.Remove(dbStudent);
            await _context.SaveChangesAsync();

            return Ok(await _context.Students.ToListAsync());
        }
    }
}
