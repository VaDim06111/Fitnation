﻿using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace Core
{
    public interface IMessageHandler
    {
        Task SendMessage(Message message);
    }
}
