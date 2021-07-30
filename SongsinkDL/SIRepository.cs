using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;
using SIModel;

namespace SongsinkDL
{
    public class SIRepository
    {
        private readonly SIDbContext _context;
        public SIRepository(SIDbContext p_context)
        {
            _context = p_context;   
        }

    }
}