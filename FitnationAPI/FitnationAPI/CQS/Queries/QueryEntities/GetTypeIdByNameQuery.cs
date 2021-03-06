﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using MediatR;

namespace FitnationAPI.CQS.Queries.QueryEntities
{
    public class GetTypeIdByNameQuery : IRequest<Guid>
    {
        public string Name { get; }

        public GetTypeIdByNameQuery(string name)
        {
            Name = name;
        }
    }
}
