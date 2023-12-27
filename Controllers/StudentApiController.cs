using Microsoft.AspNetCore.Mvc;
using StudentRegisterApi.Data;
using StudentRegisterApi.Models;

namespace StudentRegisterApi.Controllers
{
    [Route("api/Studentapi")]
    [ApiController]

    public class StudentApiController : ControllerBase
    {
        private readonly ApplicationDbContext _db;
        public StudentApiController(ApplicationDbContext db)
        {
            _db = db;

        }

        [HttpGet]
        public ActionResult<IEnumerable<Student>> GetStudents()
        {
            return Ok(_db.Studnts.ToList());

        }
       

         [HttpPost]
        public ActionResult<Student> CreateStudent([FromBody] Student student)
        {
            if (student == null)
            {
                // If the request body is empty, return BadRequest with a message
                return BadRequest("Invalid data. Please provide valid student information.");
            }

            if (string.IsNullOrWhiteSpace(student.Name) || string.IsNullOrWhiteSpace(student.Address) || string.IsNullOrWhiteSpace(student.Phone))
            {
                // If any of the required fields is missing, return BadRequest with a message
                return BadRequest("Name, address, and phone are required fields. Please provide valid values.");
            }

            _db.Add(student);
            _db.SaveChanges();
            return Ok(student) ;

        }

        

        

        [HttpGet("{id}")]

        public ActionResult<Student> GetStudent(int  id)
        {
            if(id==0)
            {
                return BadRequest();
            }

            var res=_db.Studnts.FirstOrDefault(x => x.Id == id);
            if (res == null)
            {
                return NotFound();
            }
            return Ok(res);

        }

        [HttpPut("{id}")]

        public ActionResult<Student> UpdateStudent(int id, [FromBody]Student student)
        {
            if (student == null)
            {
                // If the request body is empty, return BadRequest with a message
                return BadRequest("Invalid data. Please provide valid student information.");
            }

            if (string.IsNullOrWhiteSpace(student.Name) || string.IsNullOrWhiteSpace(student.Address) || string.IsNullOrWhiteSpace(student.Phone))
            {
                // If any of the required fields is missing, return BadRequest with a message
                return BadRequest("Name, address, and phone are required fields. Please provide valid values.");
            }

            Student upStudent = new();
            {
                upStudent.Id = id;
                upStudent.Name = student.Name;
                upStudent.Address = student.Address;
                upStudent.Phone = student.Phone;

            };

            _db.Studnts.Update(upStudent);
            _db.SaveChanges();
            return Ok(upStudent);

        }

        [HttpDelete("{id}")]
        public ActionResult DeleteStudent(int id)
        {
            Student model=_db.Studnts.FirstOrDefault(y => y.Id == id);
            if (model==null)
            {
                return BadRequest();
                
            }
            _db.Studnts.Remove(model);
            _db.SaveChanges();
            return NoContent();
        }



    }
}
