using Microsoft.AspNetCore.Mvc;
using SongsinkModel;
using SongsinkBL;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Text.Json;

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

        [HttpGet("getASong/{p_songId}")]
        public async Task<IActionResult> GetASong(int p_songId)
        {
            return Ok(await _BL.GetASong(p_songId));
        }

        [HttpGet("getAllSongs")]
        public async Task<IActionResult> GetAllSongs()
        {
            return Ok(await _BL.GetAllSongs());
        }

        [HttpPost("addGameHistory")]
        public async Task<IActionResult> AddGameHistory([FromBody] GameHistory p_gameHistory)
        {
            return  Created("api/Main/addGameHistory", await _BL.AddGameHistory(p_gameHistory));
        }

        [HttpGet("getAPlayerWithId/{p_id}")]
        public async Task<IActionResult> GetAPlayerWithId(int p_id)
        {
            return Ok(await _BL.GetAPlayer(p_id));
        }

        [HttpGet("getAPlayer/{p_email}")]
        public async Task<IActionResult> GetAPlayer(string p_email)
        {
            return Ok(await _BL.GetAPlayer(p_email));
        }

        [HttpPost("createNewPlayer")]
        public async Task<IActionResult> CreateNewPlayer([FromBody] Player p_player)
        {
            return Created("api/Main/createNewPlayer", await _BL.CreateNewPlayer(p_player));
        }

        [HttpPut("updatePlayer")]
        public async Task<IActionResult> UpdatePlayer([FromBody] Player p_player)
        {
            return Ok(await _BL.UpdatePlayer(p_player));
        }
    }
}
