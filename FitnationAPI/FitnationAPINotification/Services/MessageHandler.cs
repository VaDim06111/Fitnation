﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Core;

namespace FitnationAPINotification.Services
{
    public class MessageHandler : IMessageHandler
    {
        private IEmailSender _emailSender;

        public MessageHandler(IEmailSender emailSender)
        {
            _emailSender = emailSender;
        }


        public async Task SendMessage(Message message)
        {
            StringBuilder names = new StringBuilder();
            StringBuilder timeRange = new StringBuilder();
            foreach (var name in message.ObjectNames)
            {
                names.Append($"{name}, ");
            }
            foreach (var time in message.TimeRange)
            {
                timeRange.Append($"{time}, ");
            }
            await _emailSender.SendEmailAsync(message.Email,"You just now reserved some objects",
                $"Hi, {message.Email} \n You reserved {names} \n Date: {message.DateReservation}" +
                $"\n Type: {message.ObjectType}" +
                $"\n Time range: {timeRange} ");
        }
    }
}