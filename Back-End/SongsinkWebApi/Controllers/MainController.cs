using Microsoft.AspNetCore.Mvc;
using SongsinkBL;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace SongsinkWebApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MainController : ControllerBase
    {
        private IBL _BL;
        public MainController(IBL p_BL)
        {
            _BL = p_BL;  
        }

        [HttpGet("getAllCategories")]
        public async Task<IActionResult> GetAllCategories()
        {
            return Ok(await _BL.GetAllCategories());
        }

        [HttpGet("getAllWords")]
        public async Task<IActionResult> GetAllWords()
        {
            return Ok(await _BL.GetAllWords());
        }

        [HttpGet("getAllWordsOfACategory/{p_categoryId}")]
        public async Task<IActionResult> GetAllWordsOfACategory(int p_categoryId)
        {
            return Ok(await _BL.GetAllWordsOfACategory(p_categoryId));
        }

        [HttpGet("getASongUrl")]
        public IActionResult GetASongUrl(int p_songId)
        {
            return Ok(_BL.GetASongUrl(p_songId));
        }

        [HttpGet("getAllSongs")]
        public async Task<IActionResult> GetAllSongs()
        {
            return Ok(await _BL.GetAllSongs());
        }
    }
}
