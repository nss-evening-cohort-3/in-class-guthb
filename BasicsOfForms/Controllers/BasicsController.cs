using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Web.Mvc;
using System.Web;

namespace BasicsOfForms.Controllers
{
    public class BasicsController : Controller
    {
        //GET Index
        public ActionResult Index()
        {
           return View();
        }
    
        //POST:
        [HttpPost]
        public ActionResult Index(FormCollection form)
        {
            int i = 0;
            return View();
        }


        // GET: Basics RAZOR
        public ActionResult Razor()
        {
            return View();
        }

    }
}
